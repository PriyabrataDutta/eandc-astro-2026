# Performance findings (Lighthouse 13, mobile emulation, localhost astro preview, uncompressed)

Scores: Performance 84/100 (lab good, field unknown, not deployed). Images 62/100.

## Lab numbers (Lighthouse performance score / FCP / LCP / TBT / CLS / bytes uncompressed)
| Page | Score | FCP | LCP | TBT | CLS | Weight |
|---|---|---|---|---|---|---|
| / | 97 | 1.1s | 2.6s | 30ms | 0.001 | 1,376 KiB |
| /online-ups | 86 | 2.4s | 3.7s | 80ms | 0.001 | 733 KiB |
| /blogs/how-to-size-ups-for-data-centre | 92 | 2.1s | 3.0s | 10ms | 0.002 | 522 KiB |
| /ups-manufacturer-in-chennai | 96 | 1.5s | 2.6s | 20ms | 0.001 | 703 KiB |
| /contact | 94 | 2.4s | 2.5s | 0ms | 0.004 | 1,042 KiB (Google Maps embed) |

Local TTFB 5-35ms (not representative of Vercel). CLS and INP risk (TBT) are fine everywhere.

## What works
- Hero preloaded with fetchpriority=high (home); blog hero img has fetchpriority=high.
- Images are WebP with width/height; below-fold images lazy. CLS ~0.
- font-display: swap on @font-face. Redirect map in vercel.json is clean.
- GA is async. TBT low.

## Findings
1. MEDIUM - LCP 2.6-3.7s, mostly element render delay (120-170ms) plus render-blocking CSS. /online-ups LCP is a text paragraph (`p.hb-lead`) at 3.7s, FCP 2.4s: blocked by vendor.bundle.css (275KB raw) + style.css (172KB raw), est. 310-455ms savings. Fix: inline critical CSS or trim vendor.bundle.css; ship minified (unminified-css flags ~14KiB; unused CSS ~54KiB).
2. MEDIUM - Homepage hero is a CSS background-image (`div.fill style=background-image`), so the preload is the only discovery path; also the same two slider images are duplicated in a hidden `div.preload` with loading=lazy (wasteful, no effect). Hero 119KB. Fix: use real `<img>` with srcset for mobile; delete the hidden preload div.
3. MEDIUM - Image delivery: lab flags ~357KiB savings on home. Home product cards are 1280x1098 WebP (23-71KB each) shown at far smaller sizes (e.g. Custom Solutions.webp 71KB, ~67KB wasted). Fix: generate 400-640w variants + srcset/sizes. Also dist/image holds 12 files >300KB (MIL-Grade-removebg-preview 815KB, rajaram-ramamoorthy.jpg 699KB, product/*.jpg 340-366KB) and a 249KB gallery4-large.jpg loaded on home; the jpg originals ship alongside the webp. Fix: convert or drop unused originals; webp/AVIF for gallery.
4. MEDIUM - jQuery loaded three ways: commented code.jquery.com, jquery.bundle.js (247KB raw, ~44KB unused on home), and a `document.write` fallback to cdnjs jQuery 3.6.0 at end of body. document.write is a Chrome intervention risk and the fallback is dead code if bundle already provides jQuery. Fix: remove the fallback; add `defer` to jquery.bundle.js and script.js.
5. LOW-MEDIUM - Third parties: gtag.js 183KB (77KB unused; fine, but load after interaction/idle if INP matters), whatshelp.io WhatsApp widget injected on every page (extra request chain, http fallback request seen), Google Maps embed on /contact (~420KB of JS; use loading=lazy iframe or click-to-load facade).
6. LOW - Font Awesome 4.7 woff2 (77KB) + Glyphicons shipped; no font preload; eot/svg/ttf variants in dist/fonts are dead weight (svg 444KB in dist, not fetched by modern browsers). Fix: preload the used woff2, subset icons, drop legacy formats.
7. LOW (hygiene/security) - HTTrack "Mirrored from" comments remain in the HTML. A commented-out block at index.html line 40 references `eparichaya.com/googletagapi/...php` ajax injection (looks like a third-party script injector from the legacy site, is inert in a comment). Remove from source and confirm the live legacy site is not injecting it.
8. INFO - vercel.json has no `headers` block: no Cache-Control for /css, /js, /image, /fonts. Vercel defaults static assets to revalidate (max-age=0), so repeat visits revalidate. Fix: add `Cache-Control: public, max-age=31536000, immutable` for hashed assets (_astro/*) and a long max-age for /image, /fonts; css/js names are unhashed except style62ea62ea.css so use a shorter TTL (or version the filenames) for those. Not measurable in preview.

## Not measured
Field CrUX data (not deployed), real Vercel compression/CDN, desktop Lighthouse run, screenshots (see visual.md).
