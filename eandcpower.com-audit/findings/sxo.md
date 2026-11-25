# SXO Findings: eandcpower.com Astro rebuild (dist/)

**SXO Gap Score: 58/100** (separate from SEO Health Score)

Method: WebSearch of 4 money queries (India), plus parse of built dist pages. Limits: WebSearch returns result lists, not live ranking positions, SERP features (PAA, AI Overview, snippets) or Google India personalization. Rankings of E&C itself were not observed. Page not deployed, so no CWV, no real-user data. Persona scores are heuristic.

## SERP reality (what Google rewards)
| Query | What ranks | Dominant type |
|---|---|---|
| online ups manufacturer in bangalore | IndiaMART city/category pages (/city/bengaluru/ups.html, industrial-online-ups), IndiaMART seller mini-sites, TradeIndia product listings (Magnetix, Sterling, Techser, Power-one, Alpha, Powertron) | Marketplace category/listing (~90%) |
| industrial ups manufacturer in india | TradeIndia manufacturer directories, IndiaMART category and brand mini-sites (Riello, Socomec, Powertek), one L&T-SuFin blog | Marketplace directory, few brand sites |
| float cum boost charger manufacturer | TradeIndia/IndiaMART/Dial4Trade/ExportersIndia product listings, Made-in-China, DirectIndustry | Marketplace product listing (~95%) |
| isolation transformer manufacturer in bangalore | TradeIndia product listings (~13 of 18), IndiaMART city category | Marketplace listing |
| ups for data centre bangalore (not searched; inferred, unverified) | likely mix of vendor service pages and directories | n/a |

Signal: listings show price/range, capacity, "est. year", employee count, ISO claim, and a one-click "Get Best Price" / call. Few manufacturer sites rank. Opportunity is real (a strong brand page can displace weak listings), but buyers expect directory-style scannability.

## Page-type match
| Keyword | E&C target (dist) | Type | Mismatch |
|---|---|---|---|
| online ups manufacturer in bangalore | online-ups-manufacturer-in-bangalore.html (1.2k words) AND index.html (same keyword in title/H1) | Local landing page / home | MEDIUM: SERP wants category/listing with capacity table; page is prose-led. Plus cannibalization with home |
| industrial ups manufacturer in india | industrial-ups-manufacturer-in-india.html (2k words, Service + FAQPage + Breadcrumb, 14 imgs) | Category/service hub | ALIGNED-ish (best page on site) |
| float cum boost charger manufacturer | industrial-battery-charger-fcbc.html (Product+FAQ, spec table) vs industrial-battery-charger-manufacturer-in-bangalore.html (prose, no Product schema) | Product page | MEDIUM: two pages split the intent; title of the Product page says "Industrial Battery Charger", not "Float cum Boost Charger" |
| isolation transformer manufacturer | isolation.html (Product+FAQ, specs) title "Isolation Transformer Manufacturer in Bangalore" | Product page | ALIGNED on type; weak on Bangalore-only framing and no price/range |
| ups for data centre bangalore | data-centre-ups-solutions-in-bangalore.html (2.3k words) | Solution page | ALIGNED type; no Service/Product schema, 3 images |

## Dimension scoring (target set)
Page type 11/15, Content depth 11/15, UX signals 8/15, Schema 9/15, Media 7/15, Authority 8/10→scaled 9/15, Freshness 3/10 (no visible dates on money pages; blog dates unverified). Total 58.

## What works
- Industrial UPS India page: Service + FAQPage schema, comparison section, FAQ, quote form, 2k words.
- Product pages (isolation, FCBC) have Product + FAQPage + spec tables + "Get a price" form.
- Every audited page has canonical, breadcrumb, quote form (/api/contact), tel: links; contact page has 3 wa.me numbers and per-office LocalBusiness/GeoCoordinates.
- 4 guides + 30+ blog posts support the consideration stage.

