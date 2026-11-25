// Blog posts: one Markdown file per post in src/content/blog/. Covers are made by scripts/blog-covers.mjs.
// Post URL: /blogs/{category}/{slug}. Category slugs are fixed here and are part of every post URL, so never rename
// one; a post's `tag` must be one of these names or the build fails.
export const CATEGORIES = {
  'Online UPS': { slug: 'online-ups', intro: 'Choosing, sizing and running online UPS systems for offices, hospitals, banks, factories and public buildings, sector by sector.' },
  'Industrial UPS': { slug: 'industrial-ups', intro: 'Power protection for plants and harsh sites: process industry, utilities, transport, defence and rugged environments.' },
  Batteries: { slug: 'batteries', intro: 'UPS and industrial batteries compared: SMF and VRLA, tubular, GEL and AGM, lithium ion and nickel cadmium, and how to make them last.' },
  Service: { slug: 'service', intro: 'Installing, commissioning, maintaining and replacing UPS systems: checklists, AMC, load tests and upgrade decisions.' },
  Solar: { slug: 'solar', intro: 'Solar inverters, MPPT charge controllers, solar DC UPS and street lighting: how they work and which suits your site.' },
  'Power quality': { slug: 'power-quality', intro: 'Isolation, harmonics, surges, transfer switches and efficiency: keeping power clean and loads protected.' },
  'Data centre': { slug: 'data-centre', intro: 'Sizing, redundancy and layout of UPS for data centres, server rooms and IT facilities.' },
  'EV charging': { slug: 'ev-charging', intro: 'Choosing and installing EV chargers for businesses, fleets and commercial parking.' },
  Monitoring: { slug: 'monitoring', intro: 'Remote and SNMP monitoring of UPS, batteries and generators.' },
};
// Category pages with fewer posts than this stay noindex (thin) until they grow.
export const MIN_INDEXED = 3;

const files = import.meta.glob('../content/blog/*.md', { eager: true });

export const posts = Object.entries(files)
  .map(([file, m]) => {
    const slug = file.split('/').pop().slice(0, -3);
    const cat = CATEGORIES[m.frontmatter.tag];
    if (!cat) throw new Error(`${slug}.md: tag "${m.frontmatter.tag}" is not a category in src/lib/blog.js`);
    return {
      slug,
      ...m.frontmatter,
      category: cat.slug,
      url: `/blogs/${cat.slug}/${slug}`,
      cover: `/image/blog/${slug}.jpg`,
      minutes: Math.max(1, Math.round(m.rawContent().split(/\s+/).length / 200)),
      Content: m.Content,
    };
  })
  .sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title));

// URL of a post by its slug (for hand-written links in pages).
export const postUrl = (slug) => posts.find((p) => p.slug === slug)?.url ?? `/blogs/${slug}`;

export const longDate = (d) => new Date(`${d}T00:00:00Z`).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

// Listing pages show PER_PAGE posts each: /blogs, /blogs/page/N, /blogs/{category}, /blogs/{category}/page/N.
export const PER_PAGE = 10;
// Categories, biggest first: [name, slug, posts].
export const topics = [...Map.groupBy(posts, (p) => p.tag)].map(([tag, list]) => [tag, CATEGORIES[tag].slug, list]).sort((a, b) => b[2].length - a[2].length);
export const paged = (list) => Array.from({ length: Math.ceil(list.length / PER_PAGE) }, (_, i) => list.slice(i * PER_PAGE, (i + 1) * PER_PAGE));
