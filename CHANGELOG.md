# Changelog

All notable changes to this project. Format based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Added

- `/ups-price-in-india`: price page for 29 "price / cost / buy" keywords that were on the quote form. It lists 18 products with their range and what sets the price, and covers price drivers, cost of ownership, how to buy and FAQs. Prices show "Get price" until the client confirms ranges (`PRICE` in the page). Linked from `/get-a-quote`, `/sitemap` and `llms.txt`.
- `/custom-solutions` rebuilt as a hub (8 keywords): custom UPS design, OEM, indigenisation, power conditioning, the design process, and sections for ports and shipping, smart cities, defence and machine builders.
- 12 blog posts (18 in total) answering the "what is / how" keywords: SMF vs VRLA, tubular vs GEL vs AGM, Ni-Cd batteries, FCBC chargers, static transfer switch, rack mount UPS, MIL grade vs IP55 UPS, THD / surge / bypass, MPPT controllers, solar DC UPS, SNMP and remote monitoring, UPS for hospitals and fire alarm systems. Each links to and from its product pages and is in `llms.txt`.
- Product FAQs: all 35 product pages get 5 FAQs each (175 in `src/data/product-faq.js`), with FAQPage schema, answering the keywords mapped to each page. Product pages now carry about 450–800 words of body text, up from about 120.
- `/solar-solutions` rebuilt as a hub (5 keywords): solar range, grid-tie vs off-grid vs hybrid table, uses, the installation service and FAQs.

- 40 more blog posts (58 in total) from the content plan: online UPS by sector (10), industrial sectors (9), data centre and IT (6), defence/rail/telecom (3), batteries (3), service and AMC (5), solar and EV (3), power quality (1). Each supports a hub or product page and is listed in `llms.txt`.
- `/blogs` grouped by topic with jump links, one section per content silo.
- India / state / city keyword structure for the client's 43 priority keywords (see `eandcpower.com-audit/ACTION-PLAN.md`):
  - Every city and state page gets a "UPS products and services in {place}" section with 8 keyword cards (online UPS, industrial UPS, power backup, voltage stabilizers, UPS batteries, service/AMC/per-call, battery chargers, EV chargers). Each card links to the national page for its keyword, is written from the place's own sectors, areas and office, and is ordered by local industry. The cards are also listed in the Service schema as an OfferCatalog. Titles name two keywords ("UPS Manufacturer in Pune | Online & Industrial UPS | E&C").
  - 6 new state hubs: Delhi NCR, Madhya Pradesh, Punjab, Odisha, Assam, Jammu and Kashmir, with local content in `local.json`. Every city now sits under a state hub.
  - New Jammu city page (office already listed; Jammu moved onto its service list).
  - `/ups-batteries`: batteries category page (SMF, tubular, AGM / GEL, lithium ion, Ni-Cd), with a comparison table, battery guides and FAQs. Battery product pages link back to it.
  - Legacy pages that stand as a product category (inverters, solar, battery chargers, EV chargers) now list their products in a range block, and three got new descriptions.
  - `/ups-accessories`: accessories category page (isolation transformers, static transfer switches, SNMP adapters) with a comparison table, uses, guides and FAQs.

### Fixed

- Products menu: every category except Online UPS was a dead `#` link. Each now opens its category page (industrial UPS, line interactive, inverters, EV chargers, stabilizers, remote monitoring, batteries, accessories); on mobile the first tap still opens the submenu.

- Nav linked 194 pages to the noindex `/comming-soon` placeholder ("Lead Acid Battery to Lithium Converter"); the item is removed at build time.

- SEO / GEO / AEO audit fixes: 58 legacy pages declared `lang="zxx"` or `"eng"` (now `en`); 12 location descriptions over 160 characters shortened; a `callto:` phone link and number format fixed on `/eandcpower-services`; BreadcrumbList schema added to the ~40 legacy pages without one; Facebook and X added to the Organization `sameAs`; `llms.txt` now lists every indexable page.

- Heading order: skipped levels (h2 → h4) fixed on every indexable page. Headings that set their size inline move up a level automatically; the rest are re-levelled with their measured look pinned inline (`src/data/heading-levels.json`), verified pixel-identical in screenshots.
- Location pages were 60–70% alike. Each of the 36 now has its own "Power conditions in …" section, 3 local needs and 2 local FAQs (`src/data/local.json`), and a product range picked from its industries: the most similar pair is now 37% alike, the average 27%.

### Changed

- `vercel.json`: `X-Robots-Tag: noindex, nofollow` on `*.vercel.app` hosts only, so the pre-production URL is not indexed; the production domain is unaffected.

- 34 product pages retitled for India: titles and descriptions now set in `products.js` (no "in Bangalore", no phone number in descriptions; "Made in India" only on products E&C builds, "Supplier in India" on batteries). An optional `heading` field puts the keyword in the H1 on the 8 pages mapped to priority keywords. `/ev-chargers` gets a spec title so it stops competing with `/ev-charger-manufacturer-in-india`. `/stabilizer` title now targets India.
- `vercel.json`: security headers (nosniff, X-Frame-Options, Referrer-Policy, Permissions-Policy) and caching (7 days for unhashed assets, immutable for `/_astro/`).

