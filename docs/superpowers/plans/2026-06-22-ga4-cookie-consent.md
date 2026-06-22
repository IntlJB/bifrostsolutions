# GA4 Cookie Consent Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add consent-gated GA4 tracking with measurement ID `G-44LJ04547K`, legal policy pages, and persistent footer controls across the Bifrost Solutions site.

**Architecture:** A small browser-only consent module owns storage, Analytics loading, cookie cleanup, and a custom settings event. A client banner component consumes that module and is mounted once in the root layout. Shared footer and policy-layout components keep legal navigation available on every route without duplicating consent logic.

**Tech Stack:** Next.js 15 App Router, React 19, Tailwind CSS 4, Vitest, Testing Library, jsdom

---

## File map

- Create `lib/cookie-consent.js`: constants and browser-side consent/GA4 operations.
- Create `components/CookieConsent.jsx`: accessible consent banner and lifecycle integration.
- Create `components/CookieSettingsButton.jsx`: footer control that reopens consent choices.
- Create `components/SiteFooter.jsx`: shared footer for all routes.
- Create `components/PolicyPage.jsx`: shared legal-page layout.
- Create `app/cookiepolitik/page.jsx`: cookie policy content and metadata.
- Create `app/privatlivspolitik/page.jsx`: privacy policy content and metadata.
- Create `tests/cookie-consent.test.jsx`: behavioral consent tests in jsdom.
- Create `tests/site-integration.test.mjs`: static integration assertions for layout, routes, footer, and measurement ID.
- Modify `app/layout.jsx`: mount one global consent component.
- Modify `app/page.jsx`: replace the local footer with the shared footer.
- Modify `app/globals.css`: banner and policy-page presentation.
- Modify `package.json` and `package-lock.json`: test command and test dependencies.

### Task 1: Test harness and consent behavior contract

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json`
- Create: `tests/cookie-consent.test.jsx`

- [ ] **Step 1: Install the test dependencies and add the test script**

Run:

```bash
npm install --save-dev vitest jsdom @testing-library/react @testing-library/jest-dom
```

Add to `package.json` scripts:

```json
"test": "vitest run"
```

Expected: the packages are recorded in `devDependencies` and the lockfile is updated.

- [ ] **Step 2: Write failing browser-behavior tests**

Create `tests/cookie-consent.test.jsx` with jsdom environment and tests that render `CookieConsent`, reset `document.head`, `document.cookie`, and `localStorage` before each case, then assert:

```jsx
// @vitest-environment jsdom
import '@testing-library/jest-dom/vitest'
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import CookieConsent from '../components/CookieConsent'
import { CONSENT_EVENT, CONSENT_STORAGE_KEY, MEASUREMENT_ID } from '../lib/cookie-consent'

describe('CookieConsent', () => {
  beforeEach(() => {
    localStorage.clear()
    document.head.querySelectorAll('[data-google-tag]').forEach(node => node.remove())
    delete window.dataLayer
    delete window.gtag
  })

  afterEach(cleanup)

  it('does not load GA4 before consent', async () => {
    render(<CookieConsent />)
    expect(await screen.findByRole('dialog', { name: /statistikcookies/i })).toBeInTheDocument()
    expect(document.querySelector('[data-google-tag]')).toBeNull()
  })

  it('loads exactly one configured tag after acceptance', async () => {
    render(<CookieConsent />)
    fireEvent.click(await screen.findByRole('button', { name: 'Accepter' }))
    await waitFor(() => expect(document.querySelectorAll('[data-google-tag]')).toHaveLength(1))
    expect(document.querySelector('[data-google-tag]')).toHaveAttribute(
      'src',
      `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`,
    )
    expect(localStorage.getItem(CONSENT_STORAGE_KEY)).toBe('accepted')
    window.dispatchEvent(new Event(CONSENT_EVENT))
    fireEvent.click(await screen.findByRole('button', { name: 'Accepter' }))
    expect(document.querySelectorAll('[data-google-tag]')).toHaveLength(1)
  })

  it('keeps GA4 disabled after rejection', async () => {
    render(<CookieConsent />)
    fireEvent.click(await screen.findByRole('button', { name: 'Afvis' }))
    expect(localStorage.getItem(CONSENT_STORAGE_KEY)).toBe('rejected')
    expect(document.querySelector('[data-google-tag]')).toBeNull()
  })

  it('loads GA4 for stored acceptance and reopens settings on request', async () => {
    localStorage.setItem(CONSENT_STORAGE_KEY, 'accepted')
    render(<CookieConsent />)
    await waitFor(() => expect(document.querySelectorAll('[data-google-tag]')).toHaveLength(1))
    window.dispatchEvent(new Event(CONSENT_EVENT))
    expect(await screen.findByRole('dialog', { name: /statistikcookies/i })).toBeInTheDocument()
    expect(localStorage.getItem(CONSENT_STORAGE_KEY)).toBeNull()
  })
})
```

- [ ] **Step 3: Run the tests and verify the expected failure**

Run: `npm test -- tests/cookie-consent.test.jsx`

Expected: FAIL because `components/CookieConsent.jsx` and `lib/cookie-consent.js` do not exist.

- [ ] **Step 4: Commit the red test harness**

```bash
git add package.json package-lock.json tests/cookie-consent.test.jsx
git commit -m "test: define GA4 consent behavior"
```

### Task 2: Consent engine and banner

**Files:**
- Create: `lib/cookie-consent.js`
- Create: `components/CookieConsent.jsx`
- Modify: `app/globals.css`
- Test: `tests/cookie-consent.test.jsx`

- [ ] **Step 1: Implement the minimal consent engine**

Create `lib/cookie-consent.js` exporting:

```js
export const MEASUREMENT_ID = 'G-44LJ04547K'
export const CONSENT_STORAGE_KEY = 'bifrost_cookie_consent_v1'
export const CONSENT_EVENT = 'bifrost:open-cookie-settings'

