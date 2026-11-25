// India hub → 15 state hubs → city pages (plan: Architecture > Full URL list).
//
// Every page is built and linked. A page is indexable (in the sitemap, no noindex) when at least one real local
// fact covers it: a regional sales office (src/data/offices.js). Facts and the service line are derived from the
// client's sales and service pages at the end of this file. Pages with only an office (no service location) are
// thinner; adding real local facts (installations, engineers on site) to them is the best way to strengthen them.
//
// Optional extras on an entry:
//   facts:   ['Online UPS installed for 12 hospitals in Chennai since 2018', ...]  (from E&C)
//   faq:     [{ q, a }]
// `areas` and `sectors` below are public facts about each city's industry, not claims about E&C.

import { OFFICES, officeFor, servicedBy } from './offices.js';

// What each kind of industry needs, and which E&C pages answer it.
export const SECTORS = {
  auto: { icon: 'fa-cogs', label: 'Automotive and engineering', need: 'CNC machines, robots and PLC-controlled lines stop and lose work on even a short break.', links: [['Industrial UPS', '/industrial-ups-manufacturer-in-india'], ['Renata-300 online UPS', '/renata300'], ['Voltage stabilizers', '/stabilizer']] },
  it: { icon: 'fa-server', label: 'IT parks and data centres', need: 'Servers and networks need zero-break power, redundancy and remote monitoring.', links: [['Renata Modular UPS', '/renatamodular'], ['Rack mount UPS', '/rack-mount'], ['Static transfer switch', '/intelligent-transfer-switch']] },
  pharma: { icon: 'fa-flask', label: 'Pharma and life sciences', need: 'Process lines, cleanrooms and lab instruments need clean, regulated power.', links: [['Online UPS', '/online-ups'], ['Isolation transformers', '/isolation'], ['Renata-300 online UPS', '/renata300']] },
  health: { icon: 'fa-hospital-o', label: 'Hospitals and diagnostics', need: 'Operation theatres, ICUs and scanners cannot tolerate a power break.', links: [['Online UPS', '/online-ups'], ['Isolation transformers', '/isolation'], ['UPS remote monitoring', '/ups-remote-monitoring']] },
  heavy: { icon: 'fa-industry', label: 'Refineries, steel, ports and process plants', need: 'Control systems in heat, dust and vibration need rugged UPS, DC chargers and long-life batteries.', links: [['IP41/IP55 industrial UPS', '/ip-41-55-online-ups'], ['Industrial battery chargers', '/industrial-battery-charger-fcbc'], ['Nickel cadmium batteries', '/nickel']] },
  textile: { icon: 'fa-th', label: 'Textiles and light manufacturing', need: 'Looms and machines need protection from voltage swings and power cuts.', links: [['Voltage stabilizers', '/stabilizer'], ['Renata-I online UPS', '/renata'], ['Industrial inverters', '/industrial-inverter']] },
  defence: { icon: 'fa-shield', label: 'Defence, aerospace and research', need: 'Mission-critical equipment needs shock- and vibration-proof power.', links: [['MIL grade UPS', '/mil-grade'], ['IP41/IP55 industrial UPS', '/ip-41-55-online-ups'], ['Custom UPS solutions', '/custom-solutions']] },
  bfsi: { icon: 'fa-university', label: 'Banking, finance and government offices', need: 'Branches, ATMs and server rooms need continuous, monitored backup.', links: [['Online UPS', '/online-ups'], ['UPS remote monitoring', '/ups-remote-monitoring'], ['SNMP adapters', '/snmp-adapter']] },
};

const state = (slug, name, cities, overview) => ({ type: 'state', slug: `ups-supplier-in-${slug}`, key: slug, name, cities, overview, facts: [] });
const city = (slug, name, parent, nearby, areas, sectors) => ({ type: 'city', slug: `ups-manufacturer-in-${slug}`, key: slug, name, parent, nearby, areas, sectors, facts: [] });

