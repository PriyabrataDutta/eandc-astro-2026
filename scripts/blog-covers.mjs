// Makes a 1200x630 cover (also the og:image) for each blog post: title on navy, product photo on the right.
// Reads title, tag and photo from each post's frontmatter. Run: npm run covers (only writes missing covers; --force redoes all).
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const SRC = 'src/content/blog';
const OUT = 'public/image/blog';
const force = process.argv.includes('--force');
fs.mkdirSync(OUT, { recursive: true });

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const field = (md, k) => md.match(new RegExp(`^${k}: '(.*)'$`, 'm'))?.[1].replace(/''/g, "'");

// Greedy word wrap; ~21 characters a line fits 52px bold text in 600px.
function wrap(text, max = 21) {
  const lines = [''];
  for (const w of text.split(' ')) {
    const cur = lines.at(-1);
    if (cur && (cur + ' ' + w).length > max) lines.push(w);
    else lines[lines.length - 1] = cur ? `${cur} ${w}` : w;
  }
  return lines;
}

// Buying guides (src/pages/guides) get covers too, named guides-{slug}.jpg; title is the page's h1.
const GUIDE_PHOTOS = {
  'online-vs-offline-ups': '/image/product/accenta.jpg',
  'ups-battery-backup-time': '/image/product/smf.jpg',
  'ups-sizing-kva': '/image/product/Renata%20300%20Series.jpg',
  'ups-vs-inverter': '/image/product/domestic-inverte.jpg',
};
const items = [
  ...fs.readdirSync(SRC).filter((f) => f.endsWith('.md')).map((f) => {
    const md = fs.readFileSync(path.join(SRC, f), 'utf8');
    return { slug: f.slice(0, -3), title: field(md, 'title'), tag: field(md, 'tag'), photo: field(md, 'photo') };
  }),
  ...Object.entries(GUIDE_PHOTOS).map(([g, photo]) => ({
    slug: `guides-${g}`,
    title: fs.readFileSync(`src/pages/guides/${g}.astro`, 'utf8').match(/h1="([^"]+)"/)[1],
    tag: 'Buying guide',
    photo,
  })),
];

for (const { slug, title, tag, photo } of items) {
  const out = path.join(OUT, `${slug}.jpg`);
  if (fs.existsSync(out) && !force) continue;
  const lines = wrap(title);
  const size = lines.length > 4 ? 44 : 52;
  const top = 315 - (lines.length * size * 1.18) / 2 + size * 0.5;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
    <rect width="1200" height="630" fill="#0b2546"/>
    <rect x="0" y="0" width="1200" height="8" fill="#ff9900"/>
    <rect x="690" y="60" width="450" height="510" rx="18" fill="#ffffff"/>
    <rect x="60" y="64" width="${tag.length * 13.5 + 36}" height="38" rx="5" fill="#ff9900"/>
    <text x="78" y="90" font-family="Helvetica Neue, Arial, sans-serif" font-size="17" font-weight="700" letter-spacing="1.5" fill="#0b2546">${esc(tag.toUpperCase())}</text>
    ${lines.map((l, i) => `<text x="60" y="${top + i * size * 1.18}" font-family="Helvetica Neue, Arial, sans-serif" font-size="${size}" font-weight="700" fill="#ffffff">${esc(l)}</text>`).join('')}
    <text x="60" y="560" font-family="Helvetica Neue, Arial, sans-serif" font-size="22" fill="#9fb4ca">E&amp;C Power Systems · eandcpower.com</text>
  </svg>`;
  const img = await sharp(path.join('public', decodeURI(photo)))
    .resize(400, 440, { fit: 'contain', background: '#ffffff' })
    .flatten({ background: '#ffffff' })
    .toBuffer();
  await sharp(Buffer.from(svg)).composite([{ input: img, left: 715, top: 95 }]).jpeg({ quality: 85, mozjpeg: true }).toFile(out);
  console.log('cover', out);
}
