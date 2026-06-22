import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { test } from 'vitest'

const root = path.resolve(import.meta.dirname, '..')
const read = file => readFile(path.join(root, file), 'utf8')

test('mounts one consent controller without an eager Google tag', async () => {
  const [layout, consentModule] = await Promise.all([
    read('app/layout.jsx'),
    read('lib/cookie-consent.js'),
  ])

  assert.equal((layout.match(/<CookieConsent\s*\/>/g) || []).length, 1)
  assert.match(consentModule, /G-44LJ04547K/)
  assert.doesNotMatch(layout, /googletagmanager\.com/)
})

test('footer exposes legal pages and cookie settings', async () => {
  const [footer, settingsButton] = await Promise.all([
    read('components/SiteFooter.jsx'),
    read('components/CookieSettingsButton.jsx'),
  ])

  assert.match(footer, /\/cookiepolitik/)
  assert.match(footer, /\/privatlivspolitik/)
  assert.match(footer, /CookieSettingsButton/)
  assert.match(settingsButton, /Cookieindstillinger/)
})

test('cookie and privacy policy routes exist', async () => {
  const [cookiePolicy, privacyPolicy] = await Promise.all([
    read('app/cookiepolitik/page.jsx'),
    read('app/privatlivspolitik/page.jsx'),
  ])

  assert.match(cookiePolicy, /Cookiepolitik/)
  assert.match(cookiePolicy, /G-44LJ04547K/)
  assert.match(privacyPolicy, /Privatlivspolitik/)
})

test('uses the apex domain consistently and redirects www', async () => {
  const [layout, sitemap, robots, config] = await Promise.all([
    read('app/layout.jsx'),
    read('app/sitemap.js'),
    read('app/robots.js'),
    read('next.config.mjs'),
  ])

  assert.match(layout, /https:\/\/bifrostsolutions\.dk/)
  assert.doesNotMatch(layout, /https:\/\/www\.bifrostsolutions\.dk/)
  assert.match(sitemap, /https:\/\/bifrostsolutions\.dk/)
  assert.doesNotMatch(sitemap, /['"]\/(faq|om-os|vision)['"]/)
  assert.match(robots, /https:\/\/bifrostsolutions\.dk\/sitemap\.xml/)
  assert.match(config, /www\.bifrostsolutions\.dk/)
  assert.match(config, /https:\/\/bifrostsolutions\.dk\/:path\*/)
})

test('ships intent landing pages with unique metadata', async () => {
  const pages = await Promise.all([
    read('app/hjemmeside-til-mindre-virksomhed/page.jsx'),
    read('app/hjemmeside-paa-abonnement/page.jsx'),
    read('app/hjemmeside-med-hosting-og-drift/page.jsx'),
  ])

  assert.match(pages[0], /Hjemmeside til mindre virksomhed/)
  assert.match(pages[1], /Hjemmeside på abonnement/)
  assert.match(pages[2], /Hjemmeside med hosting og drift/)
  pages.forEach(page => assert.match(page, /alternates:\s*{ canonical:/))
})

test('ships a cases index, detail routes and accessible previews', async () => {
  const [header, cases, carupgrade, lepas, preview, caseData] = await Promise.all([
    read('components/SiteHeader.jsx'),
    read('app/cases/page.jsx'),
    read('app/cases/carupgrade/page.jsx'),
    read('app/cases/lepas-dressage/page.jsx'),
    read('components/CasePreview.jsx'),
    read('lib/cases.js'),
  ])

  assert.match(header, /Cases[\s\S]*\/cases/)
  assert.match(cases, /Carupgrade/)
  assert.match(cases, /Lepas Dressage/)
  assert.match(carupgrade, /cases\.carupgrade/)
  assert.match(lepas, /cases\.lepas/)
  assert.match(caseData, /https:\/\/carupgrade\.dk/)
  assert.match(caseData, /https:\/\/lepas-dressage\.vercel\.app/)
  assert.match(preview, /role="tablist"/)
  assert.match(preview, /aria-selected/)
  assert.match(preview, /case-preview/)
})
