# Visual / mobile review

Status: INCOMPLETE. Screenshots were not captured. The Playwright install on this machine is broken (playwright-core has no package.json) and the puppeteer fallback path failed, and the coordinator asked me to stop measuring. No files were written to eandcpower.com-audit/screenshots/.

What is known from Lighthouse mobile emulation (412px wide) and static HTML:
- No horizontal scroll or layout shift observed (CLS 0.001-0.004 on all 5 pages).
- Mobile hero (home) renders as a 412x430 slider block at the top; text LCP on /online-ups appears after ~2.4s FCP, so the above-the-fold on that page is blank for longer than on other pages (render-blocking CSS).
- Viewport meta present (Lighthouse mobile run was scored normally).
- Tap targets, overflow and fold layout were not checked.

To finish: run a headless Chrome screenshot at 1366x800 and 390x844 for / and /online-ups, and check `document.documentElement.scrollWidth > innerWidth`.
