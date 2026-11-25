# Content Quality and On-Page SEO Findings (Astro rebuild, source and dist/ review)

Scores: **Content Quality 64/100. On-Page SEO 66/100.**
E-E-A-T sub-scores (internal model): Experience 45, Expertise 72, Authoritativeness 55, Trust 62.

Sample: homepage; renata300, smf, stabilizer, online-ups, about-us; 5 blog posts (how-to-size-ups-for-data-centre and 4 others); 5 city pages (mumbai, chennai, pune, jaipur, kochi); 5 legacy landing pages (online-ups-supplier-in-bangalore, ups-company-in-bangalore, industrial-ups-supplier/system-in-bangalore, best-ups-manufacturer-in-india). Crawl stats from eandcpower.com-audit/crawl.json (197 pages).

## What works
- The 58 blog posts are specific and technically sound: median about 1,500 words, with worked examples (data-centre sizing maths checks out: 156 kW / 0.9 = 173 kVA, 5x40 kVA is 87% loaded). Each has a direct-answer opening, H2 steps, a FAQ and FAQPage/BlogPosting schema. Average about 4 internal links per post, and only 10 of 58 have fewer than 3. This suits AI citation well.
- The blogs link to product pages through a `products:` frontmatter field. Product pages link back to related posts (smf, renata300 both do), so the link loop is two-way.
- The new product pages (renata300, smf, stabilizer, online-ups) have a clear spec table, a features list and a use-case section. Titles and meta descriptions are mostly unique: crawl shows 0 duplicate titles and 0 duplicate descriptions, with only 2 titles over 60 characters and 2 descriptions over 160.
- Company proof exists: CIN, address, two phone numbers, ISO 9001 and 14001, EN 62040, and "since 1978". Sales offices drive which city pages are indexable.
- City pages carry real local content (named industrial estates, climate and dust/heat issues, sector-to-product mapping). Their 6-gram overlap with each other is 36-46%, which is a template with real variation rather than word-swap doorways.

## Findings

### HIGH-1: No named author or reviewer anywhere (Experience / Expertise)
Evidence: `src/data/author.js` has `AUTHOR = null`. The built BlogPosting `author` is the Organization. There are no engineer bios, no credentials and no "reviewed by". Only 2 of 58 posts use first-person or experience phrasing ("our engineers", "we installed"). Zero case studies.
Fix: Put a real engineer (name, title, LinkedIn) into AUTHOR and add a reviewer line. Add 5 to 10 short case studies (site, load, kVA, problem, result, photo). Add real factory and plant photos to about-us and the product pages.

### HIGH-2: Legacy "-in-bangalore" and "-in-india" cluster is cannibalising and templated
Evidence: 30 legacy pages at 1,136-2,269 words. There are 9 Bangalore-variant pages (online-ups-supplier / manufacturer / system / single-phase / three-phase / ups-company / ups-supplier / ups-manufacturer / industrial-ups-supplier / system) plus about 12 "-in-india" variants (best-, ups-manufacturing-company-, ups-system-manufacturer-, ups-supplier-, ups-manufacturer-in-india). They target the same intent with swapped nouns ("supplier / system / company / manufacturer"). Pairs measure 32-36% 6-gram overlap even though most of the text is boilerplate nav. The copy is generic ("designed for different commercial and industrial requirements", "can help organisations maintain...") with no numbers, models or clients, which matches the low-quality AI marker in the Sept 2025 QRG.
Fix: Consolidate each intent into one page and 301 the rest: ups-manufacturer-in-bangalore (absorbing supplier/company/system/online variants), ups-manufacturer-in-india (absorbing best-/supplier-/system-/manufacturing-company-), plus one per distinct product (single-phase, three-phase, data-centre, hospital, EV, stabilizer, battery charger). Keep the pages that are genuinely different (hospitals, data centre, EV) and rewrite them with specs and proof.

