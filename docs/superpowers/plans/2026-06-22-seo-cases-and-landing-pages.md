# SEO, Cases and Landing Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the apex domain canonical, add three intent-led landing pages, and ship an interactive Cases experience for Carupgrade and Lepas Dressage.

**Architecture:** Next.js metadata routes own sitemap and robots output. Shared server components own navigation, service-page structure and case content, while one isolated client component owns accessible viewport switching for real local screenshots.

**Tech Stack:** Next.js 15 App Router, React 19, Tailwind CSS 4, Vitest, Next Image, Sharp through Next.js.

---

### Task 1: Encode the SEO contract as failing tests

**Files:**
- Modify: `tests/site-integration.test.mjs`
- Test: `tests/site-integration.test.mjs`

- [x] **Step 1: Write failing tests for the apex-domain contract**

Add assertions that `app/layout.jsx`, `app/sitemap.js`, `app/robots.js`, `next.config.mjs` and page metadata use `https://bifrostsolutions.dk`, that the redirect source matches `www.bifrostsolutions.dk`, and that sitemap output excludes `/faq`, `/om-os` and `/vision`.

- [x] **Step 2: Write failing tests for new routes and navigation**

Read these route files and assert unique titles, canonicals and required content:

```js
const routes = [
  'app/cases/page.jsx',
  'app/cases/carupgrade/page.jsx',
  'app/cases/lepas-dressage/page.jsx',
  'app/hjemmeside-til-mindre-virksomhed/page.jsx',
  'app/hjemmeside-paa-abonnement/page.jsx',
  'app/hjemmeside-med-hosting-og-drift/page.jsx',
]
```

Assert that `components/SiteHeader.jsx` contains `href="/cases"` and that `components/CasePreview.jsx` contains desktop/mobile tab semantics and `prefers-reduced-motion` styling hooks.

- [x] **Step 3: Run tests and verify RED**

Run: `npm test -- tests/site-integration.test.mjs`

Expected: FAIL because the new routes and metadata route files do not exist.

### Task 2: Implement canonical host, metadata routes and GSC config

**Files:**
- Create: `next.config.mjs`
- Create: `app/sitemap.js`
- Create: `app/robots.js`
- Modify: `app/layout.jsx`
- Modify: `app/page.jsx`
- Delete: `public/sitemap.xml`
- Delete: `public/robots.txt`
- Delete: `sitemap.xml`
- Delete: `robots.txt`
- Modify: `/Users/jonas/Developer/SEO/config/sites.json`
- Test: `tests/site-integration.test.mjs`

- [x] **Step 1: Add the host redirect**

Create a Next redirect with `has: [{ type: 'host', value: 'www.bifrostsolutions.dk' }]`, destination `https://bifrostsolutions.dk/:path*`, and `permanent: true`.

- [x] **Step 2: Add metadata routes**

Export sitemap entries for `/`, the two legal pages, `/cases`, both case pages and all three landing pages. Export robots rules with `allow: '/'` and sitemap `https://bifrostsolutions.dk/sitemap.xml`.

- [x] **Step 3: Normalize page metadata and schema**

Keep `metadataBase` on the apex host, make the home canonical explicit, add `openGraph.url`, and ensure the organization schema in `app/page.jsx` uses the same host.

- [x] **Step 4: Add the GSC site**

Append this object to `/Users/jonas/Developer/SEO/config/sites.json`:

```json
{
  "name": "bifrostsolutions",
  "url": "sc-domain:bifrostsolutions.dk",
  "sitemaps": ["https://bifrostsolutions.dk/sitemap.xml"]
}
```

- [x] **Step 5: Run the focused test**

Run: `npm test -- tests/site-integration.test.mjs`

Expected: SEO assertions pass; route assertions remain RED.

### Task 3: Build shared site and marketing-page components

**Files:**
- Create: `components/SiteHeader.jsx`
- Create: `components/MarketingPage.jsx`
- Modify: `app/page.jsx`
- Modify: `components/MobileNav.jsx`
- Test: `tests/site-integration.test.mjs`

- [x] **Step 1: Extract shared header**

Create `SiteHeader` with `/`, `/cases`, `/#loesning`, `/#pris` and one consistent mail CTA. Preserve the 64 px fixed navigation, Bifrost mark, light/dark colors and existing mobile navigation behavior.

- [x] **Step 2: Create the reusable marketing page**

Implement a server component accepting `eyebrow`, `title`, `intro`, `benefits`, `details`, and `caseLink`. Render an asymmetric hero, a two-column benefit grid, one detail band, a relevant case link and one mail CTA.

- [x] **Step 3: Replace the home-local header**

Import `SiteHeader` into `app/page.jsx` and remove its duplicate `Brand` and `Header` functions.

- [x] **Step 4: Run the focused test**

Run: `npm test -- tests/site-integration.test.mjs`

Expected: navigation assertions pass.

### Task 4: Add the three intent-led landing pages

**Files:**
- Create: `app/hjemmeside-til-mindre-virksomhed/page.jsx`
- Create: `app/hjemmeside-paa-abonnement/page.jsx`
- Create: `app/hjemmeside-med-hosting-og-drift/page.jsx`
- Test: `tests/site-integration.test.mjs`

