# Project notes

Detailed working notes kept during the rebuild, newest sections last. For an overview see the [README](../README.md); for a dated summary see the [CHANGELOG](../CHANGELOG.md).

Astro rebuild of the static site. The pages in `src/legacy/` are the original HTML, unchanged in design; `src/lib/legacy.js` applies the SEO cleanup when building.

```
npm install
npm run build        # outputs dist/, one .html file per page
npm run check:site   # run after build; fails on broken links, links to redirects, or a missing/extra canonical
```

## What the build does to every page
- Rewrites internal links to the final clean URL (`renata.html` becomes `/renata`, `stabilizer-2.html` becomes `/stabilizer`), so no link goes through a redirect.
- Adds one self-referencing canonical on the clean URL and removes any old `.html` canonical.
- Adds `noindex` to `comming-soon`, `update` and `checkup`.
- Removes the Cloudflare email-decode script, which returns 404 on Vercel.
- Sends the Quick Enquiry forms (`contact-us.php`) and the catalog/blog form (Firebase) to `/api/contact`.
- Generates `sitemap.xml` from the page list.
- `npm run build` also runs `scripts/optimize-images.mjs`: WebP copies of JPG/PNG images and real width/height on every `<img>`.
- Applies the title and description overrides in `src/data/seo.js`, fills missing image alt text, lazy-loads images below the header, and adds Organization schema where a page has none.

## Building new pages
- `src/layouts/Page.astro` reuses the live header, sidebar and footer (taken from `ups-manufacturer-in-bangalore`), so every new page matches the current design.
- `src/pages/get-a-quote.astro`: the quote form, which posts to `/api/contact`.
- `src/pages/guides/*.astro`: buyer guides, published at `/guides/...`.
- Blog: one Markdown file per post in `src/content/blog/`, published at `/blogs/{file-name}` and listed on `/blogs`. Frontmatter: `title`, `seoTitle` (≤60 chars), `description` (≤160), `date`, `tag`, `photo` (an existing site image for the cover), `coverAlt`, `products` (product slugs), optional `faq` and `updated`. `npm run build` makes the 1200×630 cover (also the share image) in `public/image/blog/` if it is missing; `npm run covers -- --force` redoes them. Posts get BlogPosting + FAQ schema, OG article tags and a sitemap entry with `lastmod`.
- `src/data/locations.js` + `src/pages/[loc].astro`: the India hub's 9 state hubs and 27 city pages. All are built and linked, but stay `noindex` and out of the sitemap until the entry has a `service` line and at least 2 real `facts` from E&C.
- `src/layouts/Product.astro` + `src/data/products.js`: the redesigned product pages (35 products). Each page keeps the legacy page's URL, title and description; the content comes from the legacy page. `online-ups`, `stabilizer`, `solar-solutions` and `custom-solutions` stay as legacy category pages.

## Deploy (Vercel)
- Framework preset: Astro. `vercel.json` holds `cleanUrls` and the 301 map.
- Environment variables: `RESEND_API_KEY`, `CONTACT_FROM_EMAIL` (a verified Resend sender), `CONTACT_TO_EMAIL` (defaults to sales@eandcpower.com).

