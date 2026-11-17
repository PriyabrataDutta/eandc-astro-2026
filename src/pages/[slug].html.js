import { slugs, render, astroPages } from '../lib/legacy.js';

// A legacy page is replaced once an Astro page with the same slug exists (e.g. redesigned products).
export const getStaticPaths = () => {
  const rebuilt = new Set(astroPages());
  return slugs().filter((slug) => !rebuilt.has(slug)).map((slug) => ({ params: { slug } }));
};

export const GET = ({ params }) =>
  new Response(render(params.slug), { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
