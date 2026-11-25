# Local SEO findings: E&C Power Systems (built dist/, not yet deployed)

**Local SEO Score: 58/100**  | Business type: hybrid (HQ/plant with visible address + 8 regional sales offices + service-area AMC) | Vertical: industrial manufacturer (B2B power electronics)

| Dimension | Weight | Score | Notes |
|---|---|---|---|
| GBP signals | 25 | 13 | Maps embed + hasMap cid on contact; no review widget/GBP posts evidence; GBP verification status unknown |
| Reviews and reputation | 20 | 6 | No aggregateRating, no on-site reviews, strategy only in LAUNCH-KIT |
| Local on-page | 20 | 13 | 24 city/state pages + real office addresses; thin local facts; 18 Bangalore near-duplicates |
| NAP and citations | 15 | 8 | Address/email consistent; 3 different phone numbers; citations not verified/not built |
| Local schema | 10 | 6 | HQ LocalBusiness has geo/hours; city pages have no LocalBusiness; no telephone on branch nodes |
| Local links/authority | 10 | 5 | No evidence of local directory links |

Limitations: WebSearch unavailable, so live GBP, JustDial/IndiaMART/Sulekha/TradeIndia listings, review counts and local-pack rank were NOT checked. Proximity (about 55% of ranking variance) is outside the site's control. The live site returns HTTP 200 but dist/ was audited, not live.

## What works
- Address identical on every page and schema: 29/A, 2nd Phase, Peenya Industrial Area, Bengaluru 560058 (54 schema hits, 0 variants). Email is effectively single (sales@eandcpower.com, 1278 hits).
- Contact page has a Google Maps embed tied to the business name and a `hasMap` cid link; HQ node typed `["Organization","LocalBusiness"]` with 5-decimal geo (13.02991, 77.51221) and openingHoursSpecification.
- 8 regional offices in schema with full street address, postal code, areaServed; per-office "Directions" links (dist/contact.html, src/data/offices.js).
- Location pages are gated: indexable only if a real office/service fact exists (`indexable = facts.length > 0`). 24 live pages, about 1,700 words each, FAQPage + Service schema.
- sameAs to LinkedIn, Facebook, Twitter; Google Search Console verification file present.

## Findings

### HIGH
1. **Phone NAP inconsistent (3 numbers, HQ ambiguous).** Visible/tel: uses 080 2837 1974 (about 450 hits) and 080 2839 7120 (+91-80-28397120, about 320); schema uses 2837-1974 on Org, 2839-7120 on others, 2837-9401 on contact; also 70220 06375 and 76297 10761 appear. Fix: pick one primary number, identical formatting in header, footer, schema, GBP and every directory; list others as `contactPoint` with department.
2. **Bangalore cannibalisation: 18 near-identical pages** (ups-manufacturer / supplier / company / online-ups-manufacturer / -supplier / -system / industrial-ups-system / for-hospitals / for-data-centre etc.), each about 1,300-1,400 words, self-canonical, all indexed, all in sitemap, all targeting "UPS ... in Bangalore". Classic doorway/keyword-variant pattern. Fix: keep 1 hub (ups-manufacturer-in-bangalore) plus genuinely distinct vertical pages (hospitals, data-centre, EV charging) with unique content; 301 the supplier/company/system synonyms to the hub; remove from sitemap.
3. **Location pages are thin on unique local proof.** `facts` are only auto-generated "office at X / handled by Y office" lines; no installations, local customers, named engineers, response times, or distance from plant. Swap test (replace city name) mostly passes as templated text with a local address block. Cities with no own office (about half) just say "handled by Chennai office". Fix: add 3+ real facts per page (client sites, engineer count/base, SLA hours, drive distance from the servicing office) in `facts`/`faq`; keep noindex for pages that cannot.
4. **No reviews/rating anywhere.** 0 aggregateRating, no review widget, no testimonials in dist. Whitespark/Sterling Sky: velocity matters (18-day rule). Fix: after GBP verification, run the LAUNCH-KIT review-link flow per AMC/installation visit; target 10+ reviews/office; display only on-site-collected reviews with Review markup.
5. **GBP / citations unverified and branch GBPs not planned as separate listings.** 7 branch offices each need their own GBP (staffed, address-verified; skip any virtual/unstaffed). Primary category for HQ: "Uninterruptible power supply manufacturer" (not generic "Electronics company"); secondary: "Voltage stabilizer supplier", "Battery charger supplier". Sourced offices in offices.js are marked "client still has to confirm".

### MEDIUM
6. **Branch schema weak:** each office LocalBusiness lacks telephone, geo, openingHours, url/@id; no LocalBusiness on city pages (only Service + City). Use subtype `Store`/`ProfessionalService` per office with @id, link city pages to the office node via `areaServed`/`location`. Chennai/Kochi etc. "areaServed" is a string, use Place/State objects.
7. **Single Maps embed (HQ only).** Branch offices only get "Directions" search links (maps/search?query=), not cid/place links. Replace with GBP cid links once listings exist; embed the relevant office map on its city page.
8. **Embed uses old pb token (2022, `4v1669988288450`)** and is keyed to name search; verify it resolves to the claimed GBP (cid 24476297107613509) after redeploy.
9. **Jammu office is in offices.js with no service city (`service: []`)** and Noida/Gurgaon/Ludhiana listed under "also" assumed (code comment: "client to confirm"). Do not publish unconfirmed coverage.
10. **Citations:** IndiaMART, TradeIndia, JustDial, Sulekha, Bing Places only planned (docs/LAUNCH-KIT.md). Not verified live. Keep exact legal name "Electronics & Controls Power Systems Private Limited" and the single phone; "E&C Power Systems" as brand only. Mixed use of names across schema ("E&C Power Systems, Chennai sales office") should match the GBP names.

### LOW
11. `sales@eandcpower.com.` appears with trailing period (4 hits, text only); stray `vinayak@appaddindia.com` (agency) in HTML: remove.
12. Many pages carry `LocalBusiness` x80 vs Organization x244: confirm the HQ node uses a stable @id so it merges rather than duplicating entities.

## Top actions
1. Standardise one phone across site, schema, GBP. 2. Consolidate Bangalore pages (301 + sitemap). 3. Add real local facts to city pages or noindex them. 4. Verify HQ + staffed branch GBPs, correct categories. 5. Start review requests, then add aggregateRating only from on-site reviews. 6. Build Tier-1 citations with identical NAP. 7. Enrich branch schema. 8. Replace search-links with cid links/embeds.
