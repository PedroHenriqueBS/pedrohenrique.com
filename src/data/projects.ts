import type { Localized } from "../i18n";
import streamingScreenshot from "../assets/projects/streaming.webp";
import financesScreenshot from "../assets/projects/dashboard.webp";

export interface Project {
  name: string;
  repo: string;
  url: string;
  language: string;
  screenshot: string;
  description: Localized;
  tags: readonly string[];
}

export const featuredProjects: readonly Project[] = [
  {
    name: "streaming",
    repo: "streaming",
    url: "https://github.com/PedroHenriqueBS/streaming",
    language: "Vue 3",
    screenshot: streamingScreenshot,
    description: {
      pt: "Plataforma de streaming completa: Vue 3, Pinia e Tailwind no front, NestJS, Prisma e PostgreSQL no back. Autenticação JWT, múltiplos perfis por conta e catálogo alimentado pela API do TMDB.",
      en: "Full streaming platform: Vue 3, Pinia and Tailwind on the front end, NestJS, Prisma and PostgreSQL on the back end. JWT auth, multiple profiles per account and a catalog powered by the TMDB API.",
    },
    tags: [
      "Vue 3",
      "TypeScript",
      "Pinia",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "JWT",
    ],
  },
  {
    name: "finances",
    repo: "finances",
    url: "https://github.com/PedroHenriqueBS/finances",
    language: "Astro",
    screenshot: financesScreenshot,
    description: {
      pt: "Plataforma de finanças que registra ganhos e perdas com a possibilidade de acompanhar o mercado de investimentos através da API brapi.",
      en: "A finance platform that tracks gains and losses, with the ability to monitor the investment market via the brapi API.",
    },
    tags: [
      "Astro",
      "TypeScript",
      "PostgreSQL",
      "Tailwind",
      "NestJS",
      "Prisma",
      "JWT",
    ],
  },
];