export function readConsent() {
  try { return window.localStorage.getItem(CONSENT_STORAGE_KEY) } catch { return null }
}

export function writeConsent(value) {
  try {
    if (value === null) window.localStorage.removeItem(CONSENT_STORAGE_KEY)
    else window.localStorage.setItem(CONSENT_STORAGE_KEY, value)
  } catch {}
}

export function clearAnalyticsCookies() {
  const names = document.cookie.split(';').map(cookie => cookie.split('=')[0].trim())
    .filter(name => name === '_ga' || name.startsWith('_ga_'))
  const hostname = window.location.hostname
  for (const name of names) {
    for (const domain of ['', hostname, `.${hostname}`]) {
      const domainPart = domain ? `; domain=${domain}` : ''
      document.cookie = `${name}=; Max-Age=0; path=/${domainPart}; SameSite=Lax`
    }
  }
}

export function loadAnalytics() {
  if (document.querySelector('script[data-google-tag]')) return
  window.dataLayer = window.dataLayer || []
  window.gtag = window.gtag || function gtag() { window.dataLayer.push(arguments) }
  window.gtag('js', new Date())
  window.gtag('config', MEASUREMENT_ID)
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`
  script.dataset.googleTag = MEASUREMENT_ID
  document.head.append(script)
}
```

- [ ] **Step 2: Implement the accessible banner component**

Create `components/CookieConsent.jsx` as a `'use client'` component. On mount it reads consent, loads Analytics for `accepted`, and otherwise opens only when no decision exists. It listens for `CONSENT_EVENT`; the handler clears the stored choice and Analytics cookies and reopens the banner. Accept writes `accepted`, calls `loadAnalytics`, and closes. Reject writes `rejected`, calls `clearAnalyticsCookies`, and closes. The rendered dialog uses `aria-labelledby="cookie-consent-title"`, links to `/cookiepolitik`, and contains equal **Afvis** and **Accepter** buttons.

- [ ] **Step 3: Add responsive Bifrost banner styles**

Append component classes to `app/globals.css` for a fixed bottom banner with a high z-index, dark translucent surface, teal accent, responsive stacked layout below 640px, equal-width mobile buttons, and visible `:focus-visible` outlines. Do not alter unrelated global styles.

- [ ] **Step 4: Run the focused tests**

Run: `npm test -- tests/cookie-consent.test.jsx`

Expected: all four consent behavior tests PASS.

- [ ] **Step 5: Commit the consent implementation**

```bash
git add lib/cookie-consent.js components/CookieConsent.jsx app/globals.css
git commit -m "feat: add consent-gated GA4 loader"
```

### Task 3: Root integration and shared footer

**Files:**
- Create: `components/CookieSettingsButton.jsx`
- Create: `components/SiteFooter.jsx`
- Modify: `app/layout.jsx`
- Modify: `app/page.jsx`
- Create: `tests/site-integration.test.mjs`

- [ ] **Step 1: Write failing integration assertions**

Create `tests/site-integration.test.mjs` using `node:test`, `node:assert/strict`, and `readFile`. Assert that:

```js
assert.equal((layout.match(/<CookieConsent\s*\/>/g) || []).length, 1)
assert.match(consentModule, /G-44LJ04547K/)
assert.match(footer, /\/cookiepolitik/)
assert.match(footer, /\/privatlivspolitik/)
assert.match(footer, /Cookieindstillinger/)
assert.doesNotMatch(layout, /googletagmanager\.com/)
```

Also assert both policy route files exist and contain their titles. Add `tests/site-integration.test.mjs` to the Vitest run through its default file matching.

- [ ] **Step 2: Run the integration test and verify failure**

Run: `npm test -- tests/site-integration.test.mjs`

Expected: FAIL because the shared footer, settings button, policy routes, and layout integration do not yet exist.

- [ ] **Step 3: Add the cookie-settings control**

Create `components/CookieSettingsButton.jsx` as a `'use client'` component. Its click handler dispatches `new Event(CONSENT_EVENT)` on `window`. Render it as an unstyled text button that accepts a `className` prop, so it aligns visually with footer links.

- [ ] **Step 4: Extract the shared footer**

Create `components/SiteFooter.jsx` using `next/image`, `next/link`, and `CookieSettingsButton`. Include brand link, contact email, `/cookiepolitik`, `/privatlivspolitik`, cookie settings, CVR 46504372, phone +45 50 65 49 00, and © 2026. Preserve the current footer spacing and colors.

- [ ] **Step 5: Mount consent globally and replace the local footer**

Import and render `<CookieConsent />` once inside `app/layout.jsx` after `{children}`. In `app/page.jsx`, remove the local `Footer` function, import `SiteFooter`, and render `<SiteFooter />` after `</main>`.

- [ ] **Step 6: Run focused tests**

Run: `npm test -- tests/cookie-consent.test.jsx tests/site-integration.test.mjs`

Expected: consent tests pass; route-existence assertions remain red until Task 4.

- [ ] **Step 7: Commit the shared integration**

```bash
git add components/CookieSettingsButton.jsx components/SiteFooter.jsx app/layout.jsx app/page.jsx tests/site-integration.test.mjs
git commit -m "feat: integrate consent controls site-wide"
```

### Task 4: Cookie and privacy policy routes

**Files:**
- Create: `components/PolicyPage.jsx`
- Create: `app/cookiepolitik/page.jsx`
- Create: `app/privatlivspolitik/page.jsx`
- Modify: `app/globals.css`
- Test: `tests/site-integration.test.mjs`

- [ ] **Step 1: Create the shared policy layout**

Create `components/PolicyPage.jsx` with a compact header linking to `/`, a readable `<main>` constrained to approximately 760px, an eyebrow, title, introduction, `children`, and `<SiteFooter />`. Use semantic article structure and the existing Bifrost mark.

- [ ] **Step 2: Create the cookie policy**

Create `app/cookiepolitik/page.jsx` with route metadata and dated Danish content covering: responsible company and contact details; necessary storage; GA4 purpose; measurement ID `G-44LJ04547K`; `_ga` and `_ga_<container-id>` cookies with typical duration; no Analytics before consent; acceptance, rejection, withdrawal via **Cookieindstillinger**; Google as recipient/provider; browser deletion; and policy updates. Link to Google's official Analytics cookie and privacy documentation.

- [ ] **Step 3: Create the privacy policy**

Create `app/privatlivspolitik/page.jsx` with route metadata and dated Danish content covering: Bifrost Solutions, CVR 46504372, phone and email; categories of contact and customer information; purposes and legal bases; hosting/email/Google recipients; transfers where applicable; proportional retention; security; data-subject rights; complaint to Datatilsynet; cookie-policy cross-link; and policy updates. Avoid claiming collection through a web form because the current site uses mail links only.

- [ ] **Step 4: Add focused policy typography styles**

Append only reusable `.policy-*` rules to `app/globals.css` for headings, body copy, lists, links, content spacing, and light/dark colors. Keep layout responsive and maintain a readable line length.

- [ ] **Step 5: Run all tests**

Run: `npm test`

Expected: all consent and integration tests PASS.

- [ ] **Step 6: Commit the legal pages**

```bash
git add components/PolicyPage.jsx app/cookiepolitik/page.jsx app/privatlivspolitik/page.jsx app/globals.css
git commit -m "feat: add cookie and privacy policies"
```

### Task 5: Full verification

**Files:**
- Modify only if verification exposes a defect in an in-scope file.

- [ ] **Step 1: Run lint**

Run: `npm run lint`

Expected: exit code 0 with no ESLint errors.

- [ ] **Step 2: Run the full automated suite**

Run: `npm test`

Expected: all tests pass.

- [ ] **Step 3: Run the production build**

Run: `npm run build`

Expected: Next.js exits successfully and lists `/`, `/cookiepolitik`, and `/privatlivspolitik` as generated routes.

- [ ] **Step 4: Verify the browser flow**

Run the development server and verify at desktop and mobile widths:

1. A fresh browser state shows the banner.
2. Network/DOM contains no `gtag/js` request or tag before acceptance.
3. **Afvis** closes the banner and reload keeps GA4 disabled.
4. **Cookieindstillinger** reopens the banner.
5. **Accepter** creates one tag for `G-44LJ04547K` and reload does not create a duplicate.
6. Both policy routes render, their footer links work, and no horizontal overflow appears.

- [ ] **Step 5: Inspect the final diff**

Run:

```bash
git diff --check
git status --short
```

Expected: no whitespace errors; status contains only intentional implementation changes if any remain uncommitted.