## SEO audit fixes (17 Nov 2026)
- One company entity in all schema (`ORG` / `ORG_REF` in `src/lib/legacy.js`, `@id` …/#organization) with address, map pin, hours and all three phone numbers; legacy hand-written schema is normalised at build.
- Removed the third-party `eptagmanage` loader (plugins.appadd.in.net) from legacy pages: it injected remote HTML using an embedded key. The loader and its key are now also removed from the `src/legacy/` source files (and the appadd plugin script from `/update`), so the key is not in the repository.
- `tel:` links in +91 format; location titles shortened; Service and Article schema completed; guide covers added.
- Bengaluru pages linked from the India hub; product pages link their blog posts; robots.txt groups merged; llms.txt extended.

## Not done yet
- Needs the client: which phone is primary; a named author/reviewer for posts; certificate numbers/scans; 3–5 case studies; conflicting legacy claims ("three decades" vs "40 years" vs 1978; "10" vs "12 regional offices"; "94% satisfaction" source); Google review link.
- Needs Search Console data: merge the near-duplicate Bengaluru pages and /ups-supplier-in-india (redirect groups 4–5).
- Legacy pages load jQuery 3.4.1 from a CDN (known XSS advisories) and then the theme's bundled jQuery 1.12.4; removing either needs testing of the theme scripts.
- Redirect groups 4–5 (Bengaluru and India overlaps): apply them only after Search Console shows those pages get no clicks of their own.
- Location pages (9 state hubs, 27 new city pages): each needs real local facts from E&C first.
- Images that never existed on the live site: `nickel` and `intelligent-transfer-switch` have no product photo (the page shows none); `solar-grid` uses the general solar image.
- Product data to confirm with E&C (the legacy pages contradict themselves): Renata Modular 10–1200 vs 6–1560 kVA; Renata-300 10–800 vs 10–300 kVA; IP41–55 UPS phase lines vs its 10–40 kVA range; isolation transformer 1–500 vs 1–1000 kVA; air vs oil cooled stabilizer ranges (product pages vs the stabilizer page); Renata-I phase options; "quotation usually within one working day".

## Location and industrial hubs redesign (17 Nov 2026)

- `/ups-manufacturer-in-india`, the 9 state pages, the 27 city pages (`src/pages/[loc].astro`) and
  `/industrial-ups-manufacturer-in-india` now use `src/layouts/Hub.astro`: the product-page look (navy hero, cards,
  product photo strip, collapsible FAQ, quote form, sticky call bar on phones) with the site header and footer.
- Shared pieces: `src/styles/pd.css` (moved out of Product.astro, unchanged), `src/styles/hub.css`,
  `src/components/{Quote,Range,Faq,IndiaMap}.astro`.
- `IndiaMap` places cities by latitude/longitude (`GEO` in `src/data/locations.js`) with lines from the Bengaluru plant,
  zooms to the highlighted cities and avoids label overlaps. It has no country or state outline on purpose: a
  hand-drawn border would be inaccurate, and Indian rules on map boundaries are strict.
- City pages show the straight-line distance from the plant (`kmFromPlant`).
- Industrial hub: the 25 keywords mapped to `/industrial-ups` in the keyword map now target
  `/industrial-ups-manufacturer-in-india` (the URL that already ranked), with one card per industry, an industrial vs
  commercial UPS table, a how-to-choose list and FAQ. No new `/industrial-ups` URL, to avoid two pages competing.
- `/battery-energy-storage-system` (BESS, 2 keywords) and `/marine-ups` (1 keyword) are built from what E&C already
  documents: LiFePO4 packs + BMS, hybrid inverters and battery monitoring for BESS; MIL grade UPS supplied to the Navy for
  marine. **Client to confirm:** that E&C offers complete BESS projects, and any ship-class approvals (IRS, DNV, ABS)
  for the marine UPS. Neither page claims utility-scale storage or class approval.
- Keyword map: all 500 keywords now have a page; 432 indexable, 68 on noindex location pages awaiting local facts.

## Sales offices on city, state, India and contact pages (17 Nov 2026)

- `src/data/offices.js` holds the 8 regional sales offices and service locations, copied from the client's own
  `/eandcpower-sales` and `/eandcpower-services` pages. `officesHtml()` renders the "Our Sales Office Locations" block
  used on `/contact` (injected in `cleanup()` before the map), `/ups-manufacturer-in-india`, and each state/city page
  (only the relevant office, marked).
- City and state facts are now derived from this data (`src/data/locations.js`, end of file). A page is indexable
  when it is on the service list and has an office: 24 pages went live (6 states, 18 cities).
  Still noindex (covered by a distant office only, not on the service list): Gujarat, Telangana, Andhra Pradesh,
  Nashik, Ahmedabad, Surat, Vadodara, Hyderabad, Visakhapatnam, Gurugram, Noida, Ludhiana.
- **Client to confirm:** every office address is current; "8 sales centres" (sales page) vs "10 regional offices"
  (About us and 2 other pages) vs "12 Regional Offices"; whether Noida/UP is covered by the Delhi office; whether
  Hyderabad and Ahmedabad have service engineers (they would then go live too). Spelling normalised: "Shukhliya" →
  "Sukhliya" (Indore), "Cochin" → "Kochi".

## Online UPS and stabilizer category hubs (17 Nov 2026)

- `/online-ups` and `/stabilizer` replaced the thin legacy category pages (a list of links and two lines) with Hub
  pages. All 44 online UPS keywords and all 8 stabilizer keywords in the keyword map appear on the pages.
- Online UPS: range strip, model chooser table, how double conversion works, online vs line interactive vs offline,
  12 sector cards (hospitals, BFSI/ATMs, government/PSU, education, retail/hotels, airports, broadcast, CCTV/fire
  alarm, pharma, data centres, system integrators, industrial), the homepage's customer logos
  (`src/components/Customers.astro`), FAQ, quote.
- Stabilizer: what an AVR is, oil vs air cooled, servo vs static (E&C makes servo only), applications, installation
  service, FAQ, quote. Their old title/description overrides were removed from `src/data/seo.js`.
- **Client to confirm:** stabilizer ranges. Product pages say air cooled 2–100 kVA and oil cooled 100–1000 kVA; the old
  category page said oil 1–100 and air 1–1000. The hub follows the product pages. Also check the stabilizer photos:
  `Aries_Air_Cooled.jpg` looks like an oil cooled (finned tank) unit and `Oil_Cooled_Stabilizer.jpg` like an air
  cooled cabinet.

## All location pages live (17 Nov 2026)

- At the user's request, the 12 remaining state/city pages (Gujarat, Telangana, Andhra Pradesh, Ahmedabad, Surat,
  Vadodara, Nashik, Hyderabad, Visakhapatnam, Gurugram, Noida, Ludhiana) are now indexable. Rule in
  `src/data/locations.js`: a page is indexable when a regional sales office covers it.
