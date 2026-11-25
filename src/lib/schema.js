// JSON-LD shared by guide pages.
import { ORG_REF, SITE, urlFor } from './legacy.js';
import { AUTHOR } from '../data/author.js';

// The named author (src/data/author.js) as a Person, or the company while none is set.
export const authorNode = (who = AUTHOR) => (who ? { '@type': 'Person', name: who.name, jobTitle: who.jobTitle, ...(who.url && { url: who.url, sameAs: [who.url] }), worksFor: ORG_REF } : ORG_REF);

export const article = (headline, slug, date = '2026-11-17') => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline,
  image: `${SITE}/image/blog/${slug.replace('/', '-')}.jpg`,
  datePublished: date,
  dateModified: date,
  author: authorNode(),
  publisher: { ...ORG_REF, logo: { '@type': 'ImageObject', url: `${SITE}/image/logo2.png` } },
  mainEntityOfPage: urlFor(slug),
});

export const faqPage = (faq) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
});
