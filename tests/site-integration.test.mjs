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
