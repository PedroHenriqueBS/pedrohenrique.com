import { useState } from 'react'
import { useLanguage } from '../../i18n'
import { profile } from '../../data/profile'
import { useGitHubProfile } from '../../hooks/useGitHubProfile'
import { Card } from '../ui/Card'
import { SectionHeading } from '../ui/SectionHeading'

const STATS_BASE = 'https://github-readme-stats.vercel.app/api'
const CHART_THEME =
  'bg_color=00000000&text_color=9db3a0&title_color=00ff88&hide_border=true'

export function GitHubStats() {
  const { t } = useLanguage()
  const github = useGitHubProfile()
  const [chartsFailed, setChartsFailed] = useState(false)

  const markFailed = () => setChartsFailed(true)

  const summary = [
    { value: String(github.publicRepos), label: t.github.publicRepos },
    { value: String(github.followers), label: t.github.followers },
    { value: '3x', label: 'Pull Shark 🦈' },
    { value: '2x', label: 'Pair Extraordinaire' },
  ]

  return (
    <section id="github" className="relative z-1 mx-auto max-w-[1140px] scroll-mt-16 px-6 py-16 md:py-[90px]">
      <SectionHeading number="06" title="GitHub" />

      {chartsFailed ? (
        <a
          data-reveal
          href={profile.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 rounded-2xl border border-dashed border-accent/30 bg-surface px-6 py-8.5 font-mono text-[13px] text-faint transition-colors hover:border-accent hover:text-accent"
        >
          <span className="text-accent" aria-hidden="true">
            $
          </span>
          {t.github.statsUnavailable} →
        </a>
      ) : (
        <div className="grid items-stretch gap-5.5 md:grid-cols-2">
          <Card data-reveal className="flex items-center justify-center p-4.5">
            <img
              src={`${STATS_BASE}?username=${profile.githubUsername}&show_icons=true&icon_color=00ff88&ring_color=00ff88&rank_icon=github&${CHART_THEME}`}
              alt={t.github.statsAlt}
              loading="lazy"
              onError={markFailed}
              className="max-w-full"
            />
          </Card>
          <Card data-reveal className="flex items-center justify-center p-4.5">
            <img
              src={`${STATS_BASE}/top-langs/?username=${profile.githubUsername}&layout=compact&${CHART_THEME}`}
              alt={t.github.topLangsAlt}
              loading="lazy"
              onError={markFailed}
              className="max-w-full"
            />
          </Card>
        </div>
      )}

      <Card data-reveal className="mt-5.5 flex flex-wrap justify-around gap-4.5 px-6.5 py-5.5 text-center font-mono">
        {summary.map((item) => (
          <div key={item.label}>
            <div className="text-2xl font-semibold text-accent">{item.value}</div>
            <div className="text-xs text-faint">{item.label}</div>
          </div>
        ))}
      </Card>
    </section>
  )
}
