const GITHUB_API = 'https://api.github.com'
const CACHE_PREFIX = 'ph-portfolio-gh:'
const CACHE_TTL_MS = 10 * 60 * 1000

export interface GitHubProfile {
  publicRepos: number
  followers: number
  /** Year the account was created. */
  memberSince: number
}

export interface LanguageShare {
  name: string
  percent: number
}

export interface GitHubStats {
  totalStars: number
  languages: readonly LanguageShare[]
}

interface CacheEntry<T> {
  savedAt: number
  data: T
}

function readCache<T>(key: string): T | null {
  try {
    const raw = sessionStorage.getItem(CACHE_PREFIX + key)
    if (!raw) return null
    const entry = JSON.parse(raw) as CacheEntry<T>
    if (Date.now() - entry.savedAt > CACHE_TTL_MS) return null
    return entry.data
  } catch {
    return null
  }
}

function writeCache<T>(key: string, data: T): void {
  try {
    const entry: CacheEntry<T> = { savedAt: Date.now(), data }
    sessionStorage.setItem(CACHE_PREFIX + key, JSON.stringify(entry))
  } catch {
    // best-effort cache — a full sessionStorage should never break the page
  }
}

async function fetchJson<T>(path: string, signal?: AbortSignal): Promise<T> {
  const response = await fetch(`${GITHUB_API}${path}`, {
    signal,
    headers: { Accept: 'application/vnd.github+json' },
  })
  if (!response.ok) {
    throw new Error(`GitHub API responded with ${response.status}`)
  }
  return (await response.json()) as T
}

export async function fetchGitHubProfile(
  username: string,
  signal?: AbortSignal,
): Promise<GitHubProfile> {
  const cacheKey = `profile-v2:${username}`
  const cached = readCache<GitHubProfile>(cacheKey)
  if (cached) return cached

  const user = await fetchJson<{
    public_repos: number
    followers: number
    created_at: string
  }>(`/users/${username}`, signal)
  const profile: GitHubProfile = {
    publicRepos: user.public_repos,
    followers: user.followers,
    memberSince: new Date(user.created_at).getFullYear(),
  }
  writeCache(cacheKey, profile)
  return profile
}

interface RepoSummary {
  language: string | null
  stargazers_count: number
  fork: boolean
}

/**
 * Aggregates stars and language usage across the user's own repositories —
 * replaces the github-readme-stats images, whose public instance is often
 * rate-limited.
 */
export async function fetchGitHubStats(
  username: string,
  signal?: AbortSignal,
): Promise<GitHubStats> {
  const cacheKey = `stats:${username}`
  const cached = readCache<GitHubStats>(cacheKey)
  if (cached) return cached

  const repos = await fetchJson<RepoSummary[]>(
    `/users/${username}/repos?per_page=100`,
    signal,
  )
  const ownRepos = repos.filter((repo) => !repo.fork)

  const totalStars = ownRepos.reduce(
    (sum, repo) => sum + repo.stargazers_count,
    0,
  )

  const counts = new Map<string, number>()
  for (const repo of ownRepos) {
    if (!repo.language) continue
    counts.set(repo.language, (counts.get(repo.language) ?? 0) + 1)
  }
  const totalCounted = [...counts.values()].reduce((sum, n) => sum + n, 0)
  const languages = [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([name, count]) => ({
      name,
      percent: Math.round((count / totalCounted) * 100),
    }))

  const stats: GitHubStats = { totalStars, languages }
  writeCache(cacheKey, stats)
  return stats
}
