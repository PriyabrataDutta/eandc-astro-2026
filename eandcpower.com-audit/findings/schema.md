# Structured Data Audit - eandcpower.com (Astro rebuild)

Score: 68/100

Sampled dist/: index, contact, about-us, accenta + agm-gel (Product), online-ups (Service), blogs/how-to-extend-ups-battery-life, ups-manufacturer-in-chennai and -bangalore (location), online-ups-supplier-in-bangalore + best-ups-manufacturer-in-india (legacy landing). Source: src/lib/legacy.js, src/lib/schema.js, src/data/author.js, src/pages/[loc].astro.

## What works
- All JSON-LD parses; @context is https://schema.org; URLs absolute; dates ISO 8601.
- Single Organization @id (`https://www.eandcpower.com/#organization`) is referenced by @id/ORG_REF in Service, Product (manufacturer), BlogPosting (author/publisher), WebSite.publisher, AboutPage/ContactPage. The legacy-blob walker in legacy.js forces name and @id onto old hand-written Organization nodes.
- BreadcrumbList on 192/197 pages, correct positions, absolute item URLs.
- Contact/About/Home use graph-style linking (WebSite, AboutPage/ContactPage -> about/mainEntity -> Organization).
- No deprecated types (HowTo, SpecialAnnouncement). No fake aggregateRating/review found (grep for ratingValue: none).
- BlogPosting has headline, image, dates, author, publisher+logo.

## Findings

### 1. HIGH - Organization @id defined many times with conflicting facts
Same @id `/#organization` is declared with different properties across pages and even within one page:
- contact.html has TWO Organization nodes with the same @id: the page graph (telephone array, CIN, one contactPoint, no geo/hours) and the injected full ORG (foundingDate, geo, hours, 3 contactPoints). Google/Bing merge or pick arbitrarily.
- Legacy landing pages (online-ups-supplier-in-bangalore, best-ups-manufacturer-in-india, ~31 pages) carry an old blob: telephone `+91-80-28397120`, `url` without trailing slash, `logo` as string, alternateName "E&C Power Systems"; other pages say "E&C Power", "Electronics & Controls (E&C)". Home has no alternateName.
- Telephone: ORG says main `+91-80-2837-1974`; home/about list [1974, 9401]; legacy blobs 28397120 (which ORG labels as sales).
Fix: define the full Organization once (the ORG const in legacy.js) and emit it only on home (+ contact/about as @graph member). Everywhere else reference `{"@id": ".../#organization"}` only. Delete legacy hand-written Organization blobs rather than patching them (walker in legacy.js can drop nodes of @type Organization that are not on home). Pick one alternateName.

### 2. HIGH - foundingDate 1978 vs CIN U31200KA1997PTC022448 vs rendered copy
about-us text says founded 1978 as a proprietary firm and later converted to a Private Limited (consistent with CIN year 1997), so 1978 is defensible, but the legal entity named in Organization.name was incorporated 1997. foundingDate appears only in ORG (11 pages). Also emitted on contact; not on about/home (inconsistent). Confirm with client; keep 1978 only if the entity claim is intended, otherwise use 1997 and mention 1978 in description. CIN in `identifier` is fine (public registry data) but confirm it is correct before launch.

### 3. HIGH - LocalBusiness correctness
- ORG typed `["Organization","LocalBusiness"]` on same @id, while home and about also emit a separate `#localbusiness` node (with parentOrganization) with only address/phone/hasMap - no geo, hours, image is a logo. Two overlapping business entities for one premises. Choose one: keep the dual-typed `#organization` node (has geo, hours) and drop `#localbusiness`; or make `#localbusiness` the full node. Recommend a more specific subtype (e.g. ElectronicsStore is wrong; for a manufacturer, plain Organization + `Corporation` or LocalBusiness is acceptable). No `priceRange` is needed for Google (optional).
- openingHoursSpecification Mon-Sat 09:00-17:30: matches contact page copy? Contact HTML grep found no hours text; verify with client (unverifiable from page).
- geo 13.02991, 77.51221: plausible for Peenya; verify against GBP.
- `department` array of 7 LocalBusiness nodes: no telephone, no @id, no `parentOrganization`; a LocalBusiness without telephone/image gets no rich result and addresses lack addressRegion. The in-code comment says "pending confirmation" - unverified addresses in schema is a risk. Either confirm and add addressRegion/telephone/@id, or remove from schema until confirmed. Note: they only list the sales office, and offices are not claimed as GBP listings - risk of looking like fake local presence if not real offices.
- sameAs: LinkedIn/Facebook/twitter.com valid-looking; verify each resolves (twitter.com -> x.com). Not on home/about Organization nodes (home has no sameAs): add the same list there since that is the canonical node.
- hasMap: `maps.google.com/maps?cid=...` on ORG vs search URL on home. Use one (the cid link).

