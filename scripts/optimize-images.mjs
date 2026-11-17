// Post-build: for every <img> in dist HTML that points at a local JPG/PNG,
//   1. write a WebP copy next to it (kept only if smaller) and point the tag at it;
//   2. add the image's real width/height so the browser reserves space (no layout shift).
// The theme sets img { max-width:100%; height:auto }, so natural-size attributes don't change the layout.
// Pass --no-webp to only add dimensions.
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const DIST = path.resolve('dist');
const webp = !process.argv.includes('--no-webp');
const cache = new Map(); // absolute source path -> { src suffix, width, height } | null

const htmlFiles = fs.readdirSync(DIST, { recursive: true }).filter((f) => f.endsWith('.html')).map((f) => path.join(DIST, f));

async function info(file) {
  if (cache.has(file)) return cache.get(file);
  let result = null;
  if (fs.existsSync(file) && /\.(jpe?g|png)$/i.test(file)) {
    const meta = await sharp(file).metadata();
    result = { width: meta.width, height: meta.height, webp: null };
    if (webp) {
      const out = file.replace(/\.(jpe?g|png)$/i, '.webp');
      if (!fs.existsSync(out)) await sharp(file).webp({ quality: 82, effort: 5 }).toFile(out);
      const before = fs.statSync(file).size, after = fs.statSync(out).size;
      if (after < before * 0.9) Object.assign(result, { webp: out, saved: before - after });
      else fs.rmSync(out);
    }
  }
  cache.set(file, result);
  return result;
}

let tags = 0, converted = 0, saved = 0;
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
    const i = await info(file);
    if (!i) continue;
    let out = tag;
    if (i.webp) {
      const newSrc = src.replace(/\.(jpe?g|png)$/i, '.webp');
      out = out.replace(`src="${src}"`, `src="${newSrc}"`);
      converted++;
    }
    if (!/\swidth=/i.test(out) && !/\sheight=/i.test(out)) out = out.replace(/<img\b/i, `<img width="${i.width}" height="${i.height}"`);
    done.set(tag, out);
    tags++;
  }
  for (const [from, to] of done) html = html.split(from).join(to);
  fs.writeFileSync(page, html);
}
for (const i of cache.values()) saved += i?.saved ?? 0;
console.log(`images: ${tags} tags updated, ${converted} now WebP, ~${Math.round(saved / 1024)} KB saved across ${[...cache.values()].filter((i) => i?.webp).length} files`);
