import { useLanguage } from '../../i18n'
import { profile } from '../../data/profile'
import { featuredProjects } from '../../data/projects'
import { useGitHubProfile } from '../../hooks/useGitHubProfile'
import { SectionHeading } from '../ui/SectionHeading'
import { Tag } from '../ui/Tag'
import { ArrowUpRightIcon } from '../ui/icons'

export function Projects() {
  const { t, resolve } = useLanguage()
  const github = useGitHubProfile()

  return (
    <section id="projetos" className="relative z-1 mx-auto max-w-[1140px] scroll-mt-16 px-6 py-16 md:py-[90px]">
      <SectionHeading number="03" title={t.projects.title} />
      <p data-reveal className="-mt-6 mb-9 text-[15px] text-faint">
        {t.projects.subtitle}
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {featuredProjects.map((project) => (
          <a
            key={project.repo}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            data-reveal
            className="block overflow-hidden rounded-2xl border border-accent/15 bg-surface text-ink transition-all duration-300 hover:-translate-y-[5px] hover:border-accent/50 hover:shadow-[0_16px_44px_rgba(0,0,0,0.5)]"
          >
            <div className="relative flex h-[150px] items-center justify-center border-b border-accent/10 [background:repeating-linear-gradient(-45deg,#0d130d_0px,#0d130d_14px,#0f160f_14px,#0f160f_28px)]">
              <span className="rounded-md border border-dashed border-accent/30 px-3.5 py-1.5 font-mono text-xs text-faint">
                {t.projects.imagePlaceholder}
              </span>
              <span className="absolute top-3.5 right-3.5 rounded-[5px] border border-accent/25 bg-bg/80 px-2 py-1 font-mono text-[11px] text-accent">
                {project.language}
              </span>
            </div>
            <div className="p-6 pb-6.5">
              <div className="mb-2.5 flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <ArrowUpRightIcon className="flex-none text-accent" />
              </div>
              <p className="mb-4.5 text-[14.5px] leading-relaxed text-muted">
                {resolve(project.description)}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Tag key={tag} compact>
                    {tag}
                  </Tag>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>

      <div data-reveal className="mt-9 text-center">
        <a
          href={profile.links.githubRepos}
          target="_blank"
          rel="noopener noreferrer"
          className="border-b border-accent/40 pb-0.5 font-mono text-sm text-accent transition-colors hover:text-ink"
        >
          {t.projects.viewAll(github.publicRepos)} →
        </a>
      </div>
    </section>
  )
}
