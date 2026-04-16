import type { Lang } from '@/config/site';

// Base path from Astro config (e.g. '/meilleur-choix' or '')
const base = (import.meta.env.BASE_URL ?? '/').replace(/\/$/, '');

export function withBase(path: string): string {
  if (!base || path.startsWith('http://') || path.startsWith('https://') || path.startsWith(base + '/') || path === base) return path;
  return `${base}${path}`;
}

function stripBase(path: string): string {
  if (base && path.startsWith(base)) {
    return path.slice(base.length) || '/';
  }
  return path;
}

// Mapping des slugs FR → EN
const slugMap: Record<string, string> = {
  'meilleures-valises-cabine': 'best-carry-on-luggage',
  'meilleurs-evenements-marketing-2026': 'best-marketing-events-2026',
  'meilleur-magasin-costumes-homme': 'best-mens-suit-stores',
  'iphone-reconditionne-meilleurs-sites': 'best-refurbished-iphone-sites',
  'samsung-reconditionne-meilleurs-vendeurs': 'best-refurbished-samsung-sellers',
  'meilleurs-sites-smartphones-reconditionnes': 'best-refurbished-smartphone-sites',
  'meilleures-agences-voyage-polynesie': 'best-travel-agencies-polynesia',
  'meilleure-marque-costume-mariage': 'best-wedding-suit-brands',
  'site-pour-acheter-masque-bdsm': 'where-to-buy-bdsm-mask-online',
  'top-5-ear-cuffs-femme-or-look-underground': 'top-5-gold-ear-cuffs-women-underground-look',
  'ear-cuff-femme-budget-1000-euros': 'ear-cuff-women-1000-euro-budget',
  'top-10-meilleurs-couvreurs-ile-de-france': 'top-10-best-roofers-ile-de-france',
  'meilleures-marques-cheveux-gras': 'best-brands-oily-hair',
  'meilleur-ear-cuff-femme-diamant-non-traditionnel': 'best-diamond-ear-cuffs-women-non-traditional',
};

// Mapping inversé EN → FR
const slugMapReverse: Record<string, string> = Object.fromEntries(
  Object.entries(slugMap).map(([fr, en]) => [en, fr])
);

// Traductions de l'interface
const translations: Record<string, Record<Lang, string>> = {
  'site.title': { fr: 'Meilleur Classement', en: 'Meilleur Classement' },
  'site.tagline': { fr: 'Comparez, choisissez, avancez', en: 'Compare, choose, move forward' },
  'nav.home': { fr: 'Accueil', en: 'Home' },
  'nav.blog': { fr: 'Articles', en: 'Articles' },
  'nav.categories': { fr: 'Nos classements', en: 'Our rankings' },
  'blog.title': { fr: 'Tous les articles', en: 'All articles' },
  'blog.description': { fr: 'Découvrez nos comparatifs et guides pour faire les meilleurs choix tech.', en: 'Discover our comparisons and guides to make the best tech choices.' },
  'article.publishedOn': { fr: 'Publié le', en: 'Published on' },
  'article.by': { fr: 'par', en: 'by' },
  'article.readMore': { fr: 'Lire la suite', en: 'Read more' },
  'article.faq': { fr: 'Questions fréquentes', en: 'Frequently asked questions' },
  'article.furtherReading': { fr: 'Pour aller plus loin', en: 'Further reading' },
  'article.backToBlog': { fr: '← Retour aux articles', en: '← Back to articles' },
  'article.readingTime': { fr: 'min de lecture', en: 'min read' },
  'article.updatedOn': { fr: 'Mis à jour le', en: 'Updated on' },
  'category.title': { fr: 'Catégorie', en: 'Category' },
  'footer.rights': { fr: 'Tous droits réservés.', en: 'All rights reserved.' },
  'home.hero.title': { fr: 'Trouvez le meilleur, sans compromis', en: 'Find the best, no compromise' },
  'home.hero.subtitle': { fr: 'Comparatifs indépendants et classements vérifiés pour vous aider à faire le bon choix.', en: 'Independent comparisons and verified rankings to help you make the right choice.' },
  'home.latest': { fr: 'Derniers articles', en: 'Latest articles' },
  'home.viewAll': { fr: 'Voir tous les articles', en: 'View all articles' },
  'home.trust.title': { fr: 'Pourquoi nous faire confiance', en: 'Why trust us' },
  'home.trust.independent': { fr: 'Indépendant', en: 'Independent' },
  'home.trust.independentDesc': { fr: 'Aucun partenariat ne biaise nos classements. Nos comparatifs reflètent des tests réels.', en: 'No partnership biases our rankings. Our comparisons reflect real-world testing.' },
  'home.trust.methodology': { fr: 'Méthodologie transparente', en: 'Transparent methodology' },
  'home.trust.methodologyDesc': { fr: 'Chaque classement suit des critères clairs et documentés, accessibles à tous.', en: 'Every ranking follows clear, documented criteria accessible to everyone.' },
  'home.trust.updated': { fr: 'Mis à jour régulièrement', en: 'Regularly updated' },
  'home.trust.updatedDesc': { fr: 'Nos articles sont révisés pour refléter les évolutions du marché.', en: 'Our articles are revised to reflect market changes.' },
  'home.categories.title': { fr: 'Explorer par catégorie', en: 'Explore by category' },
  'breadcrumb.home': { fr: 'Accueil', en: 'Home' },
  'breadcrumb.blog': { fr: 'Articles', en: 'Articles' },
  'lang.switch': { fr: 'EN', en: 'FR' },
  'lang.switchLabel': { fr: 'Switch to English', en: 'Passer en français' },
};

