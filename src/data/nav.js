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

// Products mega menu: four columns of [category, category page, [[label, url], ...]]. Every category and item of the
// legacy Products menu is here (its "Lead acid to lithium converter" pointed at a coming-soon page and is left out).
export const productMenu = [
  [
    ['Online UPS', '/online-ups', [
      ['Accenta, 1 to 10 kVA', '/accenta'], ['Renata-I, 2 to 30 kVA', '/renata'], ['Renata-300, 10 to 800 kVA', '/renata300'],
      ['Renata-DS, 10 to 300 kVA', '/renatacyclone'], ['Renata Modular, 10 to 1200 kVA', '/renatamodular'],
      ['Accenta Rack, 1 to 60 kVA', '/rack-mount'], ['Lithium UPS, 1 to 5 kVA', '/lithium-ups'],
    ]],
    ['Line interactive UPS', '/lineups', [['Cheerups, 600 VA to 5 kVA', '/lineups']]],
  ],
  [
    ['Industrial UPS', '/industrial-ups-manufacturer-in-india', [
      ['MIL grade UPS', '/mil-grade'], ['IP41 to IP55 online UPS', '/ip-41-55-online-ups'], ['Marine UPS', '/marine-ups'],
    ]],
    ['Inverters', '/power-inverter-manufacturer-in-india', [
      ['Domestic inverters, 600 VA to 5 kVA', '/domestic-Inverters'], ['Industrial inverters, 3 to 100 kVA', '/industrial-inverter'],
    ]],
    ['Stabilizers', '/stabilizer', [['Air cooled', '/air_oil'], ['Oil cooled', '/oil-cooled'], ['Energy savers', '/energy-saver']]],
    ['Industrial battery chargers', '/industrial-battery-charger-fcbc', []],
    ['Custom solutions', '/custom-solutions', []],
  ],
  [
    ['Solar solutions', '/solar-solutions', [
      ['Off grid inverters', '/solar-off-grid-inverter'], ['Grid tie inverters', '/solar-grid'], ['Hybrid inverters', '/solar-hybrid-inverter'],
      ['MPPT charge controllers', '/scc'], ['Solar DC UPS', '/solar-dc-up'], ['Solar street lights', '/solar-street-lighting'],
    ]],
    ['EV chargers', '/ev-charger-manufacturer-in-india', [['AC and DC EV chargers', '/ev-chargers']]],
    ['Battery energy storage', '/battery-energy-storage-system', []],
  ],
  [
    ['Batteries', '/ups-batteries', [
      ['SMF', '/smf'], ['Tubular', '/tubular-batteries-manufacturing'], ['Ni-Cd', '/nickel'], ['GEL', '/agm-gel'], ['Lithium ion', '/lithium-ion'],
    ]],
    ['Remote monitoring', '/remote-monitoring-system', [
      ['UPS', '/ups-remote-monitoring'], ['Battery bank', '/battery-bank-remote-monitoring'], ['DG', '/dg-monitoring'], ['Facility', '/facility-monitoring'],
    ]],
    ['Accessories', '/ups-accessories', [
      ['Isolation transformers', '/isolation'], ['SNMP adapter', '/snmp-adapter'], ['Static transfer switches', '/intelligent-transfer-switch'],
    ]],
  ],
];

export const menu = [
  { label: 'Products', mega: productMenu },
  { label: 'Industries', items: industries.map(([l, u]) => [l, u]) },
  { label: 'Services', items: [['Service and AMC', '/eandcpower-services'], ['Sales', '/eandcpower-sales'], ['Get a quote', '/get-a-quote'], ['Testimonials', '/newtestimonal'], ['Feedback', '/feedback']] },
  { label: 'About us', items: [['Company profile', '/about-us'], ['Management', '/management'], ['Mission and vision', '/missionandvision'], ['Infrastructure', '/eandcpower-infrastructure'], ['Research and development', '/research-and-development'], ['Careers', '/careers']] },
  { label: 'Resources', items: [['Blog', '/blogs'], ['UPS sizing guide', '/guides/ups-sizing-kva'], ['Battery backup time', '/guides/ups-battery-backup-time'], ['Catalogs', '/catalog'], ['FAQs', '/frequently-asked-questions'], ['UPS across India', '/ups-manufacturer-in-india']] },
  { label: 'Contact', url: '/contact' },
];
