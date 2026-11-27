// Structured data for the home page: the company and its Peenya premises, as the home page has always declared them.
const ADDRESS = { '@type': 'PostalAddress', streetAddress: '29/A, 2nd Phase, Peenya Industrial Area', addressLocality: 'Bengaluru', addressRegion: 'Karnataka', postalCode: '560058', addressCountry: 'IN' };

export const homeSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.eandcpower.com/#organization',
      name: 'Electronics & Controls Power Systems Private Limited',
      url: 'https://www.eandcpower.com/',
      description: 'Electronics & Controls Power Systems Private Limited is a power electronics company based in Peenya Industrial Area, Bengaluru, India. Its product portfolio includes online UPS systems, line interactive UPS systems, industrial inverters, voltage stabilizers, solar solutions, EV chargers, batteries, transfer switches and remote monitoring solutions.',
      logo: { '@type': 'ImageObject', url: 'https://www.eandcpower.com/image/logo2.png' },
      image: 'https://www.eandcpower.com/image/logo2.png',
      telephone: ['+91-80-2837-1974', '+91-80-2837-9401'],
      email: 'sales@eandcpower.com',
      address: ADDRESS,
      identifier: { '@type': 'PropertyValue', propertyID: 'CIN', value: 'U31200KA1997PTC022448' },
      knowsAbout: ['Online UPS systems', 'Line interactive UPS systems', 'Industrial inverters', 'Voltage stabilizers', 'Solar power solutions', 'Electric vehicle chargers', 'Power electronics', 'Industrial battery chargers', 'Transfer switches', 'Remote monitoring systems', 'Power backup and power conditioning'],
      contactPoint: [{ '@type': 'ContactPoint', contactType: 'Sales', telephone: '+91-80-2837-1974', email: 'sales@eandcpower.com', availableLanguage: ['English', 'Kannada'] }],
      location: { '@id': 'https://www.eandcpower.com/#localbusiness' },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.eandcpower.com/#localbusiness',
      name: 'Electronics & Controls Power Systems Private Limited',
      url: 'https://www.eandcpower.com/',
      description: 'Power electronics manufacturer in Peenya Industrial Area, Bengaluru, offering UPS systems and other power management solutions.',
      image: 'https://www.eandcpower.com/image/logo2.png',
      parentOrganization: { '@id': 'https://www.eandcpower.com/#organization' },
      telephone: ['+91-80-2837-1974', '+91-80-2837-9401'],
      email: 'sales@eandcpower.com',
      address: ADDRESS,
      hasMap: 'https://www.google.com/maps/search/?api=1&query=Electronics%20%26%20Controls%20Power%20Systems%20Private%20Limited%2C%2029%2FA%2C%202nd%20Phase%2C%20Peenya%20Industrial%20Area%2C%20Bengaluru%2C%20Karnataka%20560058',
      knowsAbout: ['Online UPS systems', 'Industrial inverters', 'Voltage stabilizers', 'Solar power solutions', 'EV chargers', 'Power backup systems', 'Remote monitoring solutions'],
    },
  ],
};
