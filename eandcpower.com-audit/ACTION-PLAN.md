# Action Plan: eandcpower.com rebuild

Current score is 69/100. Ordered by impact; anything marked **Client** needs facts from E&C before work can start.

## Critical: before launch
1. **Redirect coverage: DONE 25 Nov**
   - Checked 191 URLs from the live sitemap and the links on those pages against `dist/`. Every page URL is served: directly, through `cleanUrls` (`.html` → clean), or through one of the existing 50 redirects.
   - The 12 misses are not pages: Cloudflare and jQuery scripts, an old form script, `logo1–5.png` (already 404 on the live site) and three links that were already broken. No new 301s were needed.
   - The live sitemap may not list every URL Google has indexed. Re-check against the Search Console "Pages" export once it's available.
2. **Security and cache headers: DONE 25 Nov**
   - `vercel.json` now sends nosniff, `X-Frame-Options: SAMEORIGIN`, Referrer-Policy and Permissions-Policy. HSTS is already sent by Vercel (`max-age=63072000`).
   - Assets under `/css`, `/js`, `/image`, `/fonts` and `/pdf` cache for 7 days with stale-while-revalidate, because their filenames aren't hashed. Only `/_astro/` is cached as immutable for a year.
   - A CSP was not added. Without a report endpoint a report-only policy is useless, so add one when there's a collector.
3. **Single source of company facts (Client, then Dev)**
   - Confirm the founding year (1978 or 1997), the primary phone number, the canonical brand name and the 7 sales-office addresses, which are marked "pending" in `src/lib/legacy.js`.
   - Apply them in `src/lib/schema.js`, `src/lib/footer.js` and meta descriptions.
   - Remove the legacy Organization blobs from about 31 pages and the duplicate node on contact.html.
4. **Dead-end nav link: DONE 25 Nov**
   - `src/lib/legacy.js` now strips the "Lead Acid Battery to Lithium Converter" nav item at build time. No built page links to `/comming-soon` anymore.
   - Re-add the item when the product page exists.

## High: weeks 1–2
5. **Consolidate the legacy keyword-variant pages (Dev and SEO)**
   - For each intent (online UPS, industrial UPS, UPS manufacturer, UPS supplier), keep one hub in Bangalore and one in India.
   - Keep the industry pages that are genuinely distinct (hospitals, data centre, manufacturing).
   - 301 the synonym pages to the hub, and make the homepage and `/online-ups-manufacturer-in-bangalore` target different searches.
6. **Named author (Client, then Dev)**
   - Set `AUTHOR` in `src/data/author.js` to a named engineer with credentials, photo and LinkedIn.
   - Add "Reviewed by" to technical posts.
7. **Real dates (Dev)**
   - Give each blog post its true publish date and an `updated` date.
   - Add `lastmod` to all sitemap entries.
8. **Float cum boost charger pages (Dev)**
   - Retitle `industrial-battery-charger-fcbc` to include "Float Cum Boost Charger (FCBC)".
   - 301 or differentiate the Bangalore charger twin.
9. **Conversion path (Dev)**
   - Add a sticky Call, WhatsApp and Quote bar on product and landing pages, after checking whether the whatshelp widget already shows site-wide.
   - Add a PDF datasheet per product to `/catalog`.
10. **Render-blocking CSS and images (Dev)**
    - Inline the critical CSS and purge or defer `vendor.bundle.css`.
    - Add responsive `srcset` and recompress the 12 images over 300KB.
    - Make the home hero an `<img fetchpriority="high">`.

## Medium: month 1
11. **City pages**
    - Keep cities that have real local proof such as an office, engineer or installations, and add 3+ real facts to each.
    - Noindex the rest.
    - Add a LocalBusiness node for each staffed office.
12. **Schema cleanup**
    - Merge `#organization` and `#localbusiness`.
    - Add `url` and `@id` to Product nodes and take the phone number out of their descriptions.
    - Add a WebSite node to the homepage.
    - Use the corrected snippets in `findings/schema.md`.
13. **Legacy page cleanup**
    - Rewrite the weak legacy titles and descriptions, and remove phone numbers from the opening of descriptions.
    - Move the mega-menu out of the main content into `<nav>`.
    - Fix the technical wording errors (IEC 62040, THD figures).
14. **Spec tables:** add a kVA, phase and backup spec table above the fold on landing pages.
15. **Image alt text:** give the repeated product thumbnails descriptive alt text. 448 images currently have `alt=""`.
16. **Small fixes**
    - `/domestic-Inverters` casing: deferred. The live site already serves this mixed-case URL, so the rebuild changes nothing. A lowercase redirect can loop if Vercel matches redirect sources case-insensitively, so test it on a preview deploy first.
    - `/contact#sales-offices` in `llms.txt`: no fix needed. The anchor exists on the contact page; that finding was wrong.
    - Remove the eparichaya and HTTrack leftovers.
    - Defer jQuery and drop its `document.write` fallback.

## Off-site: month 2 and ongoing
17. **Google Business Profile:** verify and optimize the HQ profile, then create a verified profile for each staffed branch.
18. **Reviews:** start the review-request process in `docs/LAUNCH-KIT.md`.
19. **Directory listings:** list the company on IndiaMART, TradeIndia, JustDial and Sulekha with the same name, address and phone as the site.
20. **Brand footprint:** start a YouTube channel (factory, testing, installs), make the LinkedIn company page consistent, and create a Wikidata entry. Earn mentions in trade press and on Reddit.
21. **Case studies:** publish 2–3 installation case studies with real numbers.
22. **Standards:** cite IEC 62040, IS 16242 and BIS in the posts.
23. **After launch:**
    - Connect Search Console, Bing Webmaster Tools and GA4, then re-run this audit with field data.
    - Set up IndexNow.
    - Take a drift baseline so later regressions are caught.
