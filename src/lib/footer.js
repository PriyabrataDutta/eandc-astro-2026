// One compact footer for every page. Replaces ~60 hand-copied legacy variants (several with dead links:
// line_ups-2, stabilizer-2, frequently-asked-questions-2). Black background and blue titles keep the theme's look.
const col = (title, links) =>
  `<div class="ef-col"><h2 class="ef-title">${title}</h2><ul>${links.map(([t, u]) => `<li><a href="${u}">${t}</a></li>`).join('')}</ul></div>`;

const year = new Date().getFullYear();

export const FOOTER = `<!-- Footer Widget -->
<style>
.ef{background:#000;color:#cfd6df;font-size:14px;line-height:1.6;padding:36px 0 0}
.ef a{color:#cfd6df;text-decoration:none}.ef a:hover,.ef a:focus{color:#ff9900}
.ef-grid{display:grid;grid-template-columns:1.4fr 1fr 1fr 1fr;gap:28px}
.ef-title{color:#1e7dd8;font-size:14px;line-height:1.4;font-family:inherit;font-weight:700;text-transform:uppercase;letter-spacing:.04em;margin:0 0 10px}
.ef ul{list-style:none;margin:0;padding:0}.ef li{padding:3px 0}
.ef-org{color:#fff;font-weight:600;margin:0 0 6px}.ef p{margin:0 0 8px}
.ef-social{display:flex;gap:14px;margin-top:10px;font-size:18px}
.ef-bar{border-top:1px solid #222;margin-top:28px;padding:14px 0;font-size:13px;color:#8a95a3;display:flex;flex-wrap:wrap;justify-content:space-between;gap:8px}
.ef-bar a{color:#8a95a3}
@media (max-width:991px){.ef-grid{grid-template-columns:1fr 1fr}}
@media (max-width:480px){.ef{padding-top:28px}.ef-grid{gap:20px 16px}.ef-brand,.ef-col:last-child{grid-column:1/-1}.ef-col:last-child ul{columns:2;column-gap:16px}.ef li{padding:5px 0}.ef-bar{display:block}.ef-bar span{display:block;margin-bottom:4px}}
</style>
<footer class="ef">
<div class="container">
<div class="ef-grid">
<div class="ef-col ef-brand">
<h2 class="ef-title">Contact us</h2>
<p class="ef-org">Electronics &amp; Controls Power Systems Private Limited</p>
<p>29/A, 2nd Phase, Peenya Industrial Area,<br>Bengaluru, Karnataka 560058</p>
<p>Sales: <a href="tel:+918028397120">+91 80 2839 7120</a><br>Office: <a href="tel:+918028371974">+91 80 2837 1974</a><br><a href="mailto:sales@eandcpower.com">sales@eandcpower.com</a></p>
<p>Mon to Sat, 9:00 am to 5:30 pm</p>
<div class="ef-social">
<a href="https://www.linkedin.com/company/electronics-controls-power-systems-pvt-ltd/" target="_blank" rel="noopener" aria-label="LinkedIn"><em class="fa fa-linkedin" aria-hidden="true"></em></a>
<a href="https://www.facebook.com/eandcpower" target="_blank" rel="noopener" aria-label="Facebook"><em class="fa fa-facebook" aria-hidden="true"></em></a>
<a href="https://twitter.com/eandcpower" target="_blank" rel="noopener" aria-label="X (Twitter)"><em class="fa fa-twitter" aria-hidden="true"></em></a>
</div>
</div>
${col('Products', [
  ['Online UPS', '/online-ups'],
  ['Industrial UPS', '/industrial-ups-manufacturer-in-india'],
  ['Line interactive UPS', '/lineups'],
  ['Voltage stabilizers', '/stabilizer'],
  ['Inverters', '/power-inverter-manufacturer-in-india'],
  ['UPS batteries', '/smf'],
  ['Battery energy storage', '/battery-energy-storage-system'],
  ['Marine UPS', '/marine-ups'],
  ['Solar solutions', '/solar-solutions'],
  ['EV chargers', '/ev-chargers'],
  ['Remote monitoring', '/ups-remote-monitoring'],
])}
${col('UPS across India', [
  ['UPS manufacturer in India', '/ups-manufacturer-in-india'],
  ['UPS in Bengaluru', '/ups-manufacturer-in-bangalore'],
  ['UPS in Mumbai', '/ups-manufacturer-in-mumbai'],
  ['UPS in Delhi', '/ups-manufacturer-in-delhi'],
  ['UPS in Chennai', '/ups-manufacturer-in-chennai'],
  ['UPS in Kolkata', '/ups-manufacturer-in-kolkata'],
  ['UPS in Pune', '/ups-manufacturer-in-pune'],
  ['Sales offices', '/contact#sales-offices'],
])}
${col('Company', [
  ['About us', '/about-us'],
  ['Service &amp; AMC', '/eandcpower-services'],
  ['Get a quote', '/get-a-quote'],
  ['Contact', '/contact'],
  ['Blog &amp; guides', '/blogs'],
  ['Catalogs', '/catalog'],
  ['FAQs', '/frequently-asked-questions'],
  ['Careers', '/careers'],
])}
</div>
<div class="ef-bar">
<span>&copy; ${year} Electronics &amp; Controls Power Systems Pvt. Ltd. &middot; CIN U31200KA1997PTC022448</span>
<span><a href="/annualreturn">Annual return</a> &middot; <a href="/sitemap">Sitemap</a> &middot; Powered by <a href="https://www.appaddindia.net/" target="_blank" rel="noopener">Appadd India</a></span>
</div>
</div>
</footer>
`;

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
