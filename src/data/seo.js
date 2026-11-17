// Title and meta description overrides for legacy pages whose own were duplicated, missing or too long.
// Primary keywords follow the Keyword map tab of the plan doc. Titles <= 60 characters, descriptions ~140-160.
export const meta = {

  'lithium-ion': {
    title: 'Lithium Ion Batteries for UPS & Inverters | E&C Power',
    description: 'Lithium ion batteries for UPS, inverters and solar systems from E&C Power Systems, Bengaluru: long cycle life, compact size and built-in battery management.',
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
  'intelligent-transfer-switch': {
    title: 'Static Transfer Switch Manufacturer | Intelligent STS | E&C',
    description: 'Intelligent static transfer switches from E&C Power Systems switch critical loads between two power sources without interruption, for data centres and industry.',
  },

  'agm-gel': {
    title: 'AGM & GEL Batteries for UPS and Solar | E&C Power Systems',
    description: 'Sealed AGM and GEL batteries for UPS, solar and telecom from E&C Power Systems, Bengaluru. Maintenance-free, with GEL suited to deep and frequent discharges.',
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
  'custom-solutions': P('Custom UPS Solutions', 'Online UPS'),
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
  'solar-solutions': P('Solar Power Solutions', 'Solar'),
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
