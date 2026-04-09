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
      fr: 'Rédactrice mode & bijoux',
      en: 'Fashion & Jewellery Editor',
    },
    role: {
      fr: 'Rédactrice mode & bijoux',
      en: 'Fashion & Jewellery Editor',
    },
    bio: {
      fr: 'Magalie Ergoz est rédactrice spécialisée en mode et bijoux chez Meilleur Classement. Elle décrypte les tendances joaillières et sélectionne les meilleures pièces de créateurs pour vous guider dans vos choix.',
      en: 'Magalie Ergoz is a fashion and jewellery editor at Meilleur Classement. She decodes jewellery trends and curates the best designer pieces to guide your choices.',
    },
    linkedinUrl: '',
    expertise: ['Mode', 'Bijoux', 'Joaillerie', 'Accessoires'],
  },
} as const;

export type AuthorId = keyof typeof authors;
