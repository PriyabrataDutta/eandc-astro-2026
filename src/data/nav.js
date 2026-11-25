// Main menu of the redesigned header and footer. Every link is an existing page; sector links go to the sector posts.
import { postUrl } from '../lib/blog.js';

export const PHONE = { label: '080 2837 1974', tel: '+918028371974' };
export const SALES_PHONE = { label: '080 2839 7120', tel: '+918028397120' };
export const EMAIL = 'sales@eandcpower.com';

export const industries = [
  ['Data centres and IT', postUrl('how-to-size-ups-for-data-centre'), 'server'],
  ['Hospitals and healthcare', postUrl('ups-for-hospitals-and-fire-alarm-systems'), 'heart'],
  ['Banks and ATMs', postUrl('ups-for-banks-and-atms'), 'bank'],
  ['Manufacturing and process', postUrl('ups-for-scada-plc-and-dcs'), 'factory'],
  ['Defence', postUrl('rugged-ups-for-defence-vehicles-and-radar'), 'shield'],
  ['Railways and metro', postUrl('ups-for-railways-and-metro'), 'train'],
  ['Telecom and broadcast', postUrl('power-backup-for-telecom-and-broadcast-towers'), 'wifi'],
  ['Pharma plants', postUrl('power-backup-for-pharmaceutical-plants'), 'flask'],
  ['Government and PSU', postUrl('ups-for-government-and-psu-offices'), 'users'],
  ['Schools and universities', postUrl('ups-for-schools-and-universities'), 'book'],
];

// Products mega menu: [heading, heading link, [[label, url], ...]].
export const productMenu = [
  ['Online UPS', '/online-ups', [
    ['Accenta, 1 – 10 kVA', '/accenta'], ['Renata-I, 2 – 30 kVA', '/renata'], ['Renata-300, 10 – 800 kVA', '/renata300'],
    ['Renata-DS, 10 – 300 kVA', '/renatacyclone'], ['Renata Modular, 10 – 1200 kVA', '/renatamodular'], ['Rack mount UPS', '/rack-mount'],
    ['Lithium UPS', '/lithium-ups'], ['Line interactive UPS', '/lineups'],
  ]],
  ['Industrial UPS', '/industrial-ups-manufacturer-in-india', [
    ['MIL grade UPS', '/mil-grade'], ['IP41 / IP55 UPS', '/ip-41-55-online-ups'], ['Marine UPS', '/marine-ups'],
    ['Industrial inverters', '/industrial-inverter'], ['Battery chargers (FCBC)', '/industrial-battery-charger-fcbc'], ['Custom solutions', '/custom-solutions'],
  ]],
  ['Power and energy', '/power-inverter-manufacturer-in-india', [
    ['Inverters', '/power-inverter-manufacturer-in-india'], ['Voltage stabilizers', '/stabilizer'], ['Solar solutions', '/solar-solutions'],
    ['EV chargers', '/ev-charger-manufacturer-in-india'], ['Battery energy storage', '/battery-energy-storage-system'],
  ]],
  ['Batteries and add-ons', '/ups-batteries', [
    ['UPS batteries', '/ups-batteries'], ['UPS accessories', '/ups-accessories'], ['Remote monitoring', '/remote-monitoring-system'],
    ['UPS price in India', '/ups-price-in-india'],
  ]],
];

export const menu = [
  { label: 'Products', mega: productMenu },
  { label: 'Industries', items: industries.map(([l, u]) => [l, u]) },
  { label: 'Services', items: [['Service and AMC', '/eandcpower-services'], ['Sales', '/eandcpower-sales'], ['Get a quote', '/get-a-quote'], ['Testimonials', '/newtestimonal'], ['Feedback', '/feedback']] },
  { label: 'About us', items: [['Company profile', '/about-us'], ['Management', '/management'], ['Mission and vision', '/missionandvision'], ['Infrastructure', '/eandcpower-infrastructure'], ['Research and development', '/research-and-development'], ['Careers', '/careers']] },
  { label: 'Resources', items: [['Blog', '/blogs'], ['UPS sizing guide', '/guides/ups-sizing-kva'], ['Battery backup time', '/guides/ups-battery-backup-time'], ['Catalogs', '/catalog'], ['FAQs', '/frequently-asked-questions'], ['UPS across India', '/ups-manufacturer-in-india']] },
  { label: 'Contact', url: '/contact' },
];
