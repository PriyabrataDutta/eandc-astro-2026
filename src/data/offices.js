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
