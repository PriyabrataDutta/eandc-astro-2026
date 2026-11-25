// Title and meta description overrides for legacy pages whose own were duplicated, missing or too long.
// Primary keywords follow the Keyword map tab of the plan doc. Titles <= 60 characters, descriptions ~140-160.
export const meta = {
  // About pages describe the company; the sales keywords forced onto them belong to /get-a-quote and /ups-supplier-in-india.
  'about-us': {
    title: 'About E&C Power Systems | UPS Manufacturer Since 1978',
    description: 'E&C Power Systems has designed and built UPS and power electronics in Bengaluru since 1978, with in-house R&D, two factories and service across India.',
  },
  management: {
    title: 'Management Team | E&C Power Systems',
    description: 'Meet the people who lead E&C Power Systems: Chairperson Sundari Ramachandran, MD Vidya Iyer, CEO Rajaram Ramamoorthy and Director M. S. Sivasankaran.',
  },
  missionandvision: {
    title: 'Mission, Vision & Quality Policy | E&C Power Systems',
    description: 'The mission, vision and quality policy of E&C Power Systems, an ISO 9001 and 14001 accredited UPS and power electronics manufacturer in Bengaluru.',
  },
  // Home keeps its Bangalore target (it ranks for it on the live site) with India alongside, as the live H1 had it; the
  // exact "…in India" term stays with /online-ups and /ups-manufacturer-in-india. Peenya is said once, naturally.
  index: {
    title: 'Online UPS Manufacturer in Bangalore, India | E&C Power',
    description: 'E&C Power Systems manufactures online and industrial UPS, inverters and stabilizers at its Peenya, Bengaluru plant, with sales and service across India.',
  },
  'power-inverter-manufacturer-in-india': {
    description: 'Power inverter manufacturer in India: E&C builds industrial inverters from 3 to 100 kVA and Voltstar home inverters from 600 VA to 5 kVA in Bengaluru.',
  },
  'battery-charger-manufacturer-in-india': {
    description: 'Battery charger manufacturer in India: E&C builds float cum boost (FCBC) industrial chargers at 48, 110 and 220 V DC for Ni-Cd and lead acid batteries.',
  },
  'solar-inverter-manufacturer-in-india': {
    description: 'Solar inverter manufacturer in India: E&C builds grid-tie (2–60 kVA), hybrid (2–30 kVA) and off-grid (1–5 kVA) solar inverters and MPPT charge controllers.',
  },
  'ev-charger-manufacturer-in-india': {
    description: 'EV charger manufacturer in India: E&C AC chargers from 3 to 22 kW and DC fast chargers from 10 to 240 kW, with CCS2, CHAdeMO and GB/T, for fleets and parking.',
  },

  catalog: {
    title: 'Product Catalogs: UPS, Inverters, Batteries | E&C Power',
    description: 'Download E&C Power Systems product catalogs for online UPS, industrial inverters, stabilizers, batteries, solar systems and EV chargers.',
  },
  sitemap: {
    title: 'Sitemap | E&C Power Systems',
    description: 'All pages on the E&C Power Systems website: online UPS, industrial UPS, inverters, stabilizers, batteries, solar, EV chargers, services and locations.',
  },
  'research-and-development': {
    title: 'Research & Development in Power Electronics | E&C Power',
    description: 'E&C Power Systems R&D in Bengaluru designs online UPS, inverters, chargers and power conditioning products in-house, backed by 40+ years in power electronics.',
  },
  'eandcpower-services': {
    title: 'UPS Service, AMC & Repair | Bengaluru & India | E&C Power',
    description: 'UPS installation, commissioning, annual maintenance contracts, battery replacement and breakdown repair from E&C Power Systems, Peenya, Bengaluru.',
  },

  careers: {
    title: 'Careers at E&C Power Systems, Bengaluru',
    description: 'Work at E&C Power Systems in Peenya, Bengaluru: openings in power electronics engineering, manufacturing, sales and service.',
  },
  'frequently-asked-questions': {
    title: 'UPS FAQs: Online UPS, Batteries & Service | E&C Power',
    description: 'Answers to common questions about online UPS, line interactive UPS, UPS batteries, backup time, installation and service from E&C Power Systems.',
  },
  annualreturn: {
    title: 'Annual Return (Form MGT-7) | E&C Power Systems',
    description: 'Annual return (Form MGT-7) of Electronics & Controls Power Systems Pvt. Ltd., Bengaluru.',
  },
  'eandcpower-infrastructure': {
    title: 'UPS Manufacturing Infrastructure in Peenya | E&C Power',
    description: 'E&C Power Systems manufacturing facility in Peenya Industrial Area, Bengaluru, where online UPS, inverters and power conditioning products are built and tested.',
  },
  machinery: {
    title: 'Machinery & Utilities at Our UPS Plant | E&C Power Systems',
    description: 'Production machinery and utilities at the E&C Power Systems plant in Peenya, Bengaluru, used to build and test UPS and power electronics products.',
  },
  // Description only: the page's own was over 160 characters and got cut off in search results.
  'online-ups-supplier-in-bangalore': { description: 'Online UPS supplier in Bangalore: E&C Power supplies double conversion online UPS systems for critical business and industrial loads, with local service.' },
  'industrial-ups-supplier-in-bangalore': { description: 'Industrial UPS supplier in Bangalore: E&C Power supplies rugged industrial UPS and power backup for factories, process plants and commercial sites.' },
  'industrial-battery-charger-manufacturer-in-bangalore': { description: 'Industrial battery charger manufacturer in Bangalore: E&C builds float-cum-boost chargers for industrial batteries, backed by 40+ years in power electronics.' },
  'ups-for-manufacturing-industries-in-bangalore': { description: 'UPS for manufacturing industries in Bangalore: E&C Power industrial UPS keeps machinery, production lines and controls running through power cuts.' },
  'data-centre-ups-solutions-in-bangalore': { description: 'Data centre UPS in Bangalore from E&C Power: modular, scalable online UPS that keeps servers and critical IT infrastructure running without interruption.' },
  'best-ups-manufacturer-in-india': { description: 'Looking for the best UPS manufacturer in India? E&C Power Systems makes online and industrial UPS from 1 to 1200 kVA, with 40+ years of expertise.' },
  'voltage-stabilizer-manufacturer-in-india': { description: 'Voltage stabilizer manufacturer in India: E&C Power makes servo, oil cooled and air cooled stabilizers, backed by 40+ years in power electronics.' },
  'automatic-voltage-stabilizer-manufacturer-in-india': { description: 'Automatic voltage stabilizer manufacturer in India: E&C makes servo stabilizers for industrial, commercial and critical loads, up to 1000 kVA.' },
  update: { title: 'Update | E&C Power Systems', description: '' },
  'comming-soon': { title: 'Coming Soon | E&C Power Systems', description: '' },
  checkup: { title: 'Annual Return Document | E&C Power Systems', description: '' },
};

