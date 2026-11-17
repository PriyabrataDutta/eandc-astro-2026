import { defineConfig } from 'astro/config';

// Keep the live URL scheme: /renata is served from renata.html (Vercel cleanUrls).
export default defineConfig({
  site: 'https://www.eandcpower.com',
  trailingSlash: 'never',
  build: { format: 'file' },
});
