import type { Localized } from '../i18n'

export interface Project {
  name: string
  /** Repository name on GitHub — used to enrich the card with live API data. */
  repo: string
  url: string
  language: string
  description: Localized
  tags: readonly string[]
}

export const featuredProjects: readonly Project[] = [
  {
    name: 'WaiterApp — API',
    repo: 'waiterapp-api',
    url: 'https://github.com/PedroHenriqueBS/waiterapp-api',
    language: 'TypeScript',
    description: {
      pt: 'API REST para um sistema de pedidos de restaurante: gestão de produtos, categorias e pedidos em tempo real.',
      en: 'REST API for a restaurant ordering system: products, categories and real-time order management.',
    },
    tags: ['Node.js', 'TypeScript', 'REST API'],
  },
  {
    name: 'WaiterApp — Front',
    repo: 'waiterapp-front',
    url: 'https://github.com/PedroHenriqueBS/waiterapp-front',
    language: 'TypeScript',
    description: {
      pt: 'Interface web do sistema de pedidos para garçons, com acompanhamento do status dos pedidos em tempo real.',
      en: 'Web interface of the waiter ordering system, with real-time order status tracking.',
    },
    tags: ['React', 'TypeScript'],
  },
  {
    name: 'LP Streaming',
    repo: 'lp-hbo',
    url: 'https://github.com/PedroHenriqueBS/lp-hbo',
    language: 'CSS',
    description: {
      pt: 'Landing page de streaming responsiva, reproduzindo uma interface rica com carrosséis e planos de assinatura.',
      en: 'Responsive streaming landing page reproducing a rich interface with carousels and subscription plans.',
    },
    tags: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    name: 'LP PlayStation',
    repo: 'lp-playstation',
    url: 'https://github.com/PedroHenriqueBS/lp-playstation',
    language: 'TypeScript',
    description: {
      pt: 'Landing page construída com Angular, Tailwind e Swiper, explorando componentes e carrosséis interativos.',
      en: 'Landing page built with Angular, Tailwind and Swiper, exploring components and interactive carousels.',
    },
    tags: ['Angular', 'TailwindCSS', 'Swiper'],
  },
]
