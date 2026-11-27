// The redesigned header and footer (src/components/site) as HTML, for the legacy pages and the layouts that reuse
// their shell. Wrapped in .ecc so chrome.css can scope its styles away from the legacy markup.
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import Header from '../components/site/Header.astro';
import Footer from '../components/site/Footer.astro';
import cssUrl from '../styles/chrome.css?url';

const container = await AstroContainer.create();

export const CHROME_CSS = `<link rel="stylesheet" href="${cssUrl}">`;
export const HEADER = `<div class="ecc">${await container.renderToString(Header)}</div>`;
export const FOOTER = `<div class="ecc">${await container.renderToString(Footer)}</div>`;
