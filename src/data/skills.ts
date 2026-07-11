import type { Localized } from '../i18n'

export interface SkillGroup {
  tag: string
  title: Localized
  items: readonly Localized[]
}

const same = (text: string): Localized => ({ pt: text, en: text })

export const skillGroups: readonly SkillGroup[] = [
  {
    tag: '~/frontend',
    title: same('Frontend'),
    items: [
      same('React'),
      same('Next.js'),
      same('Vue.js'),
      same('Angular'),
      same('TypeScript'),
      same('JavaScript'),
      same('TailwindCSS'),
      same('HTML5'),
      same('CSS3'),
    ],
  },
  {
    tag: '~/backend',
    title: same('Backend'),
    items: [
      same('Node.js'),
      same('NestJS'),
      same('Prisma'),
      same('Sequelize'),
      same('REST API'),
      { pt: 'Testes unitários', en: 'Unit testing' },
    ],
  },
  {
    tag: '~/data-devops',
    title: { pt: 'Dados & DevOps', en: 'Data & DevOps' },
    items: [same('PostgreSQL'), same('MySQL'), same('Docker'), same('Git')],
  },
]
