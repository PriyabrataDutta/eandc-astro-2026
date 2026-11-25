# GEO / AI Search Readiness: eandcpower.com (Astro rebuild)

**GEO score: 58/100**
Citability 15/25, Structure 16/20, Multi-modal 6/15, Authority/brand 8/20, Technical 13/20 (est. 13 after deduction for unverified items; crawler/SSR items are strong).

## What works
- robots.txt (dist): explicitly allows OAI-SearchBot, ChatGPT-User, GPTBot, Claude-SearchBot, Claude-User, ClaudeBot, PerplexityBot, Perplexity-User, Google-Extended, Applebot, Bingbot; sitemap declared. No blocks. (CCBot, anthropic-ai, cohere-ai not mentioned -> default allow via `*`.)
- Static HTML (SSR/SSG): content is in raw HTML, no JS dependence.
- llms.txt: present in dist, rich (company, CIN, address, phone, ~80 URLs with one-line descriptions, 58 blog links). All listed URLs resolve to dist files except `/contact#sales-offices` (anchor only; verify the id exists). ai.txt present.
- Schema on home: Organization, LocalBusiness, FAQPage, ImageObject. Org sameAs = LinkedIn, Facebook, Twitter.
- 58 blog posts (~66k words, ~1.1k words avg), each with frontmatter FAQ (FAQPage), tables, question-style H2s (57 question headings), definitions and numbers (e.g. EV AC/DC table). Good extractable answer blocks.
- Consistent legal name in schema and llms.txt.

## Findings

### HIGH
1. **No author / no E-E-A-T person.** `src/data/author.js` exports `AUTHOR = null`, so every Article falls back to Organization as author. No bylines, reviewer, or engineer credentials. For technical sizing/safety advice, AI engines weigh named experts. Fix: add a named engineer (name, title, years, LinkedIn URL) and show "Written/reviewed by" on posts.
2. **Near-zero third-party entity footprint (verified only partially).** Live site links only LinkedIn, Facebook, Twitter; **no YouTube channel** (the "Videos" link is an internal anchor). No Wikipedia/Wikidata entry found or referenced; no Reddit/Quora presence evidence. (Web search tool was unavailable and DuckDuckGo was bot-blocked, so directory/IndiaMART/Reddit counts are unconfirmed: manually check.) YouTube mentions are the strongest AI-citation correlate (~0.74). Fix: create YouTube channel with product demos and factory tour, add to sameAs; claim IndiaMART, TradeIndia, Justdial, Google Business Profile, Crunchbase; create Wikidata item (company, CIN, founding, HQ, website); post genuine answers on Reddit r/india / r/electrical / r/Bangalore.
3. **Freshness signals are flat and fabricated-looking.** All 58 posts: datePublished = dateModified = 2026-11-17/18 (52 on one day). Mass-identical dates look auto-generated and give no update history; schema.js defaults date to `2026-11-17`. Live home footer shows "© 2022". Fix: real publish dates, genuine dateModified on edits, visible "Last updated" on pages, current-year footer.

### MEDIUM
4. **Entity name inconsistency.** Live site uses six variants: "Electronics & Controls Power Systems pvt ltd", "...Private Limited", "Electronics & Controls", "E&C Power", "E&C", "eandcpower". Schema name is the long legal name, brand people search is "E&C Power Systems". Fix: set Organization `name` = "E&C Power Systems", `legalName` = "Electronics & Controls Power Systems Private Limited", `alternateName` = ["E&C", "eandcpower", "EandC Power"]; use consistently in H1/titles.
5. **Unsupported / inconsistent claims reduce trust.** "Over 40 years" and llms.txt "since 1978" vs CIN incorporated 1997; "1 Lakh installations" with no source. AI models cross-check. Fix: explain lineage (predecessor firm 1978, company 1997) and cite evidence; add named customers/case studies with outcomes (live site has only 2 testimonials).
6. **Few external citations in posts.** Only ~4 posts reference a standard/authority (IEC/BIS/IS). Add source-attributed statistics and links to standards (IEC 62040, IS 16242, CEA/BEE, BIS) to raise passage trustworthiness.
7. **Thin multi-modal content.** Blog images are single hero JPGs; no video, no diagrams with alt-described specs, no YouTube embeds, no downloadable spec PDFs with HTML summaries. Fix: embed video per key product, add spec comparison tables/diagrams.
8. **Location pages are templated** ("Online UPS Manufacturer in Bangalore", "Best UPS Manufacturer in India", ~25 near-duplicate keyword pages). "Best ... in India" self-claim without third-party proof is discounted by AI and risks doorway classification. Fix: consolidate or differentiate with unique data (case studies, installed sites, certifications, dispatch lead times).

### LOW
9. Passage length: posts have good structure but many paragraphs are 40-90 words; the 134-167-word self-contained block under each H2 (direct answer in first 40-60 words) is not systematic. Rewrite top 10 posts with a 2-sentence answer lead then a 150-word block.
10. llms.txt: no `llms-full.txt`; contains CIN/phone but no certifications (ISO, CE, BIS) or pricing guidance summary; add "Key facts" list (kVA ranges, manufacturing site, warranty, service cities). ai.txt is not a recognised standard (harmless). No RSL licensing file (optional).
11. Missing `Product` schema with specs (kVA range, input/output voltage) on product pages; no `speakable`/`dateModified` on product pages; no `Review`/`AggregateRating` backing.
12. Live site uses `www` and legacy `.html` paths; confirm 301s from old URLs after deploy so llms.txt URLs and existing citations survive.

## AI crawler access
| Crawler | Status |
|---|---|
| GPTBot, OAI-SearchBot, ChatGPT-User | Allowed |
| ClaudeBot, Claude-SearchBot, Claude-User | Allowed |
| PerplexityBot, Perplexity-User | Allowed |
| Google-Extended, Googlebot, Bingbot, Applebot | Allowed |
| CCBot, anthropic-ai, cohere-ai | Not listed (allowed by `*`) |

llms.txt: present, well formed. RSL: absent.

## Brand mention analysis (live site + limited verification)
- LinkedIn: company page linked (unverified follower count). Facebook, Twitter: linked.
- YouTube: none linked. Wikipedia/Wikidata: none found. Reddit: no evidence. Directories (IndiaMART etc.): not verified.

## Platform scores (estimated)
- Google AI Overviews: 62 (strong SSR/FAQ schema; weak authorship, freshness)
- ChatGPT: 48 (needs third-party mentions; Bing index helps)
- Perplexity: 58 (crawl allowed, structured Q&A; few citations/stats)
- Bing Copilot: 60

## Why it will not win "best UPS manufacturer in Bangalore" / "industrial UPS manufacturer India"
AI answers for these queries draw on listicles, directories, Reddit/YouTube and competitor brand pages (Luminous, Numeric/Eaton, Vertiv, Delta, APC). E&C has self-published claims only, no independent corroboration, no named experts, uniform dates, and no video. Content structure is ahead of the entity authority.

## Top 5 changes (impact / effort)
1. Add named author and reviewer with credentials and sameAs (High / 1 day).
2. Launch YouTube channel and fill directory/Wikidata/Google Business profiles; add to sameAs (High / 1-2 weeks).
3. Real publish/modified dates, visible "Last updated", fix 2022 footer (Med-High / 0.5 day).
4. Normalise brand name and reconcile 1978/1997/"40 years" claims; set legalName/alternateName (Med / 0.5 day).
5. Add cited statistics and standards references plus named case studies to top 10 posts and money pages; consolidate templated city/keyword pages (Med-High / 1-2 weeks).
