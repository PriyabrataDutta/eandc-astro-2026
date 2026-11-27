import { urlFor } from '../lib/site.js';
import { sitePages } from '../lib/pages.js';
import { posts, topics, MIN_INDEXED } from '../lib/blog.js';

export const GET = () => {
  const pages = sitePages();
  const urls = [
    ...pages.map((s) => `  <url><loc>${urlFor(s)}</loc></url>`),
    // Category pages that are indexable (MIN_INDEXED posts or more); page 1 only.
    ...topics.filter(([, , list]) => list.length >= MIN_INDEXED).map(([, slug]) => `  <url><loc>${urlFor(`blogs/${slug}`)}</loc></url>`),
    ...posts.map((p) => `  <url><loc>${urlFor(p.url.slice(1))}</loc><lastmod>${p.updated ?? p.date}</lastmod></url>`),
  ].join('\n');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml' } },
  );
};
