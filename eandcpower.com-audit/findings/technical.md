# Technical SEO findings: eandcpower.com Astro rebuild (pre-deploy)

**Technical score: 78/100**

Checked: dist/ (197 html), dist/sitemap.xml, vercel.json, robots.txt, src/pages/[loc].astro. The site is not deployed, so live response headers and redirect behaviour are untested.

## What works
- Canonicals: all 197 pages have an absolute https://www canonical that matches the cleanUrls path. No .html and no trailing slash. The only exceptions are noindex utility pages (/update and the Google verification file).
- Sitemap: 192 unique URLs, all present in dist, none redirected, none noindex. The 4 noindex pages (/404 /checkup /comming-soon /update) are excluded.
- Redirect map (50 rules, all 301): no chains or loops. Every destination exists in dist. No source collides with a live page.
- Internal links: no .html hrefs, no trailing-slash hrefs, no links to redirect sources, no 404 targets (checked the dist href set).
- Mobile and lang: `<html lang="en">` and a viewport meta tag are on every indexable page.
- Location pages: the 27 city pages share about 26% of 5-word phrases on average (max 36%), with about 1,000 words each and a local.json section per place. This is not near-duplicate.
- Robots: `User-agent: *` allows all, the AI bots are allowed, and the Sitemap line is present.
- Scripts: the blog and guide pages use absolute /js paths, so nested pages are fine.

## Findings

### High
1. **No security headers.** vercel.json has no `headers` block, so there is no HSTS, X-Content-Type-Options, Referrer-Policy, X-Frame-Options/frame-ancestors, Permissions-Policy or CSP. Vercel sets none of these by default except HSTS on vercel.app.
   Fix: add `"headers":[{"source":"/(.*)","headers":[...]}]` with Strict-Transport-Security `max-age=63072000; includeSubDomains`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `X-Frame-Options: SAMEORIGIN`, and Permissions-Policy. Add a report-only CSP first, because the site uses GTM and a jQuery CDN.
2. **Every page links to a noindex placeholder.** `/comming-soon` is linked from 194 pages (the nav item "Lead Acid Battery to Lithium Converter"; source in src/legacy/*.html, `href="comming-soon.html"`). The link goes to a dead end, and it wastes link equity and crawl budget on a noindex page. The URL is also misspelled.
   Fix: remove the nav item until the page exists, or build the real page. If it stays, rename the page to /coming-soon and add a redirect from /comming-soon.
3. **Old-URL redirect coverage is thin.** vercel.json only maps -2 duplicates plus 8 renames. Vercel's cleanUrls already redirects *.html to the clean path. Any old WordPress or legacy URLs that are not in dist (for example /index.html variants, /category/ or ?p= paths, and image or PDF paths) 404. I could not check them without access to the old site's crawl or GSC export.
   Fix: diff the old site's indexed URLs (GSC Pages export, or the live sitemap before cutover) against dist. Add a 301 for every miss. Add a catch-all that sends unknown URLs to the 404 page, which should return a real 404 status (see Medium 7).

### Medium
4. **Sitemap lastmod is partial.** Only 58 of 192 `<url>` entries have `<lastmod>` (the blog posts, all 2026-11-18). The other 134 have none. Google ignores lastmod when it looks uniform or unreliable, so lastmod only helps if it is accurate on all URLs.
   Fix: emit lastmod on every URL from real per-page change dates (git mtime or content frontmatter). Do not stamp the build date on all pages. Skip changefreq and priority. They are already omitted, which is correct.
5. **URL casing: `/domestic-Inverters`** is in the sitemap, the canonical and 200 internal links. Vercel paths are case-sensitive, so `/domestic-inverters` will 404 and the capital letter creates a duplicate-URL risk.
   Fix: if the live site already ranks on it, keep it and add redirects for `/domestic-inverters` and `/domestic-Inverters-2` (the second already exists). If it is safe to change, move to lowercase and 301 the old casing. Do not change it blindly.
6. **No IndexNow.** There is no key file in public/ and no ping step. Bing, Yandex and Naver would pick up the 192 URLs and the redirects faster with it.
   Fix: add `public/<key>.txt` and POST the URL list to https://api.indexnow.org/indexnow in the deploy step. This is optional but cheap.
7. **404 handling.** dist/404.html is `noindex, follow` and its canonical points to itself (/404). The crawl showed 200 on the preview server, which is expected for the static preview. Vercel serves 404.html with a 404 status only for unmatched paths.
   Fix: after deploy, curl a nonsense URL and confirm HTTP 404. Drop the canonical from the 404 template.
8. **Render-blocking jQuery.** The homepage loads jquery-3.4.1 from code.jquery.com, then jquery.bundle.js and script.js with no defer. jQuery 3.4.1 is outdated and the CDN is a third-party dependency. The pages render server-side, so there is no indexing risk. This is an LCP/INP risk only.
   Fix: self-host the bundle (the repo already has jquery.bundle.js) and add `defer` to all three scripts.

### Low
9. **/googlee9727d745293ef4b** (Search Console verification file) has no canonical, no viewport and no lang. It is harmless. Keep it so verification persists. It is not in the sitemap, which is correct.
10. **No hreflang.** There are no alternates, which is fine for a single-language en-IN site. `lang="en"` could be `en-IN`.
11. **State hubs and city pages are all indexable.** 27 cities and 9 states, all in the sitemap. The content is distinct enough today. After launch, watch GSC for "Crawled - currently not indexed". Cities with no office or service presence are the likeliest to be dropped. Keep the `indexable` gate in locations.js strict.
12. **No `/` redirect rules for trailing slash or uppercase variants** beyond the Vercel defaults. This is acceptable. Verify `/about-us/` returns 308 or 301 after deploy.

## Post-deploy checks
- `curl -sI` for security headers and HTTP 301 on 5 legacy URLs.
- A nonsense URL returns 404.
- Submit sitemap.xml in GSC and Bing Webmaster Tools.
- Confirm the sitemap count is still 192.
