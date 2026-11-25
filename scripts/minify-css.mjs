// Post-build: minify the theme stylesheets copied from public/css (Astro minifies only its own CSS).
// lightningcss comes with Vite; if it can't load, the files ship unminified rather than failing the build.
import fs from 'node:fs';
import path from 'node:path';

const dir = path.resolve('dist/css');
let transform;
try {
  ({ transform } = await import('lightningcss'));
} catch {
  console.log('css: lightningcss not available, skipped');
  process.exit(0);
}
let before = 0, after = 0;
for (const f of fs.readdirSync(dir).filter((f) => f.endsWith('.css'))) {
  const file = path.join(dir, f);
  const src = fs.readFileSync(file);
  // errorRecovery: the old theme CSS has rules lightningcss would otherwise reject; keep them as they are.
  const { code } = transform({ filename: f, code: src, minify: true, errorRecovery: true });
  fs.writeFileSync(file, code);
  before += src.length;
  after += code.length;
}
console.log(`css: ${Math.round(before / 1024)} KB -> ${Math.round(after / 1024)} KB`);
