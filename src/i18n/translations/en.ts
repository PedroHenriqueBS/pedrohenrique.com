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
      "I'm passionate about technology and constantly looking to evolve. I'm currently a Software Developer at Hortti, working on modern web platforms with React, TypeScript, NestJS and PostgreSQL.",
    paragraph2:
      'My goal is to contribute to the advancement of technology by solving problems and building innovative solutions. Determined to grow professionally, I am always open to challenges and learning opportunities.',
    factRole: 'Full Stack Developer',
    factDegree: 'Software Engineering (ongoing)',
  },
  skills: {
    title: 'Skills & Technologies',
  },
  projects: {
    title: 'Featured projects',
    subtitle: 'A selection of personal projects — click to see the code on GitHub.',
    imagePlaceholder: '[ project screenshot ]',
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
    statsUnavailable: 'stats unavailable right now — see them on the profile',
    statsAlt: 'GitHub statistics',
    topLangsAlt: 'Most used languages',
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
