import type { APIRoute } from 'astro';
import { siteConfig } from '@/config/site';

// Build category slug from display name (same logic as getCategorySlug in i18n.ts)
function toSlug(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/&/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

const categoryMap: Record<string, string> = {
  'saas-logiciels': 'saas-software',
  'hebergement-cloud': 'hosting-cloud',
  'vpn-securite': 'vpn-security',
  'mode': 'fashion',
  'smartphones': 'smartphones',
  'voyage': 'travel',
  'evenements': 'events',
  'services': 'services',
};

export const GET: APIRoute = () => {
  const baseUrl = `https://${siteConfig.brand.domain}`;

  const pages: Array<{ url: string; priority: string; changefreq: string }> = [
    { url: '/', priority: '1.0', changefreq: 'daily' },
    { url: '/blog/', priority: '0.8', changefreq: 'weekly' },
    { url: '/plan-du-site/', priority: '0.6', changefreq: 'weekly' },
    { url: '/en/', priority: '0.9', changefreq: 'daily' },
    { url: '/en/blog/', priority: '0.8', changefreq: 'weekly' },
    { url: '/en/sitemap/', priority: '0.6', changefreq: 'weekly' },
  ];

  // Add all category pages (FR + EN)
  for (const cat of siteConfig.categories) {
    const frSlug = toSlug(cat);
    const enSlug = categoryMap[frSlug] ?? frSlug;
    pages.push({ url: `/categorie/${frSlug}/`, priority: '0.7', changefreq: 'monthly' });
    pages.push({ url: `/en/category/${enSlug}/`, priority: '0.7', changefreq: 'monthly' });
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
