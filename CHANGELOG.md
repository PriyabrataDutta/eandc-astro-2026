# Changelog

All notable changes to this project. Format based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

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
