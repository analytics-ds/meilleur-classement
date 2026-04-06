export const authors = {
  'meilleur-choix': {
    id: 'meilleur-choix',
    name: 'Meilleur Classement',
    type: 'organization' as const,
    role: {
      fr: 'Média comparatif tech',
      en: 'Tech comparison media',
    },
    bio: {
      fr: 'Meilleur Classement est un média indépendant spécialisé dans les comparatifs de solutions tech, SaaS et services numériques. Notre mission : vous aider à faire le bon choix.',
      en: 'Meilleur Classement is an independent media outlet specializing in tech, SaaS, and digital service comparisons. Our mission: helping you make the right choice.',
    },
  },
  'thomas-durand': {
    id: 'thomas-durand',
    name: 'Thomas Durand',
    type: 'person' as const,
    jobTitle: {
      fr: 'Rédacteur en chef',
      en: 'Editor-in-Chief',
    },
    role: {
      fr: 'Rédacteur en chef & analyste tech',
      en: 'Editor-in-Chief & tech analyst',
    },
    bio: {
      fr: 'Thomas Durand est rédacteur en chef de Meilleur Classement. Passionné de technologie, il teste et compare les solutions numériques pour aider les professionnels et particuliers à faire les bons choix.',
      en: 'Thomas Durand is Editor-in-Chief at Meilleur Classement. Passionate about technology, he tests and compares digital solutions to help professionals and individuals make the right choices.',
    },
    linkedinUrl: '',
    expertise: ['SaaS', 'Cloud Computing', 'Cybersécurité', 'Outils de productivité'],
  },
  'magalie-ergoz': {
    id: 'magalie-ergoz',
    name: 'Magalie Ergoz',
    type: 'person' as const,
    jobTitle: {
      fr: 'Blogueuse mode & beauté',
      en: 'Fashion & beauty blogger',
    },
    role: {
      fr: 'Spécialiste mode & beauté',
      en: 'Fashion & beauty specialist',
    },
    bio: {
      fr: 'Magalie Ergoz est blogueuse spécialisée en mode et beauté. Elle teste et compare les marques pour aider ses lectrices et lecteurs à trouver les meilleurs produits au juste prix.',
      en: 'Magalie Ergoz is a fashion and beauty blogger. She tests and compares brands to help her readers find the best products at the right price.',
    },
    linkedinUrl: '',
    expertise: ['Mode', 'Beauté', 'Cosmétiques', 'Accessoires'],
  },
} as const;

export type AuthorId = keyof typeof authors;
