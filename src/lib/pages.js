// Every indexable page slug (blog posts excluded), shared by /sitemap.xml and the /sitemap page.
import { slugs, NOINDEX, astroPages } from './legacy.js';
import { states, cities, indexable } from '../data/locations.js';

export const sitePages = () => [
  ...new Set([...slugs().filter((s) => !NOINDEX.has(s)), ...astroPages().filter((s) => s !== '404')]),
  ...[...states, ...cities].filter(indexable).map((p) => p.slug),
];
