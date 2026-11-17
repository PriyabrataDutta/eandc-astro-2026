// Post-build check: every page has one canonical, no internal link points at a redirect,
// a stub or a missing file, and no dead backend references remain. Exit 1 on any problem.
import fs from 'node:fs';
import vercel from '../vercel.json' with { type: 'json' };

const dist = 'dist';
const pages = fs.readdirSync(dist, { recursive: true }).filter((f) => f.endsWith('.html') && !f.startsWith('google'));
const redirectSources = new Set(vercel.redirects.map((r) => r.source));
const problems = [];

for (const file of pages) {
  const html = fs.readFileSync(`${dist}/${file}`, 'utf8').replace(/<!--[\s\S]*?-->/g, '');
  const canon = html.match(/rel="canonical"/g)?.length ?? 0;
  if (canon !== 1) problems.push(`${file}: ${canon} canonicals`);
  for (const bad of ['contact-us.php', 'cdn-cgi/scripts', 'database.js', 'firebase']) {
    if (html.includes(bad)) problems.push(`${file}: still references ${bad}`);
  }
  for (const [, href] of html.matchAll(/(?:href|src)="([^"#?]+)/g)) {
    if (/^(https?:|mailto:|tel:|callto:|javascript:|data:|\/\/)/.test(href)) continue;
    const p = decodeURIComponent(href.startsWith('/') ? href : `/${href.replace(/^\.\//, '')}`);
    if (redirectSources.has(p)) { problems.push(`${file}: links to redirect ${p}`); continue; }
    if (p === '/' || p.startsWith('/api/')) continue;
    const exists = fs.existsSync(`${dist}${p}`) || fs.existsSync(`${dist}${p}.html`);
    if (!exists) problems.push(`${file}: broken ${href}`);
  }
}

console.log(`${pages.length} pages checked, ${problems.length} problems`);
for (const p of [...new Set(problems)]) console.log('  ' + p);
process.exit(problems.length ? 1 : 0);
