# SEO Audit: eandcpower.com Astro rebuild (pre-launch)

**Audited:** 25 Nov 2026 · **Target:** local production build (`npm run build` → `astro preview`, http://localhost:4321), 197 HTML pages · **Production domain:** https://www.eandcpower.com
**Business type:** B2B manufacturer with a service area (UPS, inverters, stabilizers, battery chargers, solar, EV chargers). HQ and factory in Peenya, Bangalore, with 8 regional sales and service offices.

## SEO Health Score: 69 / 100

| Category | Weight | Score | Weighted |
|---|---|---|---|
| Technical SEO | 22% | 78 | 17.2 |
| Content Quality | 23% | 64 | 14.7 |
| On-Page SEO | 20% | 66 | 13.2 |
| Schema / Structured Data | 10% | 68 | 6.8 |
| Performance (lab) | 10% | 84 | 8.4 |
| AI Search Readiness | 10% | 58 | 5.8 |
| Images | 5% | 62 | 3.1 |
| **Total** | | | **69** |

Supporting, unweighted scores: Local SEO 58 · Search experience (SXO) 58.

### Limits of this audit
- The site is not deployed. Performance figures come from lab runs on uncompressed files, and security and cache headers could only be checked in `vercel.json`.
- No Google Search Console, CrUX, GA4, DataForSEO or Moz credentials were configured, so there is no field data, ranking data or backlink metrics.
- Web search was only partly available to the specialists, so the Google Business Profile, citation and review counts are not verified.
- Screenshots and the tap-target and above-the-fold checks did not run because the headless browser failed, so the visual review is incomplete.
- Topic clustering was skipped.

## Executive summary

The rebuild is technically clean:
- All 197 pages return 200.
- Canonicals are absolute www URLs and match `cleanUrls`.
- The sitemap lists 192 URLs, none of them redirected or noindex.
- The 50 redirects have no chains or loops.
- There are no broken or `.html` internal links and no duplicate titles or descriptions.
- Every indexable page has JSON-LD.
- The site loads fast in the lab: Lighthouse mobile scores range from 86 to 97 and CLS (layout shift) stays below 0.005.

The score is held back by **trust and consolidation problems**, not technical ones.

### Top 5 critical issues
1. **Conflicting company facts across copy and schema.**
   - **Founding year:** "Since 1978" and "40+ years" conflict with the CIN `U31200KA1997PTC022448`, which shows a 1997 incorporation.
   - **Phone numbers:** at least four are in use (080 2837 1974, 080 2839 7120, 2837 9401 and 70220 06375).
   - **Organization schema:** about 31 legacy pages still declare an old `#organization` node with different facts.
   - **Company name:** it appears in six different forms.
2. **Legacy keyword-variant pages compete for the same searches.**
   - About 20 pages for Bangalore and India ("ups-manufacturer", "-supplier", "-system", "-company", "best-ups-…") target the same intent with generic copy that overlaps 32–36%.
   - The homepage and `/online-ups-manufacturer-in-bangalore` target the same query.
   - Google may treat these as doorway pages.
3. **No named author or expert.**
   - `AUTHOR = null` in `src/data/author.js`, so all 58 posts are credited to the Organization.
   - There are no engineer bios or case studies, and only 2 posts use first-hand phrasing.
   - This is the biggest E-E-A-T gap (Google's experience, expertise and trust signals) and the main blocker for AI citations.
4. **194 pages link to a noindex placeholder.** The "Lead Acid Battery to Lithium Converter" nav item points to `/comming-soon`.
5. **No security or cache headers.** `vercel.json` has no `headers` block, so there is no HSTS, nosniff, Referrer-Policy or framing policy, and no long `Cache-Control` on `/css`, `/js`, `/image` or `/fonts`.

### Top 5 quick wins
1. Add a `headers` block to `vercel.json` with the security headers and immutable cache rules for static assets.
2. Pick one primary phone number and one canonical brand name, then apply them in `src/lib/footer.js`, `src/lib/schema.js`, the legacy Organization blob and meta descriptions.
3. Remove or rename the `/comming-soon` nav link, and redirect `/domestic-Inverters` to a lowercase URL.
4. Set a real `AUTHOR` (named engineer, credentials, photo, LinkedIn) in `src/data/author.js`. The schema and bylines are already wired to use it.
5. Give each blog post its real publish date and a `lastmod` date. Add `lastmod` to all 192 sitemap entries, not just 58.

## Technical SEO (78)
**What works:** canonicals, sitemap and redirect map all pass. There are no broken links. The 27 city pages overlap by only about 26%, so they are not near-duplicates. robots.txt is clean and allows the AI crawlers.

| Severity | Finding | Fix |
|---|---|---|
| High | No security headers in `vercel.json` | Add HSTS, `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`/`frame-ancestors` and `Permissions-Policy`, plus a CSP in report-only mode |
| High | `/comming-soon` (noindex) is linked from 194 pages via the legacy nav | Remove the link or build the page under a correctly spelled URL |
| High | Only 50 legacy redirects | Compare the old site's indexed URLs (GSC export or `site:` search) against `dist/` and add a 301 for each miss before launch |
| Medium | Only 58 of 192 sitemap entries have `lastmod` | Add real per-page dates |
| Medium | `/domestic-Inverters` is mixed case and Vercel paths are case-sensitive | 301 it to `/domestic-inverters` |
| Low | No IndexNow, the 404 page has a self-canonical, and jQuery loads from a CDN without `defer` | See `findings/technical.md` |

## Content quality (64) and on-page SEO (66)
**What works:**
- The new blog posts are accurate, with worked examples, FAQ sections, tables and about 4 internal links each.
- Blog posts and product pages link both ways.
- The new product pages are strong.
- No titles or descriptions are duplicated.

| Severity | Finding | Fix |
|---|---|---|
| High | No named author or reviewer | Set `AUTHOR`, add a reviewer line on technical posts and publish 2–3 installation case studies |
| High | About 20 legacy pages for Bangalore and India keyword variants compete with each other | Keep one hub per intent plus the genuinely distinct industry pages, and 301 the synonym pages. There is a full list in `findings/content.md` and `findings/sxo.md` |
| High | Unsourced or conflicting claims ("since 1978", "1 lakh installations", "best") | Confirm the facts with the client, cite them or drop them, and show certificates and client logos as proof |
| Medium | Legacy titles and descriptions are weak, e.g. the homepage title is "Online UPS Manufacturer in Bangalore", and some descriptions open with a phone number | Rewrite them around the product and the differentiator |
| Medium | City pages are templated (36–46% overlap) and some distant cities claim local installation and AMC | Keep cities that have real local proof such as an office, engineer or installations. Noindex the rest or add 3+ real facts |
| Medium | Technical wording errors ("EC Directive EN62040", "zero waveform distortion") | Correct them to IEC 62040 and a realistic THD figure |
| Medium | Legacy pages place the full mega-menu inside the main content | Move it to `<nav>` |

## Schema (68)
**What works:** BreadcrumbList is on 192 pages. Product, Service and BlogPosting are used appropriately, the HQ node has precise geo and opening hours, and there are no invalid JSON blocks.

| Severity | Finding | Fix |
|---|---|---|
| High | `/#organization` is defined many times with conflicting facts, twice on contact.html alone | Define it once in full, reference it everywhere else by `{"@id": ".../#organization"}` and remove the legacy blobs |
| High | LocalBusiness is duplicated (`#organization` and `#localbusiness`), the 7 office `department` nodes have no phone, @id or region, and their addresses are marked "pending confirmation" in `src/lib/legacy.js` | Merge the two nodes, confirm the office addresses and add phone and `@id` |
| High | `foundingDate` 1978 contradicts the 1997 CIN | Confirm with the client. One option is founding 1978 and incorporation 1997, with the copy explaining it |
| Medium | Product has no offers or ratings, and its description contains a phone number | Leave the offers out rather than inventing prices, add `url` and `@id` and remove the phone number |
| Medium | Blog posts are authored by the Organization and all have the same default dates | Fix with the author and date changes above |
| Low | WebSite node is on only 8 pages and the homepage has none | Add it to the homepage |
| Info | FAQPage is on 149 pages | No Google rich results, but harmless and useful for AI answers |

Corrected JSON-LD snippets are in `findings/schema.md`.

## Performance (84, lab) and images (62)
Mobile lab results (Lighthouse score / LCP / TBT):

| Page | Score | LCP | TBT |
|---|---|---|---|
| `/` | 97 | 2.6s | 30ms |
| `/online-ups` | 86 | 3.7s | 80ms |
| `/blogs/how-to-size-ups-for-data-centre` | 92 | 3.0s | 10ms |
| `/ups-manufacturer-in-chennai` | 96 | 2.6s | 20ms |
| `/contact` | 94 | 2.5s | 0ms |

CLS was 0.001–0.004 on all five pages.

| Severity | Finding | Fix |
|---|---|---|
| High | Render-blocking CSS: `vendor.bundle.css` is 275KB raw and `style.css` 172KB raw, costing 310–455ms, with about 54KiB unused | Inline the critical CSS and defer or purge the vendor CSS |
| High | Oversized images: 12 files are over 300KB (the MIL-Grade PNG is 815KB), home cards are 1280px wide but displayed small, and about 357KiB could be saved | Serve responsive `srcset` sizes and recompress the large files |
| Medium | The `jquery.bundle.js` bundle is 247KB, and a `document.write` fallback loads it from a CDN | Defer it and remove the fallback |
| Medium | The home hero is a CSS background, and a hidden "preload" div duplicates the slider images | Use an `<img fetchpriority="high">` for the hero and drop the duplicate |
| Medium | 448 of 1,205 `<img>` tags have empty alt text, mostly the repeated product thumbnails in the sidebar | Give the linked product thumbnails descriptive alt text. Keep `alt=""` only for purely decorative images |
| Low | Cleanup: a commented-out eparichaya injector, HTTrack comments, a WhatsApp widget on every page and about 420KB of Maps JS on `/contact` | Remove the dead code and load the map only when the visitor clicks |

## AI search readiness (58)
**What works:**
- Every major AI crawler is allowed.
- The pages are static HTML.
- `llms.txt` and `ai.txt` are rich. Every `llms.txt` URL resolves except the `/contact#sales-offices` anchor.
- Blog posts use question-style headings with tables and FAQs.

**Gaps:**
- There is no named expert.
- The company has almost no third-party footprint: no Wikipedia or Wikidata entry, no YouTube channel and no Reddit mentions.
- Every post has the same date, so nothing signals freshness.
- The brand name and founding facts are inconsistent.
- Posts cite few external standards (IEC 62040, IS 16242, BIS).

**Estimated platform scores:** Google AI Overviews 62, Bing Copilot 60, Perplexity 58, ChatGPT 48.

## Local SEO (58)
**What works:** the Peenya address is identical on every page and in the schema, the HQ node has geo and opening hours, all 8 offices are listed, and city pages are generated only for real office locations.

**Gaps:**
- The phone numbers are inconsistent.
- 18 pages for Bangalore variants compete with each other.
- City pages have little real local proof.
- There are no reviews or review signals anywhere on the site.
- Branch offices have no phone, geo, hours or verified GBP.
- Only the HQ page has a map.

**Action:** create a verified GBP for each staffed branch and run the review-request process in `docs/LAUNCH-KIT.md`.

## Search experience (58)
For four of the five money keywords checked, the Google results are mostly IndiaMART and TradeIndia listings, which are scannable spec pages with prices, ratings and fast contact options.

E&C's pages are mostly prose. Gaps:
- There is no kVA, phase and backup spec table above the fold.
- The catalog has no PDF datasheets.
- The float-cum-boost (FCBC) charger traffic is split between `industrial-battery-charger-fcbc`, whose title doesn't say "float cum boost", and a Bangalore twin page that has no Product schema.

The specialists disagreed on WhatsApp. The SXO review saw WhatsApp links only on the home and contact pages, while the performance review saw the whatshelp widget on every page. Check this in a browser.

**Persona fit:** facility manager 68, procurement engineer 56, consultant 52.

---
Detailed evidence per category: `findings/technical.md`, `content.md`, `schema.md`, `performance.md`, `visual.md`, `geo.md`, `local.md`, `sxo.md`. Raw crawl data: `crawl.json`.
