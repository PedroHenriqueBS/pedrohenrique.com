import type { Translation } from './pt'

export const en: Translation = {
  nav: {
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    experience: 'Experience',
    support: 'Support',
    contact: 'Contact',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  hero: {
    hello: 'hi, my name is',
    description:
      'Junior Full Stack Developer passionate about technology. I build modern web applications with React, TypeScript, Node.js and NestJS — focused on performance, scalability and user experience.',
    viewProjects: 'View projects',
    statYears: 'years in tech',
    statRepos: 'repositories',
    statFollowers: 'followers',
    coffeeBadge: 'coffee-driven development ☕',
  },
  about: {
    title: 'About me',
    paragraph1:
      'My journey in tech started in IT infrastructure — support, networking and environment setup — and evolved into software development. Along the way I built responsive websites and interfaces optimized for every device, always focused on delivering real value: faster, more accessible and more enjoyable products.',
    paragraph2:
      "Today I'm a Software Developer at Hortti, the digital infrastructure for Brazil's food supply centers (Ceasas): a platform that connects every Ceasa in the country in a single place, digitizing the fresh-produce trade and bringing growers, merchants and buyers closer together. There I build features end to end with React, TypeScript, NestJS and PostgreSQL — from database modeling to the UI — applying unit testing and architecture best practices to a product that moves the country's food supply.",
    paragraph3:
      'My goal is to keep growing by solving real problems. Determined to evolve professionally, I am always open to challenges, good conversations and learning opportunities.',
    factRole: 'Full Stack Developer',
    factDegree: 'Software Engineering (ongoing)',
  },
  skills: {
    title: 'Skills & Technologies',
  },
  projects: {
    title: 'Featured projects',
    subtitle: 'A selection of personal projects — click to see the code on GitHub.',
    screenshotAlt: (name: string) => `Screenshot of the ${name} project`,
    viewAll: (count: number) => `See all ${count} repositories`,
  },
  experience: {
    title: 'Experience',
    current: 'CURRENT',
  },
  education: {
    title: 'Education',
    ongoing: 'ongoing',
    completed: 'completed',
  },
  github: {
    publicRepos: 'public repositories',
    followers: 'followers',
    stars: 'stars earned',
    memberSince: 'on GitHub since',
    statsTitle: 'stats',
    langsTitle: 'most used languages',
    loading: 'loading…',
    statsUnavailable: 'stats unavailable right now — see them on the profile',
  },
  support: {
    kicker: 'support my work',
    title: 'Buy me a coffee ☕',
    description:
      'Enjoyed my work or one of my projects? You can support my journey as a dev with a contribution of any amount via PIX. Every bit of support becomes coffee — and coffee becomes code.',
    amountLabel: 'Contribution amount',
    customAmountLabel: 'Custom amount (R$)',
    customAmountPlaceholder: 'e.g. 15.00',
    messageLabel: 'Message (optional)',
    messagePlaceholder: 'Leave a note :)',
    submit: 'Generate PIX',
    generating: 'Creating charge…',
    awaitingPayment: 'awaiting payment',
    scanTitle: 'Scan the QR Code to pay',
    scanDescription: 'Open your bank app and scan the code, or use the copy-paste code below.',
    copyCode: 'Copy PIX code',
    copied: 'Copied!',
    expiresIn: 'expires in',
    paidTitle: 'Payment received! 💚',
    paidDescription: 'Thank you so much for the support — it makes all the difference. Good coffee guaranteed!',
    expiredTitle: 'This PIX has expired',
    startOver: 'Generate a new one',
    cancel: 'Cancel',
    errorGeneric: "Couldn't create the charge right now. Please try again in a moment.",
    unavailable: 'Contributions are temporarily unavailable.',
    amountHint: (min: string, max: string) => `between ${min} and ${max}`,
    invalidAmount: 'Enter a valid amount.',
    qrAlt: 'PIX QR Code for contribution',
  },
  contact: {
    kicker: "what's next?",
    title: "Let's talk!",
    description:
      "I'm always open to new opportunities, projects and good conversations about tech. Reach out!",
  },
  footer: 'built from scratch with lots of coffee',
}
