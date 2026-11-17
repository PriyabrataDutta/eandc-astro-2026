<div align="center">

# ⚡ eandcpower.com — Astro rebuild

**The website of Electronics & Controls Power Systems Pvt. Ltd., Bengaluru — UPS manufacturer since 1978.**
Rebuilt on Astro for pan-India SEO, without changing the look of a single legacy page.

![Astro](https://img.shields.io/badge/Astro-7-BC52EE?logo=astro&logoColor=white)
![Node](https://img.shields.io/badge/Node.js-22%2B-339933?logo=node.js&logoColor=white)
![Vercel](https://img.shields.io/badge/deploy-Vercel-000000?logo=vercel&logoColor=white)
![Pages](https://img.shields.io/badge/pages-143-005c9e)
![Keywords](https://img.shields.io/badge/target%20keywords-500-ff9900)
![SEO](https://img.shields.io/badge/Lighthouse%20SEO-100-2e7d32)

</div>

---

## ✨ Highlights

| | |
|---|---|
| 🧱 **Legacy pages, pixel-identical** | 90+ original HTML pages are served as-is from `src/legacy/`; an SEO pass runs over them at build time (clean URLs, canonicals, schema, alt text, lazy images, WebP). |
| 🗺️ **India → state → city** | An India hub, 9 state pages and 28 city pages, each with a lat/long city map, distance from the Bengaluru plant, local industries, and the nearest of 8 regional sales offices. |
| 🏭 **Category hubs** | Online UPS, Industrial UPS, Voltage Stabilizers, Battery Energy Storage (BESS) and Marine UPS — redesigned, mobile-first, every mapped keyword on the page. |
| 📦 **35 product pages** | Data-driven from one file (`src/data/products.js`), with specs, applications, related products, linked articles and a quote form. |
| ✍️ **Blog + buying guides** | Markdown posts with auto-generated 1200×630 covers, Article/FAQ schema and sitemap `lastmod`. |
| 🔍 **SEO plumbing** | One Organization entity across all JSON-LD, generated `sitemap.xml` + HTML sitemap from the same list, `llms.txt`, 301 map, 500-keyword coverage. |
| 🚀 **Fast** | Lighthouse mobile: SEO 100 everywhere, accessibility 100 on redesigned pages, TBT ≤ 20 ms, CLS ≈ 0. |

## 🚀 Quick start

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # blog covers → astro build → WebP + image sizes  → dist/
npm run preview      # serve dist/
npm run check:site   # after a build: fails on broken links, redirects or bad canonicals
```

Requires **Node.js 22+**. Copy `.env.example` to `.env` for the contact form.

## 🗂️ Project structure

```
src/
├─ legacy/              # original HTML pages (design untouched)
├─ lib/
│  ├─ legacy.js         # build-time SEO cleanup + shared schema (ORG, ORG_REF)
│  ├─ footer.js         # the one compact footer used on every page
│  ├─ pages.js          # list of indexable pages → sitemap.xml and /sitemap
│  ├─ blog.js           # blog loader
│  └─ schema.js         # Article schema helper
├─ data/
│  ├─ products.js       # 35 products + families
│  ├─ locations.js      # states, cities, sectors, coordinates, indexability
│  ├─ offices.js        # 8 regional sales offices + service locations
│  └─ seo.js            # title/description overrides for legacy pages
├─ layouts/             # Page (legacy look), Product, Hub (redesigned pages)
├─ components/          # Quote, Range, Faq, IndiaMap, Customers
├─ pages/               # Astro pages; a page here replaces the legacy page with the same slug
│  ├─ [slug].html.js    # serves every legacy page through cleanup()
│  ├─ [loc].astro       # all state and city pages
│  ├─ blogs/ guides/
│  └─ sitemap.xml.js
├─ content/blog/        # Markdown posts
└─ styles/              # pd.css (product look), hub.css
api/contact.js          # quote & enquiry form → email (Resend)
scripts/                # blog covers, image optimisation, site link check
docs/PROJECT-NOTES.md   # detailed working notes, open questions for the client
```

## 🧩 How common changes work

<details>
<summary><b>Add a blog post</b></summary>

Create `src/content/blog/my-post.md` with frontmatter `title`, `seoTitle` (≤ 60), `description` (≤ 160), `date`, `tag`, `photo`, `coverAlt`, `products` and optional `faq`. The build makes the cover image, schema and sitemap entry; product pages listed in `products` link to it automatically.
</details>

<details>
<summary><b>Add or edit a product</b></summary>

Edit `src/data/products.js`, then add a 3-line `src/pages/<slug>.astro` with `<Product slug="<slug>" />`. Title and description default to the legacy page's own.
</details>

<details>
<summary><b>Make a city page stronger</b></summary>

Add real local facts (installations, engineers on site) to the city in `src/data/locations.js`, or add the city to an office's service list in `src/data/offices.js`. Facts, FAQ text and the office card update everywhere on the next build.
</details>

<details>
<summary><b>Change the footer or the sales offices</b></summary>

One file each: `src/lib/footer.js` and `src/data/offices.js`. The office block appears on `/contact`, the India hub and every state/city page.
</details>

## ☁️ Deploy (Vercel)

- Framework preset **Astro**; `vercel.json` holds `cleanUrls` and the 301 redirect map.
- Environment variables: `RESEND_API_KEY`, `CONTACT_FROM_EMAIL` (verified Resend sender), `CONTACT_TO_EMAIL` (defaults to sales@eandcpower.com).

## 📋 Status

See **[CHANGELOG.md](CHANGELOG.md)** for what changed and **[docs/PROJECT-NOTES.md](docs/PROJECT-NOTES.md)** for details and items waiting on client confirmation (office addresses, stabilizer ranges, BESS/marine claims, primary phone number).

---

<div align="center">
<sub>Built with Astro · Content © Electronics & Controls Power Systems Pvt. Ltd.</sub>
</div>