export const states = [
  state('karnataka', 'Karnataka', ['bangalore', 'mysore', 'mangalore', 'hubli'], 'Karnataka combines India\'s largest IT cluster in Bengaluru with manufacturing in Mysuru, a refinery and port in Mangaluru, and engineering units around Hubballi-Dharwad.'),
  state('maharashtra', 'Maharashtra', ['mumbai', 'pune', 'nagpur', 'nashik'], 'Maharashtra is India\'s largest industrial state: finance and data centres in Mumbai, automotive and IT in Pune, engineering in Nashik and logistics in Nagpur.'),
  state('gujarat', 'Gujarat', ['ahmedabad', 'surat', 'vadodara'], 'Gujarat is a hub for chemicals, petrochemicals, pharma and textiles, with major GIDC industrial estates around Ahmedabad, Surat and Vadodara.'),
  state('tamil-nadu', 'Tamil Nadu', ['chennai', 'coimbatore'], 'Tamil Nadu has India\'s biggest automotive and electronics cluster around Chennai and a strong pump, motor and textile base in Coimbatore.'),
  state('kerala', 'Kerala', ['kochi', 'trivandrum'], 'Kerala\'s industry centres on the refinery, shipyard and port around Kochi and the IT and space research base in Thiruvananthapuram.'),
  state('telangana', 'Telangana', ['hyderabad'], 'Telangana\'s industry is led by Hyderabad: a large IT and data centre market and one of India\'s biggest pharma manufacturing clusters.'),
  state('andhra-pradesh', 'Andhra Pradesh', ['visakhapatnam'], 'Andhra Pradesh\'s industrial centre is Visakhapatnam, with a steel plant, refinery, port and a pharma manufacturing city.'),
  state('west-bengal', 'West Bengal', ['kolkata'], 'West Bengal\'s industry centres on Kolkata: IT in Salt Lake and New Town, engineering in the Howrah belt, and the port.'),
  state('rajasthan', 'Rajasthan', ['jaipur'], 'Rajasthan\'s largest industrial market is Jaipur, with engineering, textiles, gems and a growing IT and SEZ base.'),
  state('delhi-ncr', 'Delhi NCR', ['delhi', 'gurgaon', 'noida'], 'Delhi NCR joins the capital\'s offices, hospitals and government buildings with the automotive belt of Gurugram and Manesar and the electronics and IT parks of Noida and Greater Noida.'),
  state('madhya-pradesh', 'Madhya Pradesh', ['indore', 'bhopal'], 'Madhya Pradesh\'s industry is centred on Indore, with the Pithampur automotive and pharma estate, and on Bhopal, with heavy electrical and engineering plants at Govindpura and Mandideep.'),
  state('punjab', 'Punjab', ['ludhiana', 'chandigarh'], 'Punjab\'s industry runs from Ludhiana\'s cycle, auto-component, hosiery and machine-tool units to the IT, pharma and hospital base of the Chandigarh tricity with Mohali.'),
  state('odisha', 'Odisha', ['bhubaneswar'], 'Odisha is a mineral and metals state, with steel, aluminium, mining and power plants across its interior and an IT and services base in Bhubaneswar.'),
  state('assam', 'Assam', ['guwahati'], 'Assam is the gateway to the North East, with oil and gas, a refinery, tea processing and hospitals, and Guwahati as the region\'s commercial and logistics centre.'),
  state('jammu-kashmir', 'Jammu and Kashmir', ['jammu'], 'Jammu and Kashmir\'s industry is concentrated in the Jammu region\'s industrial estates, such as Bari Brahmana, Gangyal and Kathua, with pharma, steel and food units, alongside a large defence presence.'),
];

