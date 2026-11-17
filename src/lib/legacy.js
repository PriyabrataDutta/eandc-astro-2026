// Serves the original HTML pages unchanged in design, with the SEO cleanup applied at build time.
import fs from 'node:fs';
import { replaceFooter } from './footer.js';
import { officesHtml, OFFICES } from '../data/offices.js';
import path from 'node:path';
import vercel from '../../vercel.json';
import { meta as seo, alts as seoAlts, headingFixes, productPages } from '../data/seo.js';

export const SITE = 'https://www.eandcpower.com';
const DIR = path.resolve('src/legacy');

// Utility pages that stay live but out of Google's index.
export const NOINDEX = new Set(['comming-soon', 'update', 'checkup']);

export const slugs = () =>
  fs.readdirSync(DIR).filter((f) => f.endsWith('.html')).map((f) => f.slice(0, -5)).sort();

const redirects = new Map(vercel.redirects.map((r) => [r.source, r.destination]));

export const urlFor = (slug) => (slug === 'index' ? `${SITE}/` : `${SITE}/${slug}`);

// href="renata.html" / "./renata-2.html" / "/index.html#x" -> clean final URL, so no link hits a redirect.
function fixLinks(html, known) {
  return html.replace(/href="(?:\.?\/)?([\w-]+)\.html(#[^"]*)?"/g, (m, name, hash = '') => {
    let to = name === 'index' ? '/' : `/${name}`;
    to = redirects.get(to) ?? to;
    const target = to === '/' ? 'index' : to.slice(1);
    return known.has(target) ? `href="${to}${hash}"` : m;
  });
}

// Pages built from Astro components (src/pages/*.astro), so legacy links can point at them.
const pagesIn = (dir, prefix = '') =>
  fs.existsSync(dir) ? fs.readdirSync(dir).filter((f) => /^[\w-]+\.astro$/.test(f)).map((f) => prefix + f.slice(0, -6)) : [];
export const astroPages = () => [...pagesIn(path.resolve('src/pages')), ...pagesIn(path.resolve('src/pages/guides'), 'guides/')];

export const render = (slug) => cleanup(fs.readFileSync(path.join(DIR, `${slug}.html`), 'utf8'), slug);

const escAttr = (t) => t.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

// One company entity everywhere: the full node below, and ORG_REF wherever another schema names the company.
// Facts from the /contact page: phones, hours, map pin and Google Maps listing.
export const ORG_NAME = 'Electronics & Controls Power Systems Private Limited';
export const ORG_REF = { '@type': 'Organization', '@id': `${SITE}/#organization`, name: ORG_NAME, url: `${SITE}/` };
export const ORG = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness'],
  '@id': `${SITE}/#organization`,
  name: ORG_NAME,
  alternateName: 'E&C Power Systems',
  url: `${SITE}/`,
  logo: { '@type': 'ImageObject', url: `${SITE}/image/logo2.png` },
  image: `${SITE}/image/logo2.png`,
  foundingDate: '1978',
  telephone: '+91-80-2837-1974',
  email: 'sales@eandcpower.com',
  contactPoint: [
    { '@type': 'ContactPoint', telephone: '+91-80-2839-7120', contactType: 'sales', areaServed: 'IN' },
    { '@type': 'ContactPoint', telephone: '+91-80-2837-1974', contactType: 'customer service', areaServed: 'IN' },
    { '@type': 'ContactPoint', telephone: '+91-80-2837-9401', contactType: 'customer service', areaServed: 'IN' },
  ],
  geo: { '@type': 'GeoCoordinates', latitude: 13.02991, longitude: 77.51221 },
  hasMap: 'https://maps.google.com/maps?cid=24476297107613509',
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '09:00', closes: '17:30' },
  ],
  areaServed: { '@type': 'Country', name: 'India' },
  sameAs: ['https://www.linkedin.com/company/electronics-controls-power-systems-pvt-ltd/'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '29/A, 2nd Phase, Peenya Industrial Area',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    postalCode: '560058',
    addressCountry: 'IN',
  },
  // Regional sales offices (src/data/offices.js). Addresses are from the client's sales page, pending confirmation.
  department: OFFICES.filter((o) => !o.hq).map((o) => ({
    '@type': 'LocalBusiness',
    name: `E&C Power Systems, ${o.city} sales office`,
    email: 'sales@eandcpower.com',
    areaServed: o.covers,
    address: { '@type': 'PostalAddress', streetAddress: o.address.replace(/,[^,]*$/, ''), addressLocality: o.city, postalCode: o.address.match(/\d{6}$/)[0], addressCountry: 'IN' },
  })),
};

