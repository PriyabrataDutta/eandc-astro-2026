// One compact footer for every page. Replaces ~60 hand-copied legacy variants (several with dead links:
// line_ups-2, stabilizer-2, frequently-asked-questions-2). Black background and blue titles keep the theme's look.
// Five columns on a wide (1440px) row; contact spans the top row below 1200px, two columns on phones.
const col = (title, links) =>
  `<div class="ef-col"><h2 class="ef-title">${title}</h2><ul>${links.map(([t, u]) => `<li><a href="${u}">${t}</a></li>`).join('')}</ul></div>`;

const year = new Date().getFullYear();

export const FOOTER = `<!-- Footer Widget -->
<style>
.ef{background:#000;color:#cfd6df;font-size:13.5px;line-height:1.55;padding:32px 0 0}
.ef-wrap{max-width:1440px;margin:0 auto;padding:0 32px}
.ef a{color:#cfd6df;text-decoration:none}.ef a:hover,.ef a:focus{color:#ff9900}
.ef-grid{display:grid;grid-template-columns:1.5fr repeat(4,1fr);gap:24px 32px}
.ef-title{color:#1e7dd8;font-size:13px;line-height:1.4;font-family:inherit;font-weight:700;text-transform:uppercase;letter-spacing:.05em;margin:0 0 10px}
.ef ul{list-style:none;margin:0;padding:0}.ef li{padding:2px 0}
.ef-org{color:#fff;font-weight:600;margin:0 0 6px}.ef p{margin:0 0 6px}
.ef-cta{display:flex;flex-wrap:wrap;gap:8px;margin:12px 0 0}
.ef .ef-btn{display:inline-flex;align-items:center;min-height:36px;padding:6px 14px;border-radius:4px;border:1px solid #333;font-weight:600;font-size:13px}
.ef .ef-btn.main{background:#ff9900;border-color:#ff9900;color:#000}.ef .ef-btn.main:hover{background:#ffad33;color:#000}
.ef-social{display:flex;gap:14px;margin-top:12px;font-size:18px}
.ef-bar{border-top:1px solid #222;margin-top:26px;padding:12px 0;font-size:12.5px;color:#8a95a3;display:flex;flex-wrap:wrap;justify-content:space-between;gap:8px}
.ef-bar a{color:#8a95a3}
@media (max-width:1199px){.ef-grid{grid-template-columns:repeat(4,1fr)}.ef-brand{grid-column:1/-1;display:grid;grid-template-columns:repeat(3,auto);justify-content:start;gap:4px 40px}.ef-brand .ef-title{grid-column:1/-1}}
@media (max-width:767px){.ef-wrap{padding:0 16px}.ef-grid{grid-template-columns:1fr 1fr;gap:22px 16px}.ef-brand{display:block}.ef li{padding:5px 0}.ef-bar{display:block}.ef-bar span{display:block;margin-bottom:4px}}
</style>
<footer class="ef">
<div class="ef-wrap">
<div class="ef-grid">
<div class="ef-col ef-brand">
<h2 class="ef-title">Contact us</h2>
<div>
<p class="ef-org">Electronics &amp; Controls Power Systems Private Limited</p>
<p>29/A, 2nd Phase, Peenya Industrial Area,<br>Bengaluru, Karnataka 560058</p>
</div>
<div>
<p>Sales: <a href="tel:+918028397120">+91 80 2839 7120</a><br>Office: <a href="tel:+918028371974">+91 80 2837 1974</a><br><a href="mailto:sales@eandcpower.com">sales@eandcpower.com</a></p>
<p>Mon to Sat, 9:00 am to 5:30 pm</p>
</div>
<div>
<div class="ef-cta"><a class="ef-btn main" href="/get-a-quote">Get a quote</a><a class="ef-btn" href="/ups-price-in-india">UPS prices</a></div>
<div class="ef-social">
<a href="https://www.linkedin.com/company/electronics-controls-power-systems-pvt-ltd/" target="_blank" rel="noopener" aria-label="LinkedIn"><em class="fa fa-linkedin" aria-hidden="true"></em></a>
<a href="https://www.facebook.com/eandcpower" target="_blank" rel="noopener" aria-label="Facebook"><em class="fa fa-facebook" aria-hidden="true"></em></a>
<a href="https://twitter.com/eandcpower" target="_blank" rel="noopener" aria-label="X (Twitter)"><em class="fa fa-twitter" aria-hidden="true"></em></a>
</div>
</div>
</div>
${col('UPS systems', [
  ['Online UPS', '/online-ups'],
  ['Industrial UPS', '/industrial-ups-manufacturer-in-india'],
  ['Modular UPS', '/renatamodular'],
  ['Rack mount UPS', '/rack-mount'],
  ['Lithium UPS', '/lithium-ups'],
  ['Line interactive UPS', '/lineups'],
  ['Marine UPS', '/marine-ups'],
])}
${col('Power &amp; energy', [
  ['Voltage stabilizers', '/stabilizer'],
  ['Inverters', '/power-inverter-manufacturer-in-india'],
  ['UPS batteries', '/smf'],
  ['Battery energy storage', '/battery-energy-storage-system'],
  ['Solar solutions', '/solar-solutions'],
  ['EV chargers', '/ev-chargers'],
  ['Remote monitoring', '/ups-remote-monitoring'],
])}
${col('UPS across India', [
  ['UPS manufacturer in India', '/ups-manufacturer-in-india'],
  ['Bengaluru', '/ups-manufacturer-in-bangalore'],
  ['Mumbai', '/ups-manufacturer-in-mumbai'],
  ['Delhi', '/ups-manufacturer-in-delhi'],
  ['Chennai', '/ups-manufacturer-in-chennai'],
  ['Kolkata', '/ups-manufacturer-in-kolkata'],
  ['Sales offices', '/contact#sales-offices'],
])}
${col('Company', [
  ['About us', '/about-us'],
  ['Service &amp; AMC', '/eandcpower-services'],
  ['Blog &amp; guides', '/blogs'],
  ['Catalogs', '/catalog'],
  ['FAQs', '/frequently-asked-questions'],
  ['Careers', '/careers'],
  ['Contact', '/contact'],
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