- [x] **Step 1: Add small-business route**

Export unique metadata and render `MarketingPage` with concrete copy about clear services, mobile contact paths, up to six pages and Danish support.

- [x] **Step 2: Add subscription route**

Export unique metadata and render factual pricing copy: 399 kr. ex. moms monthly, billed quarterly, no standard setup invoice, hosting and ongoing operation included.

- [x] **Step 3: Add hosting-and-operation route**

Export unique metadata and render concrete copy about hosting, SSL, technical operation, content corrections and one supplier.

- [x] **Step 4: Verify GREEN for landing routes**

Run: `npm test -- tests/site-integration.test.mjs`

Expected: landing route assertions pass.

### Task 5: Capture and optimize real visual assets

**Files:**
- Create: `public/cases/carupgrade-desktop.webp`
- Create: `public/cases/carupgrade-mobile.webp`
- Create: `public/cases/lepas-dressage-desktop.webp`
- Create: `public/cases/lepas-dressage-mobile.webp`
- Create: `public/bifrost-editorial-bridge.webp`
- Create: `public/og-image.webp`
- Modify: `app/layout.jsx`
- Modify: `app/page.jsx`

- [x] **Step 1: Capture desktop and mobile screenshots**

Use Playwright against `https://carupgrade.dk/` and `https://lepas-dressage.vercel.app/` at 1440 x 1000 and 390 x 844. Capture full-page PNG sources in a temporary directory.

- [x] **Step 2: Convert screenshots and existing imagery**

Use `sips` or ImageMagick to produce WebP assets at quality 78-82 and preserve correct aspect ratios. Ensure each published raster is materially smaller than its source.

- [x] **Step 3: Update image references**

Use the WebP editorial image on the home page and the 1200 x 630 WebP Open Graph image in metadata. Remove obsolete large source images only when no code references remain.

- [x] **Step 4: Verify asset size and references**

Run: `find public/cases public -maxdepth 1 -type f \( -name '*.png' -o -name '*.webp' \) -exec ls -lh {} +`

Expected: new files exist, with the hero/editorial and OG replacements below their previous sizes.

### Task 6: Build the interactive Cases experience

**Files:**
- Create: `components/CasePreview.jsx`
- Create: `components/CasePage.jsx`
- Create: `app/cases/page.jsx`
- Create: `app/cases/carupgrade/page.jsx`
- Create: `app/cases/lepas-dressage/page.jsx`
- Modify: `app/globals.css`
- Test: `tests/site-integration.test.mjs`

- [x] **Step 1: Build accessible preview switching**

Create a client leaf using `useState` only for the discrete `desktop` or `mobile` mode. Render a `role="tablist"`, two tabs with `aria-selected`, and local real screenshots in a scrollable preview. Use CSS transitions on transform and opacity, plus a reduced-motion media query.

- [x] **Step 2: Build the shared case-detail component**

Accept a project object containing `name`, `industry`, `summary`, `challenge`, `decisions`, `deliverables`, `url`, and screenshot paths. Render one hero, one large preview, grouped factual content and one external-site CTA.

- [x] **Step 3: Build `/cases`**

Use an asymmetric hero collage and two compositionally distinct project sections. Preserve the teal accent and zinc theme, use no fabricated metrics, and link each project to its case route and public website.

- [x] **Step 4: Build both case routes**

Export unique metadata and pass documented public information into `CasePage`. Keep all claims traceable to the live customer websites.

- [x] **Step 5: Run design pre-flight scans**

Run: `rg -n "—|–|window.addEventListener\\(['\"]scroll|h-screen|Scroll to|Quietly" app/cases components/CasePreview.jsx components/CasePage.jsx`

Expected: no matches.

- [x] **Step 6: Verify GREEN**

Run: `npm test -- tests/site-integration.test.mjs`

Expected: all integration assertions pass.

### Task 7: Full verification, GSC check, commit and push

**Files:**
- Modify: `docs/superpowers/plans/2026-06-22-seo-cases-and-landing-pages.md`

- [x] **Step 1: Run automated verification**

Run: `npm test && npm run lint && npm run build`

Expected: all commands exit 0.

- [x] **Step 2: Run browser verification**

Start the production server and inspect `/`, `/cases`, both case routes and all landing routes at desktop and mobile widths. Confirm no console errors, horizontal overflow, broken images or broken links.

- [x] **Step 3: Verify GSC access and sitemap configuration**

From `/Users/jonas/Developer/SEO`, query `list_sites()` and `list_sitemaps('sc-domain:bifrostsolutions.dk')`. Confirm full permission. Submit the apex sitemap only if it is not already registered.

- [x] **Step 4: Review the diff and commit**

Run `git diff --check`, inspect `git status --short` and commit only scoped repository files with message `Add SEO landing pages and interactive cases`.

- [x] **Step 5: Push the current branch**

Run: `git push origin HEAD`

Expected: push succeeds and reports the updated remote branch.