// Client logos and recurring images that had no alt text.
export const alts = {
  'logo2.png': 'E&C Power Systems logo',
  'logo4.png': 'E&C Power Systems logo',
  'banner-blog.jpg': 'E&C Power Systems online UPS range',
  'boi.png': 'Bank of India',
  'union.png': 'Union Bank of India',
  'sbi.png': 'State Bank of India',
  'lic.png': 'LIC',
  'karur.png': 'Karur Vysya Bank',
  'isro.png': 'ISRO',
  'indian-railways.png': 'Indian Railways',
  'indian-bank-logo.jpg': 'Indian Bank',
  'IDBI-Bank.jpg': 'IDBI Bank',
  'hdfc.jpg': 'HDFC Bank',
  'hal.png': 'HAL',
  'dena.jpg': 'Dena Bank',
  'corpo.jpg': 'Corporation Bank',
  'canara.jpg': 'Canara Bank',
  'bsf.png': 'BSF',
  'bel.png': 'BEL',
};

// Pages whose main heading isn't an <h1> (or which have two). The theme's size classes and the original
// margins keep the look identical: h1 gets margin 0 from the theme, h2 gets 0 0 18px.
export const headingFixes = {
  // About pages: company headings instead of repeated sales keywords; descriptive image alts.
  'about-us': [
    ['<h1 class="heading-section">Power Electronics Manufacturer in Bangalore Peenya</h1>', '<h1 class="heading-section">About E&amp;C Power Systems</h1>'],
    ['margin-bottom: 25px;">Power Electronics Manufacturer in India</h2>', 'margin-bottom: 25px;">Power electronics, designed and built in Peenya, Bengaluru, since 1978</h2>'],
    // Banner first, then the photo: each replace() changes the first match only.
    ['alt="Power Electronics Manufacturer in Peenya Industrial Area"', 'alt="E&amp;C Power Systems"'],
    ['alt="Power Electronics Manufacturer in Peenya Industrial Area"', 'alt="E&amp;C Power Systems office and factory"'],
    ['letter-spacing: 0.2px;">Power Electronics Manufacturer in Bangalore</h2>', 'letter-spacing: 0.2px;">Talk to our engineers</h2>'],
  ],
  management: [
    ['<h1>Industrial UPS quotation in Peenya Bangalore</h1>', '<h1>Our Management Team</h1>'],
    ['alt="Industrial UPS quotation in Bangalore India"', 'alt="E&amp;C Power Systems"'],
    ['font-weight: 600;">Industrial UPS quotation in Bangalore India</h2>', 'font-weight: 600;">Leading E&amp;C since it was founded in 1978</h2>'],
    ['letter-spacing: 0.2px;">Industrial UPS quotation in Peenya Bangalore</h2>', 'letter-spacing: 0.2px;">Talk to our team</h2>'],
    ['>Request an Industrial UPS Quotation from E&amp;C Power Across India</h4>', '>Request a quotation from E&amp;C Power</h4>'],
  ],
  missionandvision: [
    ['<h1>Bulk UPS supplier in Bangalore</h1>', '<h1>Mission and Vision</h1>'],
    ['alt="Bulk UPS supplier in Bangalore"', 'alt="E&amp;C Power Systems"'],
    ['font-weight: 600;">Bulk UPS supplier in Peenya Bangalore</h2>', 'font-weight: 600;">What E&amp;C works towards, and how we assure quality</h2>'],
    ['letter-spacing: 0.2px;">Bulk UPS supplier in Bangalore</h2>', 'letter-spacing: 0.2px;">Talk to our team</h2>'],
    ['>Connect with Leading Bulk UPS Supplier Across India</h4>', '>Sales and service across India</h4>'],
  ],
  // Home: no "Bangalore Peenya" keyword string, no H2 competing with /online-ups, no repeated title, descriptive alt.
  index: [
    ['>Online UPS Manufacturer in Bangalore Peenya</h1>', '>Online UPS Manufacturer in Bangalore, India</h1>'],
    ['margin-top: 10px;">Online UPS Manufacturer in India</h2>', 'margin-top: 10px;">Made in Peenya, Bengaluru. Supplied and serviced across India</h2>'],
    ['alt="Online UPS Manufacturer in Peenya Industrial Area"', 'alt="E&amp;C online UPS range"'],
    ['letter-spacing: 0.2px;">Online UPS Manufacturer in Bangalore</h2>', 'letter-spacing: 0.2px;">Talk to our UPS engineers</h2>'],
  ],
  // Not a heading: the Bengaluru city page's breadcrumb now links up to the India and Karnataka hubs.
  'ups-manufacturer-in-bangalore': [['<li><a href="/sitemap">Solutions</a></li>', '<li><a href="/ups-manufacturer-in-india">UPS Manufacturer in India</a></li>\n\t\t\t\t<li><a href="/ups-supplier-in-karnataka">UPS Supplier in Karnataka</a></li>']],
  'agm-gel': [['<h2 class="font-w-300">AGM / GEL Batteries </h2>', '<h1 class="font-w-300 h2" style="margin:0 0 18px; font-family:&quot;Poppins&quot;, sans-serif; line-height:1.25;">AGM / GEL Batteries </h1>']],
  'intelligent-transfer-switch': [['<h2 class="font-w-300">Intelligent Transfer Switch</h2>', '<h1 class="font-w-300 h2" style="margin:0 0 18px; font-family:&quot;Poppins&quot;, sans-serif; line-height:1.25;">Intelligent Transfer Switch</h1>']],
  careers: [['<h2 class="font-w-300">Careers</h2>', '<h1 class="font-w-300 h2" style="margin:0 0 18px; font-family:&quot;Poppins&quot;, sans-serif; line-height:1.25;">Careers</h1>']],
  catalog: [['<h1>Keep in touch!</h1>', '<h2 class="h1" style="margin:0;">Keep in touch!</h2>']],
};

