// Every indexable page slug (blog posts excluded), shared by /sitemap.xml and the /sitemap page: the Markdown pages
// (src/content/pages, minus those marked noindex), the Astro pages and guides, and the indexable state and city hubs.
import fs from 'node:fs';
import path from 'node:path';
import { states, cities, indexable } from '../data/locations.js';

const content = import.meta.glob('../content/pages/*.md', { eager: true });
const contentPages = Object.entries(content)
  .filter(([, m]) => !m.frontmatter.noindex)
  .map(([f]) => f.split('/').pop().replace(/\.md$/, ''));

// Static Astro routes (src/pages/*.astro and src/pages/guides/*.astro); dynamic [param] routes are not listed.
const pagesIn = (dir, prefix = '') =>
  fs.existsSync(dir) ? fs.readdirSync(dir).filter((f) => /^[\w-]+\.astro$/.test(f)).map((f) => prefix + f.slice(0, -6)) : [];
export const astroPages = () => [...pagesIn(path.resolve('src/pages')), ...pagesIn(path.resolve('src/pages/guides'), 'guides/')];

export const sitePages = () => [
  ...new Set([...contentPages, ...astroPages().filter((s) => s !== '404')]),
  ...[...states, ...cities].filter(indexable).map((p) => p.slug),
];