// Unique title and description where the page's own were duplicated, missing or too long.
function fixMeta(html, slug) {
  const m = seo[slug];
  if (!m) return html;
  if (m.title) html = html.replace(/<title>[\s\S]*?<\/title>\s*/i, '');
  html = html.replace(/[ \t]*<meta\s+name=["']description["'][^>]*>\s*/gi, '');
  const tags = (m.title ? `<title>${escAttr(m.title)}</title>\n` : '') + (m.description ? `<meta name="description" content="${escAttr(m.description)}" />\n` : '');
  return html.replace(/<head>\s*/i, (h) => `${h}${tags}`);
}

// Open Graph / Twitter tags so shared links show a title, description and image.
export function ogTags({ title, description, url, image, type = 'website', published }) {
  const t = (k, v, attr = 'property') => (v ? `<meta ${attr}="${k}" content="${escAttr(v)}" />\n` : '');
  return (
    t('og:type', type) + t('article:published_time', published) + t('og:site_name', 'E&C Power Systems') + t('og:title', title) + t('og:description', description) +
    t('og:url', url) + t('og:image', image) + t('twitter:card', 'summary_large_image', 'name')
  );
}

const textOf = (h) => h.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#0?39;/g, "'").replace(/\s+/g, ' ').trim();

// First content image (after the header), else the logo, as an absolute URL.
function pageImage(html) {
  const after = html.slice(Math.max(0, html.indexOf('</header>')));
  const src = after.match(/<img\b[^>]*\ssrc="([^"]+\.(?:jpe?g|png))"/i)?.[1];
  if (!src || /^https?:/.test(src)) return `${SITE}/image/logo2.png`;
  return `${SITE}/${src.replace(/^\.?\//, '')}`;
}

// Alt text where missing; native lazy loading for images below the header (no visual change).
function fixImages(html) {
  const headerEnd = html.indexOf('</header>');
  return html.replace(/<img\b[^>]*>/gi, (tag, offset) => {
    if (!/\balt="[^"]+"/i.test(tag)) {
      const file = decodeURIComponent((tag.match(/src="([^"]+)"/i)?.[1] ?? '').split('/').pop());
      const alt = seoAlts[file] ?? file.replace(/\.[a-z]+$/i, '').replace(/[-_%]+|\s+/g, ' ').replace(/\b\d+\b/g, '').trim();
      tag = /\balt=""/i.test(tag) ? tag.replace(/\balt=""/i, `alt="${escAttr(alt)}"`) : tag.replace(/<img\b/i, `<img alt="${escAttr(alt)}"`);
    }
    if (offset > headerEnd && !/\bloading=/i.test(tag)) tag = tag.replace(/<img\b/i, '<img loading="lazy" decoding="async"');
    return tag;
  });
}

export function cleanup(html, slug) {
  const known = new Set([...slugs(), ...astroPages()]);

  html = replaceFooter(html);
  if (slug === 'contact') {
    html = html.replace('<!-- Map -->', `${officesHtml()}\n\t<!-- Map -->`);
    // Accessible names that change nothing on screen.
    html = html.replace('<iframe src="https://www.google.com/maps/embed', '<iframe title="Map: E&amp;C Power Systems, Peenya, Bengaluru" src="https://www.google.com/maps/embed');
    html = html.replace('<input name="contact-file" type="file"', '<input name="contact-file" type="file" aria-label="Attach a file"');
  }
  // Home hero: the first slide is the LCP image, set as a CSS background so the browser finds it late.
  if (slug === 'index') {
    html = html.replace(/(background-image:url\('image\/slider-lg-civil-[ab])\.jpg'/g, "$1.webp'");
    html = html.replace(/<\/head>/i, '<link rel="preload" as="image" href="/image/slider-lg-civil-a.webp" fetchpriority="high">\n</head>');
  }
  html = fixLinks(html, known);
  html = fixMeta(html, slug);
  html = fixImages(html);
  for (const [from, to] of headingFixes[slug] ?? []) html = html.replace(from, to);

  // A jQuery fallback ran before jQuery loaded and requested a broken relative URL (404 on every page).
  html = html.replace(/<script>\s*window\.jQuery \|\|\s*document\.write\("<script src='\.\.\/cdnjs\.cloudflare\.com[^"]*"\);\s*<\/script>\s*/g, '');

  // Hand-written schema on legacy pages names the company in several ways; point every mention at the one entity.
  html = html.replace(/(<script[^>]*application\/ld\+json[^>]*>)([\s\S]*?)(<\/script>)/gi, (m, open, body, close) => {
    let data;
    try { data = JSON.parse(body); } catch { return m; }
    const walk = (o) => {
      if (Array.isArray(o)) return o.forEach(walk);
      if (!o || typeof o !== 'object') return;
      if (o['@type'] === 'Organization' && /^Electronics & Controls Power Systems/.test(o.name ?? '')) {
        o.name = ORG_NAME;
        o['@id'] ??= ORG_REF['@id'];
      }
      Object.values(o).forEach(walk);
    };
    walk(data);
    return open + JSON.stringify(data) + close;
  });

  if (productPages[slug]) {
    const name = productPages[slug].name;
    const product = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name,
      description: html.match(/<meta\s+name="description"\s+content="([^"]*)"/i)?.[1]?.replace(/&amp;/g, '&') ?? name,
      image: pageImage(html),
      category: productPages[slug].category,
      brand: { '@type': 'Brand', name: 'E&C Power Systems' },
      manufacturer: ORG_REF,
    };
    html = html.replace(/<\/head>/i, `<script type="application/ld+json">${JSON.stringify(product)}</script>\n</head>`);
  }
  // Full company node where a page has no schema, and on the contact page (its own block lacks address details).
  if (slug === 'contact' || !/application\/ld\+json/i.test(html.replace(/<!--[\s\S]*?-->/g, ''))) {
    html = html.replace(/<\/head>/i, `<script type="application/ld+json">${JSON.stringify(ORG)}</script>\n</head>`);
  }

  // One self-referencing canonical on the clean URL (old ones pointed at .html URLs).
  html = html.replace(/[ \t]*<link[^>]*rel=["']canonical["'][^>]*>\s*/gi, '');
  let head = `<link rel="canonical" href="${urlFor(slug)}" />\n`;
  if (NOINDEX.has(slug)) head += '<meta name="robots" content="noindex, follow" />\n';
  head += ogTags({
    title: textOf(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? ''),
    description: html.match(/<meta\s+name="description"\s+content="([^"]*)"/i)?.[1]?.replace(/&amp;/g, '&'),
    url: urlFor(slug),
    image: pageImage(html),
  });
  html = html.replace(/<\/head>/i, `${head}</head>`);

  // Third-party loader (plugins.appadd.in.net) that fetched remote HTML with an embedded key and appended it to
  // <head>/<body> unsanitised. Its request was already broken ("GET.html"), so removing it changes nothing visible.
  html = html.replace(/<script>\s*var eppathurl[\s\S]*?eptagmanage\.send\(\);\s*<\/script>\s*/g, '');

  // Phone links in one international format (some were tel:0802..., which fails from outside India).
  html = html.replace(/href="tel:\s*\+?(?:91)?[\s-]*0?(80[\d\s-]{8,12})"/g, (m, n) => `href="tel:+91${n.replace(/\D/g, '')}"`);

  // Cloudflare email-decode script 404s on Vercel; the addresses are already plain text.
  html = html.replace(/<script[^>]*cdn-cgi\/scripts[^>]*><\/script>\s*/gi, '');

  // Quick Enquiry forms posted to contact-us.php, which Vercel cannot run.
  if (html.includes('action="contact-us.php"')) {
    html = html.replaceAll('action="contact-us.php"', 'action="/api/contact" data-enquiry');
    html = html.replace(/<\/body>/i, '<script src="/js/enquiry.js" defer></script>\n</body>');
  }

  // Catalog/blog form wrote leads to an open Firebase database; send them to /api/contact instead.
  if (html.includes('database.js')) {
    html = html
      .replace(/<script[^>]*firebase[^>]*><\/script>\s*/gi, '')
      .replace(/<script src="database\.js"><\/script>/, '<script src="/js/catalog-form.js"></script>');
  }

  return html;
}

// Header, sidebar and footer of a live SEO page, reused so new pages match the current design exactly.
export function shell() {
  // Root-relative asset paths so the shell also works on nested URLs such as /guides/...
  const html = render('ups-manufacturer-in-bangalore').replace(/(src|href)="(css|js|image|fonts|pdf)\//g, '$1="/$2/');
  const cut = (from, to) => html.slice(html.indexOf(from), html.indexOf(to));
  return {
    analytics: cut('<!-- Global site tag', '<link rel="canonical"').replace(/<\/head>\s*$/, ''),
    header: cut('<!-- Header -->', '<!-- Breadcrumb -->'),
    sidebar: html.match(/(<!-- Sidebar Column -->[\s\S]*?)\s*<\/div>\s*<\/div>\s*<\/div>\s*<!-- End Content Section -->/)[1],
    footer: cut('<!-- Footer Widget -->', '</body>'),
  };
}
