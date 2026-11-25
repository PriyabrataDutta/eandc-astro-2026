// Regional sales offices and service locations, copied from the client's own /eandcpower-sales and
// /eandcpower-services pages (Nov 2026). The client still has to confirm every address is current.
// service: city-page keys in that office's service group; more: other service cities on the service page.
export const OFFICES = [
  { key: 'bangalore', city: 'Bengaluru', hq: true, covers: 'Karnataka, Andhra Pradesh and Telangana', address: '29/A, 2nd Phase, Peenya Industrial Area, Bengaluru 560058', service: ['bangalore', 'mysore', 'mangalore', 'hubli'], more: [], also: ['hyderabad', 'visakhapatnam'] },
  { key: 'chennai', city: 'Chennai', covers: 'Tamil Nadu and Pondicherry', address: '31/2, 4th Main Road, Gandhi Nagar, Adyar, Chennai 600020', service: ['chennai', 'coimbatore'], more: ['Madurai', 'Trichy', 'Pondicherry'], also: [] },
  { key: 'kochi', city: 'Kochi', covers: 'Kerala', address: '44/1464-B1, 1st Floor, Adimuri Road, South Pipeline Road, Palarivattom, Kochi 682025', service: ['kochi', 'trivandrum'], more: ['Palakkad', 'Calicut'], also: [] },
  { key: 'mumbai', city: 'Mumbai', covers: 'Maharashtra and Gujarat', address: '107, Tirupati Udyog, IB Patel Road, Goregaon (E), Mumbai 400063', service: ['mumbai', 'pune', 'nagpur'], more: [], also: ['nashik', 'ahmedabad', 'surat', 'vadodara'] },
  { key: 'kolkata', city: 'Kolkata', covers: 'West Bengal, Odisha, Bihar, Jharkhand and the North East', address: '5 B, Ground Floor, Charu Avenue, Kolkata 700033', service: ['kolkata', 'bhubaneswar', 'guwahati'], more: ['Patna', 'Ranchi', 'Agartala'], also: [] },
  { key: 'delhi', city: 'New Delhi', covers: 'Delhi, Punjab, Haryana and Chandigarh', address: '181, First Floor, Jeevan Nagar, Opposite Maharani Bagh, New Delhi 110014', service: ['delhi', 'jaipur', 'chandigarh'], more: ['Dehradun'], also: ['gurgaon', 'noida', 'ludhiana'] }, // Noida (UP, Delhi NCR) assumed served from New Delhi: client to confirm
  { key: 'indore', city: 'Indore', covers: 'Madhya Pradesh and Chhattisgarh', address: 'AM-32, Bapat Square, Sukhliya, Indore 452010', service: ['indore', 'bhopal'], more: ['Rewa', 'Gwalior', 'Jabalpur', 'Raipur'], also: [] },
  { key: 'jammu', city: 'Jammu', covers: 'Jammu, Kashmir and Ladakh', address: 'D-59, Sector 1, Durga Nagar Last Line, PO Roop Nagar, Jammu 180013', service: ['jammu'], more: ['Srinagar'], also: [] },
];

// The office that sells to / services a city page key.
export const officeFor = (key) => OFFICES.find((o) => o.key === key || o.service.includes(key) || o.also.includes(key));
export const servicedBy = (key) => OFFICES.find((o) => o.service.includes(key));

const maps = (o) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`Electronics & Controls Power Systems, ${o.address}`)}`;

// "Our Sales Office Locations" block as plain HTML, so the legacy contact page and Astro pages share it.
// `only` limits it to some office keys; `here` marks one office.
export function officesHtml({ only, here, heading = 'Our Sales Office Locations', intro = 'E&amp;C products are sold and serviced across India through 8 regional sales offices.' } = {}) {
  const list = only ? OFFICES.filter((o) => only.includes(o.key)) : OFFICES;
  const card = (o) => `<div class="of-card${o.key === here ? ' on' : ''}">
<h3>${o.city}${o.hq ? ' <span>Head office &amp; plant</span>' : ''}</h3>
<p class="of-cov">${o.covers}</p>
<p class="of-addr"><em class="fa fa-map-marker" aria-hidden="true"></em>${o.address}</p>
<p class="of-links"><a href="mailto:sales@eandcpower.com">sales@eandcpower.com</a> · <a href="${maps(o)}" target="_blank" rel="noopener">Directions</a></p>
</div>`;
  return `<style>
.of{padding:34px 0;background:#f4f7fb}
.of h2{color:#0b2546;font-size:22px;font-weight:600;margin:0 0 6px}
.of>.container>p{color:#506070;margin:0 0 16px;font-size:14.5px}
.of-grid{display:grid;grid-template-columns:1fr;gap:12px}
.of-card{background:#fff;border:1px solid #dde5ee;border-radius:8px;padding:14px 16px}
.of-card.on{border-color:#ff9900;box-shadow:0 0 0 2px rgba(255,153,0,.25)}
.of-card h3{font-size:16px;font-weight:600;color:#0b2546;margin:0 0 2px}
.of-card h3 span{font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;color:#b35f00;background:#fff6e8;padding:2px 7px;border-radius:3px;margin-left:6px;vertical-align:middle}
.of-cov{font-size:12.5px;color:#005c9e;margin:0 0 8px}
.of-addr{font-size:14px;color:#1f2d3d;line-height:1.5;margin:0 0 8px;display:flex;gap:8px}
.of-addr em.fa{color:#ff9900;margin-top:3px;font-size:14px !important;width:auto;height:auto;line-height:1 !important}
.of-links{font-size:13px;margin:0}
.of-links a{color:#005c9e}
@media (min-width:768px){.of-grid{grid-template-columns:repeat(min(var(--c),2),1fr)}}
@media (min-width:992px){.of-grid{grid-template-columns:repeat(var(--c),1fr)}}
</style>
<section class="of" id="sales-offices" aria-labelledby="h-offices"><div class="container">
<h2 id="h-offices">${heading}</h2>
<p>${intro}</p>
<div class="of-grid" style="--c:${Math.min(list.length, 4)}">${list.map(card).join('')}</div>
</div></section>`;
}
