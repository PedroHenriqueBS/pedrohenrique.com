import { useLanguage } from "../../i18n";
import { profile } from "../../data/profile";
import { useGitHubProfile } from "../../hooks/useGitHubProfile";
import { useGitHubStats } from "../../hooks/useGitHubStats";
import { Card } from "../ui/Card";
import { SectionHeading } from "../ui/SectionHeading";

/** GitHub's official language colors for the languages Pedro actually uses. */
const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Vue: "#41b883",
  Astro: "#ff5a03",
  HTML: "#e34c26",
  CSS: "#663399",
  SCSS: "#c6538c",
};

export function GitHubStats() {
  const { t } = useLanguage();
  const github = useGitHubProfile();
  const { stats, failed } = useGitHubStats();

  const summary = [
    { value: String(github.publicRepos), label: t.github.publicRepos },
    { value: String(github.followers), label: t.github.followers },
    { value: "3x", label: "Pull Shark 🦈" },
    { value: "2x", label: "Pair Extraordinaire" },
  ];

  const facts = [
    { label: t.github.publicRepos, value: String(github.publicRepos) },
    { label: t.github.followers, value: String(github.followers) },
    // A "0 stars" row would read as a downside — only brag when there is something to brag about.
    ...(stats && stats.totalStars > 0
      ? [{ label: t.github.stars, value: String(stats.totalStars) }]
      : []),
    { label: t.github.memberSince, value: String(github.memberSince) },
  ];
  
  return (
    <section
      id='github'
      className='relative z-1 mx-auto max-w-[1140px] scroll-mt-16 px-6 py-16 md:py-[90px]'
    >
      <SectionHeading number='06' title='GitHub' />

      {failed ? (
        <a
          data-reveal
          href={profile.links.github}
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center justify-center gap-3 rounded-2xl border border-dashed border-accent/30 bg-surface px-6 py-8.5 font-mono text-[13px] text-faint transition-colors hover:border-accent hover:text-accent'
        >
          <span className='text-accent' aria-hidden='true'>
            $
          </span>
          {t.github.statsUnavailable} →
        </a>
      ) : (
        <div className='grid items-stretch gap-5.5 md:grid-cols-2'>
          <Card data-reveal className='p-6.5'>
            <div className='mb-5 font-mono text-[13px] text-accent'>{`// ${t.github.statsTitle}`}</div>
            <dl className='flex flex-col gap-3.5 font-mono text-[13.5px]'>
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className='flex items-baseline justify-between gap-4 border-b border-accent/8 pb-3'
                >
                  <dt className='text-muted'>{fact.label}</dt>
                  <dd className='text-lg font-semibold text-accent'>
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Card>

          <Card data-reveal className='p-6.5'>
            <div className='mb-5 font-mono text-[13px] text-accent'>{`// ${t.github.langsTitle}`}</div>
            {stats ? (
              <ul className='flex flex-col gap-4'>
                {stats.languages.map((language) => {
                  const color =
                    LANGUAGE_COLORS[language.name] ?? "var(--color-accent)";
                  return (
                    <li key={language.name} className='font-mono text-[13px]'>
                      <div className='mb-1.5 flex justify-between text-muted'>
                        <span className='text-ink'>{language.name}</span>
                        <span>{language.percent}%</span>
                      </div>
                      <div
                        className='h-2 overflow-hidden rounded-full bg-bg'
                        role='presentation'
                      >
                        <div
                          className='h-full rounded-full transition-[width] duration-700'
                          style={{
                            width: `${language.percent}%`,
                            backgroundColor: color,
                          }}
                        />
                      </div>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <div className='flex h-40 items-center justify-center font-mono text-[13px] text-faint'>
                <span className='animate-pulse'>{t.github.loading}</span>
              </div>
            )}
          </Card>
        </div>
      )}

      <Card
        data-reveal
        className='mt-5.5 flex flex-wrap justify-around gap-4.5 px-6.5 py-5.5 text-center font-mono'
      >
        {summary.map((item) => (
          <div key={item.label}>
            <div className='text-2xl font-semibold text-accent'>
              {item.value}
            </div>
            <div className='text-xs text-faint'>{item.label}</div>
          </div>
        ))}
      </Card>
    </section>
  );
}