// parent = state hub key, or null where the plan has no state hub (the city links to the India hub).
// Bengaluru is not listed: /ups-manufacturer-in-bangalore is an existing live page.
export const cities = [
  city('mumbai', 'Mumbai', 'maharashtra', ['pune', 'nashik'], ['Bandra Kurla Complex', 'Andheri MIDC', 'Thane-Belapur industrial belt', 'Navi Mumbai (Mahape, Airoli)'], ['bfsi', 'it', 'pharma', 'health']),
  city('pune', 'Pune', 'maharashtra', ['mumbai', 'nashik'], ['Chakan', 'Pimpri-Chinchwad and Bhosari MIDC', 'Hinjewadi IT park', 'Talegaon'], ['auto', 'it', 'pharma']),
  city('nagpur', 'Nagpur', 'maharashtra', ['pune', 'indore'], ['MIHAN SEZ', 'Butibori MIDC', 'Hingna MIDC'], ['heavy', 'textile', 'it']),
  city('nashik', 'Nashik', 'maharashtra', ['mumbai', 'pune'], ['Satpur MIDC', 'Ambad MIDC', 'Sinnar'], ['auto', 'defence', 'textile']),
  city('mysore', 'Mysuru', 'karnataka', ['bangalore', 'mangalore'], ['Hebbal industrial area', 'Metagalli', 'Nanjangud'], ['auto', 'it', 'pharma']),
  city('mangalore', 'Mangaluru', 'karnataka', ['mysore', 'kochi'], ['Baikampady industrial area', 'Mangaluru SEZ', 'New Mangalore Port'], ['heavy', 'health', 'it']),
  city('hubli', 'Hubballi', 'karnataka', ['bangalore', 'mangalore'], ['Gokul Road industrial area', 'Tarihal', 'Belur (Dharwad)'], ['auto', 'textile', 'bfsi']),
  city('ahmedabad', 'Ahmedabad', 'gujarat', ['vadodara', 'surat'], ['Sanand', 'Changodar', 'Naroda and Vatva GIDC', 'GIFT City (Gandhinagar)'], ['pharma', 'auto', 'textile', 'bfsi']),
  city('surat', 'Surat', 'gujarat', ['vadodara', 'ahmedabad'], ['Sachin GIDC', 'Hazira', 'Pandesara'], ['textile', 'heavy', 'pharma']),
  city('vadodara', 'Vadodara', 'gujarat', ['ahmedabad', 'surat'], ['Makarpura GIDC', 'Nandesari', 'Por'], ['heavy', 'pharma', 'auto']),
  city('chennai', 'Chennai', 'tamil-nadu', ['coimbatore', 'bangalore'], ['Sriperumbudur', 'Oragadam', 'Ambattur', 'OMR IT corridor'], ['auto', 'it', 'health']),
  city('coimbatore', 'Coimbatore', 'tamil-nadu', ['chennai', 'kochi'], ['SIDCO Kurichi', 'Peelamedu', 'TIDEL Park Coimbatore'], ['auto', 'textile', 'it']),
  city('kochi', 'Kochi', 'kerala', ['trivandrum', 'coimbatore'], ['Kakkanad Infopark', 'Cochin SEZ', 'Eloor-Edayar industrial belt', 'Cochin Shipyard and port'], ['heavy', 'it', 'health']),
  city('trivandrum', 'Thiruvananthapuram', 'kerala', ['kochi', 'chennai'], ['Technopark (Kazhakkoottam)', 'Thumba space research centre'], ['it', 'defence', 'health']),
  city('hyderabad', 'Hyderabad', 'telangana', ['visakhapatnam', 'bangalore'], ['HITEC City', 'Genome Valley', 'Patancheru', 'Jeedimetla'], ['it', 'pharma', 'defence']),
  city('visakhapatnam', 'Visakhapatnam', 'andhra-pradesh', ['hyderabad', 'bhubaneswar'], ['Visakhapatnam Steel Plant', 'Pharma City (Parawada)', 'Atchutapuram SEZ', 'Visakhapatnam port'], ['heavy', 'pharma', 'defence']),
  city('kolkata', 'Kolkata', 'west-bengal', ['bhubaneswar', 'guwahati'], ['Salt Lake Sector V', 'New Town', 'Howrah industrial belt', 'Kolkata port'], ['it', 'bfsi', 'heavy']),
  city('jaipur', 'Jaipur', 'rajasthan', ['delhi', 'gurgaon'], ['Sitapura', 'VKI area', 'Mahindra World City'], ['auto', 'textile', 'it']),
  city('delhi', 'Delhi', 'delhi-ncr', ['gurgaon', 'noida'], ['Okhla industrial area', 'Narela', 'Bawana', 'Mayapuri'], ['bfsi', 'health', 'it']),
  city('gurgaon', 'Gurugram', 'delhi-ncr', ['delhi', 'noida'], ['IMT Manesar', 'Udyog Vihar', 'Cyber City'], ['auto', 'it', 'bfsi']),
  city('noida', 'Noida', 'delhi-ncr', ['delhi', 'gurgaon'], ['Sectors 62 and 63', 'Greater Noida', 'Noida SEZ'], ['it', 'auto', 'health']),
  city('indore', 'Indore', 'madhya-pradesh', ['bhopal', 'nagpur'], ['Pithampur', 'Sanwer Road industrial area', 'Super Corridor'], ['auto', 'pharma', 'it']),
  city('bhopal', 'Bhopal', 'madhya-pradesh', ['indore', 'nagpur'], ['Mandideep', 'Govindpura industrial area'], ['heavy', 'pharma', 'bfsi']),
  city('ludhiana', 'Ludhiana', 'punjab', ['chandigarh', 'jammu'], ['Focal Point', 'Industrial Areas A and B'], ['auto', 'textile', 'bfsi']),
  city('chandigarh', 'Chandigarh', 'punjab', ['ludhiana', 'delhi'], ['Industrial Area Phase I and II', 'Mohali IT City', 'Panchkula'], ['it', 'pharma', 'health']),
  city('bhubaneswar', 'Bhubaneswar', 'odisha', ['visakhapatnam', 'kolkata'], ['Mancheswar industrial estate', 'Infocity', 'Khurda'], ['it', 'heavy', 'bfsi']),
  city('guwahati', 'Guwahati', 'assam', ['kolkata', 'bhubaneswar'], ['Amingaon', 'Bamunimaidan', 'Noonmati refinery area'], ['heavy', 'health', 'bfsi']),
  city('jammu', 'Jammu', 'jammu-kashmir', ['ludhiana', 'chandigarh'], ['Bari Brahmana industrial estate', 'Gangyal industrial area', 'Digiana', 'Kathua industrial estate'], ['pharma', 'defence', 'health']),
];

