// One footer for every page: the redesigned one (src/components/site/Footer.astro, via chrome.js). Replaces ~60
// hand-copied legacy variants (several with dead links: line_ups-2, stabilizer-2, frequently-asked-questions-2).
// The marker comment stays: rangeHtml() inserts before it and shell() cuts the footer from it.
import { HEADER, FOOTER as SITE_FOOTER } from './chrome.js';

export const FOOTER = `<!-- Footer Widget -->\n${SITE_FOOTER}\n`;

// End index of the <div> opening at `start`, counting nested divs.
function divEnd(html, start) {
  const re = /<\/?div\b[^>]*>/gi;
  re.lastIndex = start;
  let depth = 0, m;
  while ((m = re.exec(html))) {
    depth += m[0][1] === '/' ? -1 : 1;
    if (depth === 0) return re.lastIndex;
  }
  return -1;
}

const cut = (html, open) => {
  const i = html.indexOf(open);
  const j = i < 0 ? -1 : divEnd(html, i);
  return j < 0 ? null : [i, j];
};

// Swap the legacy footer widget for FOOTER and drop the legacy copyright bar (now inside FOOTER).
export function replaceFooter(html) {
  const f = cut(html, '<div class="footer-widget');
  if (!f) return html;
  // Take the comment just before the widget ("<!-- Footer Widget-->", "<!-- FOOTER (...) -->") with it.
  const before = html.slice(0, f[0]).replace(/<!--[^>]*footer[^>]*-->\s*$/i, '');
  html = before + FOOTER + html.slice(f[1]).replace(/^\s*<!--\s*End Footer Widget\s*-->/i, '');
  const c = cut(html, '<div class="copyright"');
  if (c) html = html.slice(0, c[0]).replace(/<!--\s*copyright\s*-->\s*$/i, '') + html.slice(c[1]).replace(/^\s*<!--\s*End Copyright\s*-->/i, '');
  return html;
}

// Swap the legacy top bar and navbar for HEADER. The banner after them is page content and stays; it loses the
// <header> wrapper, whose transparent, sticky theme styles only existed to float the old navbar over it.
export function replaceHeader(html) {
  const i = html.indexOf('<header class="site-header');
  if (i < 0) return html;
  // contact and sitemap never close the <header>; the browser closes it at "End Header".
  let j = html.indexOf('</header>', i);
  let close = '</header>'.length;
  const k = html.indexOf('<!-- End Header -->', i);
  if (k >= 0 && (j < 0 || k < j)) [j, close] = [k, 0];
  if (j < 0) return html;
  let inner = html.slice(html.indexOf('>', i) + 1, j);
  for (const open of ['<div class="topbar', '<div class="navbar navbar-primary']) {
    const c = cut(inner, open);
    if (c) inner = inner.slice(0, c[0]) + inner.slice(c[1]);
  }
  return html.slice(0, i) + HEADER + inner + html.slice(j + close);
}