### HIGH-3: Unverifiable or inconsistent trust claims
Evidence: Homepage says "Over 1 Lakh installations", "India's most reputed", "40+ years". City pages say "UPS manufacturer since 1978". The CIN in ai.txt (U31200KA1997PTC022448) shows incorporation in 1997. The header phone is (+91) 80-2839 7120, while the body, meta descriptions and ai.txt use 080 2837 1974 / 2837 9401. No client logos with permission, no certificate images and no testimonial text beyond the legacy page.
Fix: Explain 1978 vs 1997 (predecessor firm) on about-us, publish ISO certificate PDFs, and show 6 to 12 named clients or testimonials with a sector and city. State the source for the installation count or drop it. Use one phone number everywhere.

### MEDIUM-1: Legacy pages carry old low-quality titles and descriptions
Evidence: Homepage title is "Online UPS Manufacturer in Bangalore" (no brand, no India scope, but the page claims to be the company homepage). smf.html description is "Need SMF Battery Supplier in Bangalore? Contact E&C Power at 080 2837 1974 for product details. Enquire today!" and renata300 is similar. These are legacy-template CTAs with no content hint, and titles lack kVA ranges or differentiators. Five descriptions are under 70 characters. Three pages (checkup, update, googlee97...) have no H1 (utility pages, so noindex them if they are not already).
Fix: Rewrite the legacy product titles and descriptions to the style of online-ups and stabilizer (range, use case, brand). Retitle the homepage "E&C Power Systems | UPS, Inverter and Stabilizer Manufacturer, Bengaluru".

### MEDIUM-2: City pages are templated and thin on proof
Evidence: 40 location-type pages (28 cities and 9 states plus India hub, each about 960-1,100 words). The `facts: []` array that gates real local proof is derived from sales offices only, and the file itself notes "pages with only an office are thinner". Much of the body is a shared sector block ("CNC machines, robots and PLC-controlled lines stop...") and a map and nearby-city list. Cities served only "from Bengaluru, 1,560 km away" (Jaipur) have no local installations or engineers, so "Supply, installation and AMC in Jaipur" may overclaim.
Fix: Only index cities with a real office or service engineer (check `indexable()` output against the 197 pages: all 40 are currently in the sitemap). Add one local reference (client, installation, response time) per city. Noindex or merge the rest into state hubs.

### MEDIUM-3: Technical wording slips
Evidence: renata300 "Manufactured to EC Directive EN62040": EN 62040 is a standard, not a directive (use "IEC/EN 62040-1"). Stabilizer "Zero waveform distortion" and "No overshoot or hunting" are absolute claims a servo stabilizer cannot meet. The "up to 95% efficiency" figure for a transformer-based online UPS is plausible but should cite the test condition (load percentage).
Fix: Reword these and add a datasheet PDF link for each spec.

### MEDIUM-4: Legacy pages dump the full mega-menu into the main content
Evidence: The extracted text of legacy pages (home, online-ups-supplier-in-bangalore, ups-company-in-bangalore) starts with about 150 words of nav (Career, Employee Login ... Custom Solutions) before the H1, and the crawl word counts include it. Legacy pages have no `<main>` landmark.
Fix: Wrap legacy content in `<main>`, with nav and footer outside it, so extractors and AI parsers see the real content first.

### LOW-1: Blog freshness and dating
Evidence: Posts carry a single `date` (for example 2026-11-18) and no `updated`/`dateModified`, and many fall in a short burst, which looks like a batch publish.
Fix: Add `updated` frontmatter, expose "Last reviewed" on the page, and stagger or backdate honestly only if real.

### LOW-2: Shorter blog posts
Evidence: Posts range from 793 words (ups-maintenance-checklist) to 1,700, so some fall under the 1,500 floor for blog posts. The floor is a coverage guide, not a rule. The shortest posts are well structured, so this is not a defect unless topical gaps show.
Fix: Expand only where a comparison table or worked example is missing.

## Readability and AI citation readiness
Blog prose is plain, short-sentence, B2B-technical English, which is appropriate for the audience (approximate Flesch 45-55). AI citation readiness is about 78/100 for the blog (answer-first intros, FAQs, tables, numbered steps, schema) and about 45/100 for the legacy landing pages (generic prose, no quotable facts).

## Priority order
1. Name an author and add case studies and photos. 2. Consolidate the legacy keyword-variant pages with 301s. 3. Reconcile 1978/1997, phone numbers and the installation count. 4. Rewrite legacy titles and descriptions. 5. Prune city pages to those with real local proof.