export const indexable = (p) => p.facts.length > 0;

const names = Object.fromEntries([['bangalore', 'Bengaluru'], ...cities.map((c) => [c.key, c.name])]);
export const cityLink = (key) => ({ name: names[key], url: `/ups-manufacturer-in-${key}` });
export const stateOf = (key) => states.find((s) => s.key === key);
export const citiesWithoutHub = () => cities.filter((c) => !c.parent);

// Approximate city-centre coordinates [lat, lon], for the map and the distance from the Bengaluru plant.
export const GEO = {
  bangalore: [12.97, 77.59], mysore: [12.3, 76.64], mangalore: [12.91, 74.86], hubli: [15.36, 75.12],
  mumbai: [19.08, 72.88], pune: [18.52, 73.86], nagpur: [21.15, 79.09], nashik: [20.0, 73.79],
  ahmedabad: [23.02, 72.57], surat: [21.17, 72.83], vadodara: [22.31, 73.18],
  chennai: [13.08, 80.27], coimbatore: [11.02, 76.96], kochi: [9.93, 76.27], trivandrum: [8.52, 76.94],
  hyderabad: [17.39, 78.49], visakhapatnam: [17.69, 83.22], kolkata: [22.57, 88.36], jaipur: [26.91, 75.79],
  delhi: [28.61, 77.21], gurgaon: [28.46, 77.03], noida: [28.54, 77.39], indore: [22.72, 75.86], bhopal: [23.26, 77.41],
  ludhiana: [30.9, 75.86], chandigarh: [30.73, 76.78], jammu: [32.73, 74.86], bhubaneswar: [20.3, 85.82], guwahati: [26.14, 91.74],
};

// Straight-line km from the Peenya plant (haversine), rounded to 10 km.
export const kmFromPlant = (key) => {
  const [a, b] = [GEO.bangalore, GEO[key]].map(([la, lo]) => [(la * Math.PI) / 180, (lo * Math.PI) / 180]);
  const h = Math.sin((b[0] - a[0]) / 2) ** 2 + Math.cos(a[0]) * Math.cos(b[0]) * Math.sin((b[1] - a[1]) / 2) ** 2;
  return Math.round((2 * 6371 * Math.asin(Math.sqrt(h))) / 10) * 10;
};

// Local facts from the client's sales and service pages (src/data/offices.js). A city is indexable when it is on the
// service list (service fact + office fact) or covered by a regional office (office fact).
for (const c of cities) {
  const o = officeFor(c.key);
  const svc = servicedBy(c.key);
  if (o?.key === c.key) c.facts.push(`E&C regional sales office in ${c.name}: ${o.address}.`);
  else if (o) c.facts.push(`Sales in ${c.name} are handled by E&C's ${o.city} office, which covers ${o.covers}.`);
  if (svc) {
    c.facts.push(`${c.name} is one of E&C's service locations: installation, warranty support, AMC, per-call service and rental UPS.`);
    c.service = `On-site UPS service in ${c.name} is coordinated by the E&C ${svc.city} office.`;
  }
  c.office = o;
}
for (const s of states) {
  const offs = OFFICES.filter((o) => s.cities.some((k) => o.key === k || o.service.includes(k) || o.also.includes(k)));
  const svc = s.cities.filter((k) => servicedBy(k)).map((k) => cityLink(k).name);
  const local = offs.filter((o) => s.cities.includes(o.key));
  if (local.length) s.facts.push(`E&C regional sales office in ${local.map((o) => o.city).join(' and ')}: ${local.map((o) => o.address).join('; ')}.`);
  else if (offs.length) s.facts.push(`Sales in ${s.name} are handled by E&C's ${offs.map((o) => o.city).join(' and ')} office.`);
  if (svc.length) {
    s.facts.push(`E&C service locations in ${s.name}: ${svc.join(', ')}.`);
    s.service = `On-site installation, warranty support, AMC, per-call service and rental UPS across ${s.name}.`;
  }
  s.offices = offs;
}