// Product pages that get Product structured data (name and category for the schema).
const P = (name, category) => ({ name, category });
export const productPages = {
  'online-ups': P('Online UPS', 'Online UPS'),
  accenta: P('Accenta Online UPS (1–10 kVA)', 'Online UPS'),
  renata300: P('Renata-300 Online UPS (10–800 kVA)', 'Online UPS'),
  renatacyclone: P('Renata-DS Online UPS (10–300 kVA)', 'Online UPS'),
  renatamodular: P('Renata Modular UPS (10–1200 kVA)', 'Online UPS'),
  'rack-mount': P('Accenta Rack Mount UPS', 'Online UPS'),
  'mil-grade': P('MIL Grade UPS', 'Industrial UPS'),
  'ip-41-55-online-ups': P('IP41 / IP55 Industrial Online UPS', 'Industrial UPS'),
  'lithium-ups': P('Lithium UPS', 'Online UPS'),
  lineups: P('Cheerups Line Interactive UPS', 'Line Interactive UPS'),
  'domestic-Inverters': P('Domestic Inverter (600 VA–5 kVA)', 'Inverter'),
  'industrial-inverter': P('Industrial Inverter (3–100 kVA)', 'Inverter'),
  stabilizer: P('Voltage Stabilizer', 'Voltage Stabilizer'),
  air_oil: P('Air Cooled Voltage Stabilizer', 'Voltage Stabilizer'),
  'oil-cooled': P('Oil Cooled Voltage Stabilizer', 'Voltage Stabilizer'),
  'energy-saver': P('Industrial Energy Saver', 'Voltage Stabilizer'),
  isolation: P('Isolation Transformer', 'Transformer'),
  'intelligent-transfer-switch': P('Intelligent Static Transfer Switch', 'Transfer Switch'),
  smf: P('SMF Battery', 'Battery'),
  'tubular-batteries-manufacturing': P('Tubular Battery', 'Battery'),
  'agm-gel': P('AGM / GEL Battery', 'Battery'),
  'lithium-ion': P('Lithium Ion Battery', 'Battery'),
  nickel: P('Nickel Cadmium Battery', 'Battery'),
  'industrial-battery-charger-fcbc': P('Industrial Battery Charger (FCBC)', 'Battery Charger'),
  'solar-grid': P('Grid-Tie Solar Inverter', 'Solar'),
  'solar-off-grid-inverter': P('Off-Grid Solar Inverter', 'Solar'),
  'solar-hybrid-inverter': P('Solar Hybrid Inverter', 'Solar'),
  'solar-dc-up': P('Solar DC UPS', 'Solar'),
  'solar-street-lighting': P('Solar Street Light', 'Solar'),
  scc: P('MPPT Solar Charge Controller', 'Solar'),
  'ev-chargers': P('AC & DC EV Charger', 'EV Charger'),
  'ups-remote-monitoring': P('UPS Remote Monitoring System', 'Remote Monitoring'),
  'battery-bank-remote-monitoring': P('Battery Bank Monitoring System', 'Remote Monitoring'),
  'dg-monitoring': P('Diesel Generator Monitoring System', 'Remote Monitoring'),
  'facility-monitoring': P('Facility Monitoring System', 'Remote Monitoring'),
  'snmp-adapter': P('SNMP Adapter for UPS', 'Remote Monitoring'),
};
