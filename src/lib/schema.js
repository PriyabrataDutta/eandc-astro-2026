// JSON-LD shared by guide pages.
import { ORG_REF, SITE, urlFor } from './legacy.js';

export const article = (headline, slug, date = '2026-11-17') => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline,
  image: `${SITE}/image/blog/${slug.replace('/', '-')}.jpg`,
  datePublished: date,
  dateModified: date,
  author: ORG_REF,
  publisher: { ...ORG_REF, logo: { '@type': 'ImageObject', url: `${SITE}/image/logo2.png` } },
  mainEntityOfPage: urlFor(slug),
});

export const faqPage = (faq) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
});
