const GITHUB_API = 'https://api.github.com'
const CACHE_PREFIX = 'ph-portfolio-gh:'
const CACHE_TTL_MS = 10 * 60 * 1000

export interface GitHubProfile {
  publicRepos: number
  followers: number
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
  const cacheKey = `profile:${username}`
  const cached = readCache<GitHubProfile>(cacheKey)
  if (cached) return cached

  const user = await fetchJson<{ public_repos: number; followers: number }>(
    `/users/${username}`,
    signal,
  )
  const profile: GitHubProfile = {
    publicRepos: user.public_repos,
    followers: user.followers,
  }
  writeCache(cacheKey, profile)
  return profile
}