### 4. MEDIUM - Product schema is thin but safe
Evidence: accenta, agm-gel: name, description, image, category, brand, manufacturer only. No offers, review, aggregateRating, sku. Google: Product rich results (merchant listing/snippets) require offers or review/aggregateRating, so these 35 pages will show "no rich result" in Rich Results Test but are not a policy violation. Do NOT add fabricated rating/offers. For a quote-only B2B product this is acceptable; options:
- Keep as is (valid, informational; Google just uses it for understanding), or
- Add `offers` only if a real price/`priceSpecification` exists; otherwise omit. Do not add price 0.
Additional: brand name "E&C Power Systems" vs Organization name differs - set brand to `{"@type":"Brand","name":"E&C Power Systems"}` consistently (ok) and add `url` (page URL), `@id` (`/accenta#product`) and `mainEntityOfPage`. `image` is the first body image, falling back to logo - check that each Product image is a real product photo (logo fallback is poor). Description uses the meta description with a phone number ("Call E&C Power at 080 2837 1974") - remove phone text from schema description. Add `isRelatedTo`/`additionalProperty` for kVA ranges if desired.

### 5. MEDIUM - FAQPage on 149/197 pages
Google retired FAQ rich results for all sites on 7 May 2026, so there is no SERP value from the markup (the gov/health restriction of 2023 is superseded). Not an error; Info priority. Any AI/GEO benefit is unconfirmed. Check that each FAQ is visible on the page (it was on the pages sampled: online-ups, blog), which is the only real requirement. Low-value cost: ~149 pages of extra JSON. Keep only where FAQ text is visible; no new additions. FAQPage on about-us has 4 items and is lumped in the graph - fine. frequently-asked-questions.html has only 1 "Question" string (probably hand-written, check). Homepage FAQPage has `@id .../#faq` but no isPartOf/mainEntityOfPage - trivial.

### 6. MEDIUM - Blog author is the company; no Person
src/data/author.js sets AUTHOR = null so every BlogPosting has Organization as author. Valid (Google accepts Organization author) but weaker E-E-A-T. Also: datePublished = dateModified = 2026-11-17/18 on all posts (default param in article()) with image from `/image/blog/<slug>.jpg`. Identical bulk dates for 58 posts look auto-generated; use real publish dates and only bump dateModified on real edits. `headline` sample is under 110 chars (OK). `mainEntityOfPage` is a bare URL string; use `{"@type":"WebPage","@id":url}`. Also `article()` emits type `Article` while blog pages emit `BlogPosting` (4 Article pages) - harmless. Confirm blog images exist and are >=1200 px wide (not verified).

### 7. MEDIUM - Service nodes on location/landing pages
Service has name, description, url, serviceType, provider @id, areaServed (City/State). Valid and linked. Gaps: no `@id`, no `hasOfferCatalog`; Service has no Google rich result, fine. Concern: 46 city pages claim "UPS Manufacturer in Chennai" etc. Schema says provider is Bengaluru company with areaServed city - truthful as written. Do not add city-level LocalBusiness with fake addresses. Check that the Chennai sales office (Adyar) is confirmed before building any location page on it. ups-manufacturer-in-bangalore.html emits Organization but no Service - inconsistent with other city pages.

### 8. LOW - WebSite node on only 8 pages; no SearchAction
Homepage has no WebSite node (home graph: Organization, LocalBusiness, FAQPage). WebSite with name/alternateName belongs on the homepage (site-name signal). Do not add SearchAction (sitelinks search box removed in 2024) unless there is a site search. Fix: add WebSite `@id #website` to home graph, give name "E&C Power Systems" and alternateName "Electronics & Controls Power Systems Private Limited".

