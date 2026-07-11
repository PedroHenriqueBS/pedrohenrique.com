export const profile = {
  name: 'Pedro Henrique',
  githubUsername: 'PedroHenriqueBS',
  email: 'pedrohenriqueb366@gmail.com',
  location: 'Gravataí, RS 🇧🇷',
  company: 'Hortti',
  links: {
    github: 'https://github.com/PedroHenriqueBS',
    githubRepos: 'https://github.com/PedroHenriqueBS?tab=repositories',
    linkedin: 'https://www.linkedin.com/in/pedro-henrique-23418b213/',
    whatsapp: 'https://wa.me/5551998421305',
  },
  /** Static fallbacks shown until (or if) the GitHub API responds. */
  githubFallback: {
    publicRepos: 13,
    followers: 42,
    memberSince: 2017,
  },
  yearsInTech: '3+',
  typewriterRoles: [
    'Full Stack Developer',
    'React • TypeScript',
    'Node.js • NestJS',
    'PostgreSQL • Docker',
  ],
} as const