## Findings
1. **HIGH: Keyword cannibalization across near-duplicate location/keyword pages.** Home (title/H1 "Online UPS Manufacturer in Bangalore (Peenya)") and online-ups-manufacturer-in-bangalore compete for the same query; plus online-ups-supplier/-system-in-bangalore, industrial-ups-supplier/-system-in-bangalore, best-ups-manufacturer-in-india (each 2.3-2.7k raw HTML words, same template). Fix: home targets brand + "UPS manufacturer" broadly; consolidate supplier/system variants with 301 to the manufacturer page or differentiate (distinct specs, cities, industries); keep one canonical page per intent.
2. **HIGH: Float cum boost intent split and mis-titled.** The Product page (industrial-battery-charger-fcbc) has the schema and specs but title/description omit "float cum boost" and lead with Bangalore; the "-manufacturer-in-bangalore" twin is prose with no Product schema. SERP is 95% product listings. Fix: title "Float Cum Boost Charger (FCBC) Manufacturer | 12-220V DC | E&C"; add rating ranges (voltage/current) table above fold; point twin to it or merge.
3. **HIGH: Conversion path has no WhatsApp or downloadable asset on money pages.** WhatsApp (wa.me) appears only on home and contact; 0 on the five money pages. /catalog page has no actual PDF links (only self-links), and the product pages link to /catalog, not a spec-sheet PDF. B2B buyers (procurement) want a datasheet/brochure + "Get Best Price" parity with IndiaMART. Fix: sticky bar (Call, WhatsApp, Get quote) on all product/landing pages; gated or ungated datasheet PDF per product.
4. **MEDIUM: Top-of-page scannability vs listings.** Listing results show capacity range, phase, input/output, MOQ/lead time at a glance. Bangalore landing pages (online UPS, battery charger, data centre) are prose with 3 images and no spec table/range chips. Fix: add a "Models and ratings" table (kVA, phase, backup, IP rating) and 3 trust chips (40+ yrs, in-house manufacturing, ISO/MIL claims, only if verifiable) in the first screen.
5. **MEDIUM: Schema gaps on landing pages.** Online UPS Bangalore, data-centre and charger-Bangalore pages carry only Organization/Breadcrumb; no Service/Product/FAQ. Home has FAQPage (Google restricts FAQ rich results for most sites, so low value). Fix: Service (areaServed Bangalore) or Product with offers-less description; keep FAQ for AI/LLM extraction only.
6. **MEDIUM: Title/meta quality.** Some metas are phone-led ("Call at 080 2837 1974. Enquire today!") and generic (isolation, FCBC, contact), vs richer ones on industrial-ups ("10-800 kVA"). Fix: add capacity range + differentiators, move phone out of meta description.
7. **LOW: Trust proofs vs listings.** Listings show "est. year / employees / GST". E&C has testimonials and customer logos on home only; money pages lack customer proof or certification badge row. Add 1-2 relevant case logos per page.
8. **LOW: Freshness.** No visible "updated" date on landing pages; blog dates and lastmod should be checked in sitemap. Sitemap/publication dates not verified.
9. **LOW: Unrelated PDFs in /pdf (MGT-7 filings) are public and crawlable; not harmful but off-topic. Keep out of index (robots/noindex) so they do not dilute.

## Persona fit (Relevance/Clarity/Trust/Action, 25 each)
| Persona | Score | Why |
|---|---|---|
| Procurement engineer (needs ratings, datasheet, price) | 14/25 → 56 | Spec tables exist on product pages only; no datasheet PDF, no price band, no lead time |
| Facility manager (needs local service/AMC, fast contact) | 17/25 → 68 | Peenya address, 080 numbers, office list; no AMC/response-time promise on landing pages, no WhatsApp on pages |
| Consultant / EPC / tender (needs standards, drawings, references) | 13/25 → 52 | No standards/compliance table or drawings downloads; references on home only |
Priority order (weakest first): consultant (compliance + drawings), procurement (datasheets, ratings), facility (WhatsApp, AMC).

## Conversion path audit
- Get-a-quote: present on all pages, form fields name/company/email/phone/service/capacity/city/state/message (good: capacity captured). Post-submit "What happens next" present.
- Phone: tel: on all pages (2 lines). OK.
- WhatsApp: home + contact only. Gap.
- Catalog: /catalog exists; no downloadable PDFs verified in built HTML. Gap.
- Form is `POST /api/contact`; confirm the endpoint exists at deploy (static dist cannot verify).

## Recommended next
`/seo schema` for Service/Product blocks, `/seo page` on the three prose landing pages, `/seo local` for GBP (Peenya) since SERP has local intent.
