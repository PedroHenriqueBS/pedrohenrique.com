import { useLanguage } from '../../i18n'
import { profile } from '../../data/profile'

export function Contact() {
  const { t } = useLanguage()

  const socials = [
    { label: 'LinkedIn', href: profile.links.linkedin },
    { label: 'GitHub', href: profile.links.github },
    { label: 'WhatsApp', href: profile.links.whatsapp },
  ]

  return (
    <section id="contato" className="relative z-1 mx-auto max-w-[1140px] scroll-mt-16 px-6 py-20 pb-20 text-center md:pt-[100px]">
      <div data-reveal>
        <div className="mb-3.5 font-mono text-sm text-accent">{`// 08. ${t.contact.kicker}`}</div>
        <h2 className="mb-4.5 text-[clamp(34px,5vw,52px)] font-bold tracking-[-1.5px]">
          {t.contact.title}
        </h2>
        <p className="mx-auto mb-9 max-w-[520px] text-[16.5px] leading-[1.7] text-muted">
          {t.contact.description}
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="inline-block max-w-full rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold break-all text-bg shadow-[0_0_28px_--alpha(var(--color-accent)/28%)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_44px_--alpha(var(--color-accent)/50%)] sm:px-8.5 sm:text-base"
        >
          {profile.email}
        </a>
        <div className="mt-8.5 flex flex-wrap justify-center gap-4.5 font-mono text-[13.5px]">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-accent/20 px-4.5 py-2.5 text-muted transition-colors hover:border-accent hover:text-accent"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
