import { useEffect, useState } from 'react'
import { fetchGitHubStats, type GitHubStats } from '../lib/github'
import { profile } from '../data/profile'

interface GitHubStatsState {
  stats: GitHubStats | null
  failed: boolean
}

/** Aggregated stars + top languages; `failed` drives the fallback UI. */
export function useGitHubStats(): GitHubStatsState {
  const [state, setState] = useState<GitHubStatsState>({
    stats: null,
    failed: false,
  })

  useEffect(() => {
    const controller = new AbortController()
    fetchGitHubStats(profile.githubUsername, controller.signal)
      .then((stats) => setState({ stats, failed: false }))
      .catch(() => {
        if (!controller.signal.aborted) setState({ stats: null, failed: true })
      })
    return () => controller.abort()
  }, [])

  return state
}