- These pages have one local fact (the covering office) and no service location, so they are thinner than the
  rest. Strengthen them with real local facts when the client provides them.
- Noida is assigned to the New Delhi office (Delhi NCR); the sales page does not list UP. **Client to confirm.**
- Only `/404`, `/comming-soon`, `/update` and `/checkup` remain noindex. Sitemap: 139 URLs.

## Speed check (Lighthouse 13.4, mobile, 17 Nov 2026)

Run on the local preview, which serves files **uncompressed** (Vercel compresses them), so real scores will be higher.

| Page | Perf | A11y | BP | SEO | LCP |
|---|---|---|---|---|---|
| Home | 72 → 81 | 87 | 81* | 100 | 7.1 s → 4.4 s |
| India hub | 79 → 83 | 91 → 96 | 100 | 100 | 5.0 s → 4.1 s |
| Online UPS | 86 | 91 → 100 | 100 | 100 | 3.7 s |
| Industrial UPS | 86–87 | 91 → 100 | 100 | 100 | 3.8 s |
| Chennai | 86–89 | 91 → 100 | 100 | 100 | 3.6 s |
| Renata (product) | 89 | 94 → 100 | 100 | 100 | 3.3 s |
| Blog post | 91 → 94 | 90 → 94 | 100 | 100 | 2.9 s |
| Contact | 91–95 | 79 → 89 | 96 | 100 | 2.8 s |

TBT 0–20 ms and CLS ~0 everywhere. *Home BP: the WhatsHelp widget loads over http on localhost only.

Fixed: home hero slide as WebP + preload; `font-display: swap` on the theme's Roboto/Poppins; footer headings h5 → h2
(heading order); underlined links in running text; breadcrumb contrast; map label; contact map iframe title and
file-input label.

Not fixed (bigger jobs): the theme's two render-blocking stylesheets (~60 KB compressed, mostly unused rules);
product photos served larger than displayed (~130–350 KB per page; needs resized thumbnails); jQuery bundle and
Google Tag Manager JS (~130 KB unused); the contact page's orange-on-white legacy text contrast.