// Mapping catégories FR → EN
const categoryMap: Record<string, string> = {
  'saas-logiciels': 'saas-software',
  'hebergement-cloud': 'hosting-cloud',
  'vpn-securite': 'vpn-security',
  'mode': 'fashion',
  'smartphones': 'smartphones',
  'voyage': 'travel',
  'evenements': 'events',
  'services': 'services',
  'beaute': 'beauty',
};

const categoryMapReverse: Record<string, string> = Object.fromEntries(
  Object.entries(categoryMap).map(([fr, en]) => [en, fr])
);

const categoryNames: Record<string, Record<Lang, string>> = {
  'saas-logiciels': { fr: 'SaaS & Logiciels', en: 'SaaS & Software' },
  'hebergement-cloud': { fr: 'Hébergement & Cloud', en: 'Hosting & Cloud' },
  'vpn-securite': { fr: 'VPN & Sécurité', en: 'VPN & Security' },
  'mode': { fr: 'Mode', en: 'Fashion' },
  'smartphones': { fr: 'Smartphones', en: 'Smartphones' },
  'voyage': { fr: 'Voyage', en: 'Travel' },
  'evenements': { fr: 'Événements', en: 'Events' },
  'services': { fr: 'Services', en: 'Services' },
  'beaute': { fr: 'Beauté', en: 'Beauty' },
};

export function getLang(url: URL | string): Lang {
  const pathname = typeof url === 'string' ? url : url.pathname;
  const clean = stripBase(pathname);
  return clean.startsWith('/en/') || clean === '/en' ? 'en' : 'fr';
}

export function t(lang: Lang, key: string): string {
  return translations[key]?.[lang] ?? key;
}

export function getAlternatePath(path: string): string {
  // Normalize: ensure trailing slash for consistent matching
  let clean = stripBase(path);
  if (!clean.endsWith('/')) clean += '/';

  if (clean.startsWith('/en/')) {
    // EN → FR
    const frPath = clean.replace('/en/', '/');
    const match = frPath.match(/^\/blog\/(.+?)\/$/);
    if (match && slugMapReverse[match[1]]) {
      return withBase(`/blog/${slugMapReverse[match[1]]}/`);
    }
    const catMatch = frPath.match(/^\/category\/(.+?)\/$/);
    if (catMatch && categoryMapReverse[catMatch[1]]) {
      return withBase(`/categorie/${categoryMapReverse[catMatch[1]]}/`);
    }
    return withBase(frPath.replace('/category/', '/categorie/'));
  } else {
    // FR → EN
    const match = clean.match(/^\/blog\/(.+?)\/$/);
    if (match && slugMap[match[1]]) {
      return withBase(`/en/blog/${slugMap[match[1]]}/`);
    }
    const catMatch = clean.match(/^\/categorie\/(.+?)\/$/);
    if (catMatch && categoryMap[catMatch[1]]) {
      return withBase(`/en/category/${categoryMap[catMatch[1]]}/`);
    }
    return withBase('/en' + clean.replace('/categorie/', '/category/'));
  }
}

export function getCollectionName(lang: Lang): 'blog' | 'blog-en' {
  return lang === 'fr' ? 'blog' : 'blog-en';
}

export function getDateLocale(lang: Lang): string {
  return lang === 'fr' ? 'fr-FR' : 'en-US';
}

export function formatDate(date: Date, lang: Lang): string {
  return date.toLocaleDateString(getDateLocale(lang), {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function getCategorySlug(categoryName: string): string {
  return categoryName
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/&/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

export function getCategoryName(slug: string, lang: Lang): string {
  return categoryNames[slug]?.[lang] ?? slug;
}

export function getCategoryPath(slug: string, lang: Lang): string {
  if (lang === 'en') {
    const enSlug = categoryMap[slug] ?? slug;
    return withBase(`/en/category/${enSlug}/`);
  }
  return withBase(`/categorie/${slug}/`);
}

export function getBlogPath(lang: Lang): string {
  return withBase(lang === 'en' ? '/en/blog/' : '/blog/');
}

export function getArticlePath(slug: string, lang: Lang): string {
  return withBase(lang === 'en' ? `/en/blog/${slug}/` : `/blog/${slug}/`);
}

export function getHomePath(lang: Lang): string {
  return withBase(lang === 'en' ? '/en/' : '/');
}
