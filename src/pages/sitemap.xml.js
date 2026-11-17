import { urlFor } from '../lib/legacy.js';
import { sitePages } from '../lib/pages.js';
import { posts } from '../lib/blog.js';

export const GET = () => {
  const pages = sitePages();
  const urls = [
    ...pages.map((s) => `  <url><loc>${urlFor(s)}</loc></url>`),
    ...posts.map((p) => `  <url><loc>${urlFor(`blogs/${p.slug}`)}</loc><lastmod>${p.updated ?? p.date}</lastmod></url>`),
  ].join('\n');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml' } },
  );
};
