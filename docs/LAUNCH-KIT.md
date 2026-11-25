# Off-site SEO launch kit

Everything below needs the client's (or your) accounts, so it cannot be done from the code. The text is ready to paste. Use exactly the same name, address and phone (NAP) everywhere.

## 0. Before anything: go live

1. Push the repo and deploy on Vercel; point `eandcpower.com` and `www` at it.
2. Spot-check 10 old URLs from `vercel.json` redirects on the live domain (each should 301 to the clean URL).
3. Check `https://www.eandcpower.com/robots.txt`, `/sitemap.xml` and `/llms.txt` load.

## 1. Google Search Console

1. Add a **Domain property** for `eandcpower.com` (DNS TXT verification at the domain registrar).
2. Sitemaps → submit `https://www.eandcpower.com/sitemap.xml` (152 URLs).
3. URL Inspection → Request indexing, in this order: `/`, `/ups-manufacturer-in-india`, `/online-ups`, `/industrial-ups-manufacturer-in-india`, `/ups-price-in-india`, `/stabilizer`, `/solar-solutions`, `/custom-solutions`, the 9 `/ups-supplier-in-{state}` pages, `/blogs`.
4. Weekly for the first month: Pages report (indexed vs "Crawled – currently not indexed"), and Performance by page. If location pages sit in "Crawled – not indexed" after 6–8 weeks, add real local facts to them (installations, customers) before anything else.
5. Also add the site to **Bing Webmaster Tools** (import from Search Console) and submit the same sitemap. Bing feeds ChatGPT search and Copilot.

## 2. Google Business Profile

### Head office (verify first)

| Field | Value |
|---|---|
| Business name | Electronics & Controls Power Systems Pvt. Ltd. (only the legal/signboard name — no keywords) |
| Primary category | Uninterruptible power supply supplier |
| Additional categories | Electrical equipment manufacturer · Battery manufacturer *(only if E&C makes batteries — it supplies them; otherwise use "Battery store")* · Solar energy equipment supplier · Electric vehicle charging station contractor *(only if they install chargers)* |
| Address | 29/A, 2nd Phase, Peenya Industrial Area, Bengaluru, Karnataka 560058 |
| Phone | +91 80 2837 1974 (primary), +91 80 2839 7120 (additional) |
| Website | https://www.eandcpower.com/ |
| Hours | Mon–Sat 9:00 am – 5:30 pm, Sunday closed |
| Service area | India (or list the states served) |
| Founded | 1978 |

**Description (≤ 750 characters):**

> Electronics & Controls Power Systems (E&C) has designed and manufactured power electronics in Peenya, Bengaluru, since 1978. We make online UPS from 1 kVA to 1200 kVA, including modular, rack mount, lithium, MIL grade and IP55 industrial UPS, together with industrial inverters, servo voltage stabilizers, isolation transformers, static transfer switches and float cum boost battery chargers. We also supply SMF, tubular, lithium and Ni-Cd batteries, solar inverters and EV chargers. Our engineers size, install, commission and service every system, with AMC and regional sales offices across India.

**Products** (one per product, photo + link to its page): Online UPS, Modular UPS, Industrial UPS (IP55), Rack mount UPS, Lithium UPS, MIL grade UPS, Industrial inverter, Voltage stabilizer, Isolation transformer, Static transfer switch, FCBC battery charger, Solar hybrid inverter, EV charger.

**Services:** UPS installation, UPS AMC, UPS repair, battery replacement, UPS sizing, custom UPS design, solar system installation, remote UPS monitoring.

**Photos to upload (real ones only):** building front with signboard, reception, production floor, test bay, 5–10 products, team at work. Add 2–3 new photos a month.

**Posts:** one a fortnight, re-using the blog: link each new blog post with its cover image.

### Regional offices

Create a profile **only where the office is staffed and has signage** (Google suspends virtual or unstaffed listings). Same name, the office's own phone if it has one, the address exactly as below, and a link to `https://www.eandcpower.com/contact#sales-offices`:

| Office | Address |
|---|---|
| Chennai | 31/2, 4th Main Road, Gandhi Nagar, Adyar, Chennai 600020 |
| Kochi | 44/1464-B1, 1st Floor, Adimuri Road, South Pipeline Road, Palarivattom, Kochi 682025 |
| Mumbai | 107, Tirupati Udyog, IB Patel Road, Goregaon (E), Mumbai 400063 |
| Kolkata | 5 B, Ground Floor, Charu Avenue, Kolkata 700033 |
| New Delhi | 181, First Floor, Jeevan Nagar, Opposite Maharani Bagh, New Delhi 110014 |
| Indore | AM-32, Bapat Square, Sukhliya, Indore 452010 |
| Jammu | D-59, Sector 1, Durga Nagar Last Line, PO Roop Nagar, Jammu 180013 |

## 3. Reviews

After verification, copy the profile's review link (Profile → "Ask for reviews") and send it to customers after each installation or AMC visit:

> Thank you for choosing E&C Power Systems for your [UPS / stabilizer] at [site]. If you're happy with the system and our team, would you take a minute to share your experience on Google? [review link]  It helps other businesses find a reliable power partner.

- Ask every customer, never only happy ones; never offer anything in return (against Google policy).
- Reply to every review within a week, naming the product or service.
- Put the review link in the email signature of sales and service staff.
- When there are 10+ genuine reviews, consider showing them on the site (with `Review` markup only for reviews collected on the site itself).

## 4. Business listings (citations)

Same NAP as the head office profile on each. Priority order:

1. IndiaMART (paid listing optional; the free catalogue is enough to start)
2. TradeIndia
3. Justdial
4. ExportersIndia
5. Sulekha (B2B)
6. Bing Places (import from Google Business Profile)
7. Apple Business Connect
8. LinkedIn company page (update address, website, "since 1978")
9. Facebook page (same)
10. Industry: ELCINA, IEEMA member directory, local KASSIA / Peenya Industries Association directory, if E&C is a member

## 5. Links from other sites (backlinks)

Realistic sources, in order of value:

- **Suppliers' "where to buy / partners" pages:** battery brands E&C supplies (Amara Raja, Exide, HBL), component makers.
- **Customer case studies:** a short case study on the customer's site or LinkedIn, linking to the product page. Ask 3–5 long-standing customers.
- **Associations** E&C belongs to (member directories usually link out).
- **Trade press:** an article or interview in *Electrical India*, *EPR Magazine*, *Electronics For You* on, say, lithium vs lead-acid UPS batteries (the blog posts are ready material).
- **Tenders and approved vendor lists** where public.
- Avoid paid link packages and directory blasts.

## 6. Client data that would most improve rankings

- A named engineer as blog author/reviewer → set it in `src/data/author.js` (one line), and it appears on all 18 posts and 4 guides with Person schema.
- Photos of the Ni-Cd battery and static transfer switch → add `image:` to those two entries in `src/data/products.js`.
- Per city: installations, customers (with permission), engineers, response time → add to `facts` in `src/data/locations.js`. This is the single biggest lift for the 36 location pages.
- Price ranges for `/ups-price-in-india` → `PRICE` at the top of `src/pages/ups-price-in-india.astro`.