- Blog and guide authors: `src/data/author.js` takes a named engineer (name, job title, profile link) and shows it on every post and guide with Person schema; until set, posts stay credited to the company.
- `docs/LAUNCH-KIT.md`: Search Console, Bing, Google Business Profile (head office and regional offices), review request, citations and backlink plan, ready to paste.
- Footer: five columns (Contact, UPS systems, Power & energy, UPS across India, Company) on a wide 1440px row, with Get a quote and UPS prices buttons. Contact spans the top row on tablets; two columns on phones.

## [1.0.0] - 2026-11-17

First release of the Astro rebuild of eandcpower.com: 143 pages, 139 indexable, all 500 target keywords mapped to a page.

### Added

- **Astro port.** The original HTML pages are served unchanged in design from `src/legacy/`, with a build-time SEO pass (`src/lib/legacy.js`). The live URL scheme is kept (`/renata`, no trailing slash), and `vercel.json` holds 301 redirects for old and duplicate URLs.
- **India, state and city pages.**
  - India hub, 9 state pages (`/ups-supplier-in-{state}`) and 28 city pages (`/ups-manufacturer-in-{city}`), all linked together.
  - Each has a city map placed by latitude and longitude, the distance from the Bengaluru plant, local industries and the covering sales office.
- **Regional sales offices.** The 8 offices and 34 service cities are in `src/data/offices.js`. They appear as "Our Sales Office Locations" on `/contact`, on the India hub and on every state and city page, and in the Organization schema as departments.
- **Category hubs.**
  - `/online-ups` covers 44 keywords, with a model chooser, how double conversion works, 12 sector cards and customer logos.
  - `/industrial-ups-manufacturer-in-india` covers 25 keywords, with 15 industry cards, an industrial vs commercial table and how-to-choose advice.
  - `/stabilizer` adds an AVR explainer, oil vs air cooled and servo vs static comparisons, and installation service.
  - `/battery-energy-storage-system` and `/marine-ups` are new.
- **Product pages.** 35 products have a redesigned, mobile-first layout driven by `src/data/products.js`, with specs, applications, related products, linked articles and a quote form.
- **Blog.** `/blogs` plus 6 posts in Markdown, with auto-generated 1200×630 covers, Article and FAQ schema, and `lastmod` in the sitemap.
- **Buying guides.** 4 guides under `/guides/`, with covers and Article schema.
- **Sitemaps.** `sitemap.xml` and a redesigned `/sitemap` page are both built from one list (`src/lib/pages.js`).
- **Footer.** One compact footer on every page (`src/lib/footer.js`), replacing about 60 hand-copied variants.
- **Other files.** `llms.txt` with company details, offices, products, live locations and articles; `.env.example`; `scripts/check-site.mjs`, a link, redirect and canonical checker.

### Changed

- **Company schema.** One Organization/LocalBusiness entity (`@id` …/#organization) across all JSON-LD, replacing 8 conflicting versions. It carries the address, map pin, hours, phone numbers and regional offices.
- **Titles and descriptions.** Overlong titles were shortened (all ≤ 65 characters) and duplicate or missing descriptions were fixed.
- **Links.** Internal links point to the final clean URLs, so no link goes through a redirect. `tel:` links use the `+91` format.
- **Images.** WebP versions are generated, real width and height are added, images lazy-load below the header, and missing alt text is filled in.
- **Mobile.** Tables scroll sideways on phones, and justified text is left-aligned on small screens.
- **Fonts.** The theme's Roboto and Poppins use `font-display: swap`.
- **Homepage hero.** It now uses the WebP slide and preloads it, so the main image loads in 4.4 s instead of 7.1 s on mobile Lighthouse.
- **Location pages.** All 36 are indexable, each backed by a covering regional office.

### Fixed

- Dead footer links (`line_ups-2`, `stabilizer-2`, `frequently-asked-questions-2`) and a copyright year stuck at 2022.
- The broken jQuery fallback that requested a 404 on every page, and the Cloudflare email-decode script that 404s on Vercel.
- **Forms.** The enquiry forms posted to `contact-us.php` (Vercel can't run PHP), and the catalog and blog forms wrote to an open Firebase database. All now post to `/api/contact`.
- **Accessibility.**
  - Heading order and link underlines in running text.
  - Breadcrumb contrast and map labels.
  - A title on the contact map iframe and a label on the file input.
- **Content.** Blog and guide claims were tightened, and the UPS sizing example's arithmetic was corrected.
- `robots.txt` had duplicate `User-agent: *` groups, now merged into one.

### Security

- Removed the third-party appadd loader, which injected remote HTML into pages using an embedded key. It is gone from the build output and from the `src/legacy/` source files, including the plugin script on `/update`, so the key is not in the repository.

### Open items

Office addresses and office count, stabilizer ranges and photos, BESS and marine claims, primary phone number, and named authors. See [docs/PROJECT-NOTES.md](docs/PROJECT-NOTES.md).
