// Serves the original HTML pages unchanged in design, with the SEO cleanup applied at build time.
import fs from 'node:fs';
import { replaceFooter } from './footer.js';
import { officesHtml, OFFICES } from '../data/offices.js';
import path from 'node:path';
import vercel from '../../vercel.json';
import { meta as seo, alts as seoAlts, headingFixes, productPages } from '../data/seo.js';
import { products, families } from '../data/products.js';
import headingLevels from '../data/heading-levels.json' with { type: 'json' };

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
  sameAs: ['https://www.linkedin.com/company/electronics-controls-power-systems-pvt-ltd/', 'https://www.facebook.com/eandcpower', 'https://twitter.com/eandcpower'],
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

// Heading groups that skip a level and take their look from the tag (theme CSS), e.g. every FAQ question as h4 under
// the h1. Each heading moves to the right level with the style it had before pinned inline, so nothing changes on
// screen. Styles were measured in Chrome at 1280px (src/data/heading-levels.json), in source order per tag.
function relevelHeadings(html, levels) {
  if (!levels) return html;
  for (const [tag, { to, styles }] of Object.entries(levels)) {
    let i = 0;
    const re = new RegExp(`<!--[\\s\\S]*?-->|<${tag}(\\s[^>]*)?>([\\s\\S]*?)</${tag}>`, 'gi');
    html = html.replace(re, (m, attrs = '', inner) => {
      if (m.startsWith('<!--')) return m;
      const style = styles[i++];
      if (!style) return m;
      // An existing inline style is kept and wins over the measured one.
      const a = /\bstyle="/i.test(attrs) ? attrs.replace(/\bstyle="/i, `style="${style};`) : `${attrs} style="${style}"`;
      return `<h${to}${a}>${inner}</h${to}>`;
    });
  }
  return html;
}

// Headings that skip a level (h2 -> h4) are moved up to the next level when they set their own font-size inline,
// so the look does not depend on the tag. Others are left for headingFixes.
function fixHeadingOrder(html) {
  let prev = 0;
  return html.replace(/<h([1-6])(\s[^>]*)?>([\s\S]*?)<\/h\1>/gi, (m, n, attrs = '', inner) => {
    let lvl = +n;
    if (prev && lvl > prev + 1 && /font-size\s*:/i.test(attrs)) {
      lvl = prev + 1;
      m = `<h${lvl}${attrs}>${inner}</h${lvl}>`;
    }
    prev = lvl;
    return m;
  });
}

// Legacy landing pages that stand as a product category (families[].url) listed none of the category's products in
// their body, so they passed no relevance to them. Same self-contained style as officesHtml().
function rangeHtml(slug) {
  const fam = Object.entries(families).find(([, f]) => f.url === `/${slug}`);
  if (!fam) return '';
  const items = Object.entries(products).filter(([, p]) => p.family === fam[0]);
  const card = ([s, p]) => `<a href="/${s}">${p.image ? `<img src="${p.image}" alt="${escAttr(p.name)}" width="150" height="110" loading="lazy" />` : ''}<strong>${p.name}</strong>${p.capacity ? `<span>${p.capacity}</span>` : ''}</a>`;
  return `<style>
.rg{padding:30px 0;background:#f4f7fb}
.rg h2{color:#0b2546;font-size:22px;font-weight:600;margin:0 0 14px}
.rg-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:12px}
.rg-grid a{display:flex;flex-direction:column;align-items:center;gap:4px;background:#fff;border:1px solid #dde5ee;border-radius:8px;padding:12px;text-align:center;color:#0b2546}
.rg-grid a:hover{border-color:#005c9e}
.rg-grid img{max-width:100%;height:auto;object-fit:contain}
.rg-grid strong{font-size:14px;font-weight:600}
.rg-grid span{font-size:12.5px;color:#506070}
</style>
<section class="rg" aria-labelledby="h-rg"><div class="container">
<h2 id="h-rg">${fam[1].name} range</h2>
<div class="rg-grid">${items.map(card).join('')}</div>
</div></section>
`;
}

// Product menu category -> page.
const MENU_CATEGORIES = {
  'Industrial Online UPS': '/industrial-ups-manufacturer-in-india',
  'Line Interactive UPS': '/lineups',
  Inverters: '/power-inverter-manufacturer-in-india',
  'EV Chargers': '/ev-charger-manufacturer-in-india',
  Stabilizers: '/stabilizer',
  'Remote Monitoring': '/ups-remote-monitoring',
  Batteries: '/ups-batteries',
  Accessories: '/ups-accessories',
};

export function cleanup(html, slug) {
  const known = new Set([...slugs(), ...astroPages()]);

  html = replaceFooter(html);
  // Legacy pages declared lang="zxx" (no linguistic content) or "eng"; one callto: link had no country code.
  html = html.replace(/<html lang="[^"]*"/i, '<html lang="en"').replace(/callto:080-28397120/g, 'tel:+918028397120').replace(/>080-28397120</g, '>080 2839 7120<');
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
  const range = rangeHtml(slug);
  if (range) html = html.replace('<!-- Footer Widget -->', `${range}\t<!-- Footer Widget -->`);
  html = fixLinks(html, known);
  html = fixMeta(html, slug);
  html = fixImages(html);
  for (const [from, to] of headingFixes[slug] ?? []) html = html.replace(from, to);
  html = relevelHeadings(html, headingLevels[slug]);
  html = fixHeadingOrder(html);

  // A jQuery fallback ran before jQuery loaded and requested a broken relative URL (404 on every page).
  html = html.replace(/<script>\s*window\.jQuery \|\|\s*document\.write\("<script src='\.\.\/cdnjs\.cloudflare\.com[^"]*"\);\s*<\/script>\s*/g, '');

  // Product menu categories were dead "#" links (only Online UPS opened a page). Point each at its category page;
  // the theme's menu script still opens the submenu on the first tap on mobile and follows the link on the second.
  for (const [label, url] of Object.entries(MENU_CATEGORIES)) html = html.replaceAll(`<a href="#">${label}</a>`, `<a href="${url}">${label}</a>`);

  // The nav linked an unbuilt product to the noindex "comming-soon" placeholder on every page.
  html = html.replace(/[ \t]*<li>\s*<a href="\/?comming-soon(?:\.html)?"\s*>[^<]*<\/a>\s*<\/li>\s*/g, '');

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
  // Home > page breadcrumb for search results, where the page has none of its own. Emitted after the canonical
  // so shell().analytics, which is cut just before it, does not copy it onto Hub and Product pages.
  if (slug !== 'index' && !NOINDEX.has(slug) && !/BreadcrumbList/.test(html)) {
    const crumb = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: urlFor('index') },
        { '@type': 'ListItem', position: 2, name: textOf(html.match(/<title>([^<|]*)/i)?.[1] ?? slug).trim(), item: urlFor(slug) },
      ],
    };
    head += `<script type="application/ld+json">${JSON.stringify(crumb)}</script>\n`;
  }
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
