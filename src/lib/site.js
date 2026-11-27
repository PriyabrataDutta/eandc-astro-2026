// Site-wide SEO constants and helpers: the canonical origin, the one company entity for schema, Open Graph tags.
import { OFFICES } from '../data/offices.js';

const escAttr = (t) => t.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

export const SITE = 'https://www.eandcpower.com';

export const urlFor = (slug) => (slug === 'index' ? `${SITE}/` : `${SITE}/${slug}`);

// One company entity everywhere: the full node below, and ORG_REF wherever another schema names the company.
// Facts from the /contact page: phones, hours, map pin and Google Maps listing.
export const ORG_NAME = 'Electronics & Controls Power Systems Private Limited';
export const ORG_REF = { '@type': 'Organization', '@id': `${SITE}/#organization`, name: ORG_NAME, url: `${SITE}/` };
export const ORG = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness'],
  '@id': `${SITE}/#organization`,
  name: ORG_NAME,
  alternateName: 'E&C Power Systems',
  url: `${SITE}/`,
  logo: { '@type': 'ImageObject', url: `${SITE}/image/logo2.png` },
  image: `${SITE}/image/logo2.png`,
  foundingDate: '1978',
  telephone: '+91-80-2837-1974',
  email: 'sales@eandcpower.com',
  contactPoint: [
    { '@type': 'ContactPoint', telephone: '+91-80-2839-7120', contactType: 'sales', areaServed: 'IN' },
    { '@type': 'ContactPoint', telephone: '+91-80-2837-1974', contactType: 'customer service', areaServed: 'IN' },
    { '@type': 'ContactPoint', telephone: '+91-80-2837-9401', contactType: 'customer service', areaServed: 'IN' },
  ],
  geo: { '@type': 'GeoCoordinates', latitude: 13.02991, longitude: 77.51221 },
  hasMap: 'https://maps.google.com/maps?cid=24476297107613509',
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '09:00', closes: '17:30' },
  ],
  areaServed: { '@type': 'Country', name: 'India' },
  sameAs: ['https://www.linkedin.com/company/electronics-controls-power-systems-pvt-ltd/', 'https://www.facebook.com/eandcpower', 'https://twitter.com/eandcpower'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '29/A, 2nd Phase, Peenya Industrial Area',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    postalCode: '560058',
    addressCountry: 'IN',
  },
  // Regional sales offices (src/data/offices.js). Addresses are from the client's sales page, pending confirmation.
  department: OFFICES.filter((o) => !o.hq).map((o) => ({
    '@type': 'LocalBusiness',
    name: `E&C Power Systems, ${o.city} sales office`,
    email: 'sales@eandcpower.com',
    areaServed: o.covers,
    address: { '@type': 'PostalAddress', streetAddress: o.address.replace(/,[^,]*$/, ''), addressLocality: o.city, postalCode: o.address.match(/\d{6}$/)[0], addressCountry: 'IN' },
  })),
};

// Open Graph / Twitter tags so shared links show a title, description and image.
export function ogTags({ title, description, url, image, type = 'website', published }) {
  const t = (k, v, attr = 'property') => (v ? `<meta ${attr}="${k}" content="${escAttr(v)}" />\n` : '');
  return (
    t('og:type', type) + t('article:published_time', published) + t('og:site_name', 'E&C Power Systems') + t('og:title', title) + t('og:description', description) +
    t('og:url', url) + t('og:image', image) + t('twitter:card', 'summary_large_image', 'name')
  );
}