### 9. LOW - Small valid-but-untidy items
- Only 3 pages with LocalBusiness top-level (home/about/contact) - correct scope.
- WebPage only on 6 pages; adding it everywhere is not necessary.
- Legacy Organization blobs lack @context nesting issue? No - they have it, fine.
- contact page `ContactPage.keywords` is non-Google-relevant noise; fine.
- ContactPoint on ORG: contactType "customer service" for 2837-9401; verify, and add `availableLanguage`.
- No `Blog` publisher/`blogPost` linking on /blogs (1 Blog node) - fine.

## Missing opportunities
1. WebSite on home (see 8).
2. Product `url`, `@id`, `mainEntityOfPage`, `sku`/`mpn` if model numbers exist; `additionalProperty` for capacity (kVA), phase, topology. Add `offers` only with real prices.
3. Person author with sameAs (LinkedIn) once AUTHOR is filled; it is the biggest E-E-A-T lever.
4. VideoObject if product videos exist on pages (YouTube embeds); check.
5. `ItemList` of products on category hub pages (not a rich result, but helps entity understanding).
6. Review/AggregateRating only from real, on-page third-party-verifiable reviews. None currently - good; do not invent.
7. Skip: HowTo, SpecialAnnouncement, new FAQPage.

## Corrected snippets

Home graph (single source of truth; reference by @id elsewhere):
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": "https://www.eandcpower.com/#organization",
      "name": "Electronics & Controls Power Systems Private Limited",
      "alternateName": "E&C Power Systems",
      "url": "https://www.eandcpower.com/",
      "logo": { "@type": "ImageObject", "url": "https://www.eandcpower.com/image/logo2.png" },
      "image": "https://www.eandcpower.com/image/logo2.png",
      "telephone": "+91-80-2837-1974",
      "email": "sales@eandcpower.com",
      "address": { "@type": "PostalAddress", "streetAddress": "29/A, 2nd Phase, Peenya Industrial Area", "addressLocality": "Bengaluru", "addressRegion": "Karnataka", "postalCode": "560058", "addressCountry": "IN" },
      "geo": { "@type": "GeoCoordinates", "latitude": 13.02991, "longitude": 77.51221 },
      "sameAs": ["https://www.linkedin.com/company/electronics-controls-power-systems-pvt-ltd/", "https://www.facebook.com/eandcpower", "https://x.com/eandcpower"]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.eandcpower.com/#website",
      "url": "https://www.eandcpower.com/",
      "name": "E&C Power Systems",
      "alternateName": "Electronics & Controls Power Systems Private Limited",
      "publisher": { "@id": "https://www.eandcpower.com/#organization" },
      "inLanguage": "en-IN"
    }
  ]
}
```
(Keep hours, contactPoints, department in the same node once confirmed; drop `#localbusiness`.)

Product (accenta):
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "https://www.eandcpower.com/accenta#product",
  "name": "Accenta Online UPS",
  "description": "Online UPS from 1 to 10 kVA, made in Bengaluru.",
  "url": "https://www.eandcpower.com/accenta",
  "image": "https://www.eandcpower.com/image/product/accenta.jpg",
  "category": "Online UPS",
  "brand": { "@type": "Brand", "name": "E&C Power Systems" },
  "manufacturer": { "@id": "https://www.eandcpower.com/#organization" }
}
```

BlogPosting author/main entity:
```json
"author": { "@type": "Person", "name": "<real engineer>", "jobTitle": "<title>", "url": "https://www.linkedin.com/in/<id>", "worksFor": { "@id": "https://www.eandcpower.com/#organization" } },
"mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.eandcpower.com/blogs/<slug>" }
```

## Priority order
1 Dedupe Organization (finding 1) -> 2 Confirm founding year, hours, sales-office addresses (2, 3) -> 3 Home WebSite (8) -> 4 Real blog dates and Person author (6) -> 5 Product url/@id, remove phone from description (4) -> 6 Leave FAQ as is (Info).
