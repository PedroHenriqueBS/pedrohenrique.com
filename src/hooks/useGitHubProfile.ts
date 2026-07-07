import { useEffect, useState } from 'react'
import { fetchGitHubProfile, type GitHubProfile } from '../lib/github'
import { profile } from '../data/profile'

/**
 * Live GitHub stats with a static fallback — the page never shows empty
 * numbers, even when the API is rate-limited or offline.
 */
export function useGitHubProfile(): GitHubProfile {
  const [data, setData] = useState<GitHubProfile>(profile.githubFallback)

  useEffect(() => {
    const controller = new AbortController()
    fetchGitHubProfile(profile.githubUsername, controller.signal)
      .then(setData)
      .catch(() => {
        // keep the static fallback silently
      })
    return () => controller.abort()
  }, [])

  return data
}
