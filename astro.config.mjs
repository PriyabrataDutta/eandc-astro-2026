import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Keep the live URL scheme: /renata is served from renata.html (Vercel cleanUrls).
export default defineConfig({
  site: 'https://www.eandcpower.com',
  trailingSlash: 'never',
  build: { format: 'file' },
  vite: { plugins: [tailwindcss()] },
});
