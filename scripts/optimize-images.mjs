// Post-build: for every <img> in dist HTML that points at a local JPG/PNG/WebP,
//   1. serve a right-sized WebP copy (originals stay untouched for Open Graph and direct links):
//      - a tag with an authored width W gets a copy 2×W wide (sharp on retina screens);
//      - never wider than the folder cap: home cards 720px, product photos 960px, anything else 1600px;
//   2. otherwise point at a plain WebP copy when it is at least 10% smaller;
//   3. add the image's real width/height so the browser reserves space (no layout shift).
// The theme sets img { max-width:100%; height:auto }, so natural-size attributes don't change the layout.
// Pass --no-webp to only add dimensions.
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const DIST = path.resolve('dist');
const webp = !process.argv.includes('--no-webp');
const cache = new Map(); // `${file}|${maxWidth}` -> { suffix, width, height, saved } | null

const htmlFiles = fs.readdirSync(DIST, { recursive: true }).filter((f) => f.endsWith('.html')).map((f) => path.join(DIST, f));

// Widest the image needs to be for this tag: 2× its authored width, never above the folder cap. Legacy tags often
// carry the file's own size as width, so the cap is what limits those.
const capFor = (src) => {
  const s = decodeURIComponent(src);
  if (/(^|\/)image\/home\//i.test(s)) return 720; // home page cards, shown about 360px wide
  if (/(^|\/)image\/product\//i.test(s)) return 960;
  return 1600;
};
const maxWidthFor = (tag, src) => {
  const w = Number(tag.match(/\swidth="(\d+)"/i)?.[1]);
  return Math.min(w ? w * 2 : Infinity, capFor(src));
};

async function info(file, maxWidth) {
  const key = `${file}|${maxWidth}`;
  if (cache.has(key)) return cache.get(key);
  let result = null;
  if (fs.existsSync(file) && /\.(jpe?g|png|webp)$/i.test(file)) {
    const meta = await sharp(file).metadata();
    result = { width: meta.width, height: meta.height, suffix: null, saved: 0 };
    const before = fs.statSync(file).size;
    // Full-size WebP is kept for every JPG/PNG: CSS backgrounds and preloads (e.g. the home hero) point at it.
    const full = file.replace(/\.(jpe?g|png)$/i, '.webp');
    if (webp && full !== file && !fs.existsSync(full)) await sharp(file).webp({ quality: 82, effort: 5 }).toFile(full);
    if (webp && meta.width > maxWidth * 1.05) {
      const width = maxWidth, height = Math.round((meta.height * width) / meta.width);
      const suffix = `-${width}w.webp`;
      const out = file.replace(/\.(jpe?g|png|webp)$/i, suffix);
      if (!fs.existsSync(out)) await sharp(file).resize({ width }).webp({ quality: 80, effort: 5 }).toFile(out);
      Object.assign(result, { width, height, suffix, saved: before - fs.statSync(out).size });
    } else if (webp && !/\.webp$/i.test(file)) {
      const after = fs.statSync(full).size;
      if (after < before * 0.9) Object.assign(result, { suffix: '.webp', saved: before - after });
    }
  }
  cache.set(key, result);
  return result;
}

let tags = 0, converted = 0, resized = 0;
for (const page of htmlFiles) {
  let html = fs.readFileSync(page, 'utf8');
  const jobs = [];
  html.replace(/<img\b[^>]*>/gi, (tag) => (jobs.push(tag), tag));
  const done = new Map();
  for (const tag of jobs) {
    if (done.has(tag)) continue;
    const src = tag.match(/\ssrc="([^"]+)"/i)?.[1];
    if (!src || /^(https?:|data:|\/\/)/.test(src)) continue;
    const file = src.startsWith('/') ? path.join(DIST, decodeURIComponent(src)) : path.join(path.dirname(page), decodeURIComponent(src));
    const i = await info(file, maxWidthFor(tag, src));
    if (!i) continue;
    let out = tag;
    if (i.suffix) {
      out = out.replace(`src="${src}"`, `src="${src.replace(/\.(jpe?g|png|webp)$/i, i.suffix)}"`);
      i.suffix === '.webp' ? converted++ : resized++;
    }
    if (!/\swidth=/i.test(out) && !/\sheight=/i.test(out)) out = out.replace(/<img\b/i, `<img width="${i.width}" height="${i.height}"`);
    done.set(tag, out);
    tags++;
  }
  for (const [from, to] of done) html = html.split(from).join(to);
  fs.writeFileSync(page, html);
}
const saved = [...cache.values()].reduce((s, i) => s + Math.max(0, i?.saved ?? 0), 0);
console.log(`images: ${tags} tags updated, ${resized} resized, ${converted} now WebP, ~${Math.round(saved / 1024)} KB saved across ${[...cache.values()].filter((i) => i?.suffix).length} files`);
