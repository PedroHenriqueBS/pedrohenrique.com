export const pt = {
  nav: {
    about: 'Sobre',
    skills: 'Skills',
    projects: 'Projetos',
    experience: 'Experiência',
    support: 'Apoie',
    contact: 'Contato',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
  },
  hero: {
    hello: 'olá, meu nome é',
    description:
      'Desenvolvedor Full Stack júnior apaixonado por tecnologia. Construo aplicações web modernas com React, TypeScript, Node.js e NestJS — com foco em performance, escalabilidade e experiência do usuário.',
    viewProjects: 'Ver projetos',
    statYears: 'anos em tech',
    statRepos: 'repositórios',
    statFollowers: 'seguidores',
    coffeeBadge: 'movido a café ☕',
  },
  about: {
    title: 'Sobre mim',
    paragraph1:
      'Sou apaixonado por tecnologia e estou constantemente buscando evoluir. Atualmente sou Desenvolvedor de Software na Hortti, onde trabalho com plataformas web modernas usando React, TypeScript, NestJS e PostgreSQL.',
    paragraph2:
      'Meu objetivo é contribuir para o avanço da tecnologia, resolvendo problemas e desenvolvendo soluções inovadoras. Determinado a crescer profissionalmente, estou sempre aberto a desafios e oportunidades de aprendizado.',
    factRole: 'Full Stack Developer',
    factDegree: 'Eng. de Software (cursando)',
  },
  skills: {
    title: 'Skills & Tecnologias',
  },
  projects: {
    title: 'Projetos em destaque',
    subtitle: 'Uma seleção de projetos pessoais — clique para ver o código no GitHub.',
    imagePlaceholder: '[ screenshot do projeto ]',
    viewAll: (count: number) => `Ver todos os ${count} repositórios`,
  },
  experience: {
    title: 'Experiência',
    current: 'ATUAL',
  },
  education: {
    title: 'Formação',
    ongoing: 'cursando',
    completed: 'concluído',
  },
  github: {
    publicRepos: 'repositórios públicos',
    followers: 'seguidores',
    statsUnavailable: 'estatísticas indisponíveis no momento — veja direto no perfil',
    statsAlt: 'Estatísticas do GitHub',
    topLangsAlt: 'Linguagens mais usadas',
  },
  support: {
    kicker: 'apoie meu trabalho',
    title: 'Me pague um café ☕',
    description:
      'Gostou do meu trabalho ou de algum projeto? Você pode apoiar minha jornada como dev com uma contribuição de qualquer valor via PIX. Todo apoio vira café — e café vira código.',
    amountLabel: 'Valor da contribuição',
    customAmountLabel: 'Outro valor (R$)',
    customAmountPlaceholder: 'ex.: 15,00',
    messageLabel: 'Mensagem (opcional)',
    messagePlaceholder: 'Deixe um recado :)',
    submit: 'Gerar PIX',
    generating: 'Gerando cobrança…',
    awaitingPayment: 'aguardando pagamento',
    scanTitle: 'Escaneie o QR Code para pagar',
    scanDescription: 'Abra o app do seu banco e escaneie o código, ou use o copia-e-cola abaixo.',
    copyCode: 'Copiar código PIX',
    copied: 'Copiado!',
    expiresIn: 'expira em',
    paidTitle: 'Pagamento recebido! 💚',
    paidDescription: 'Muito obrigado pelo apoio — ele faz toda a diferença. Bom café garantido!',
    expiredTitle: 'Este PIX expirou',
    startOver: 'Gerar um novo',
    cancel: 'Cancelar',
    errorGeneric: 'Não foi possível gerar a cobrança agora. Tente novamente em instantes.',
    unavailable: 'As contribuições estão temporariamente indisponíveis.',
    amountHint: (min: string, max: string) => `entre ${min} e ${max}`,
    invalidAmount: 'Informe um valor válido.',
    qrAlt: 'QR Code PIX para contribuição',
  },
  contact: {
    kicker: 'e agora?',
    title: 'Vamos conversar!',
    description:
      'Estou sempre aberto a novas oportunidades, projetos e boas conversas sobre tecnologia. Me chama!',
  },
  footer: 'construído do zero com muito café',
}

export type Translation = typeof pt
