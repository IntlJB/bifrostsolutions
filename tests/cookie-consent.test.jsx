// @vitest-environment jsdom
import '@testing-library/jest-dom/vitest'
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import CookieConsent from '../components/CookieConsent'
import { CONSENT_EVENT, CONSENT_STORAGE_KEY, MEASUREMENT_ID } from '../lib/cookie-consent'

describe('CookieConsent', () => {
  beforeEach(() => {
    const values = new Map()
    Object.defineProperty(window, 'localStorage', {
      configurable: true,
      value: {
        clear: () => values.clear(),
        getItem: key => values.get(key) ?? null,
        removeItem: key => values.delete(key),
        setItem: (key, value) => values.set(key, String(value)),
      },
    })
    window.localStorage.clear()
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
    expect(window.localStorage.getItem(CONSENT_STORAGE_KEY)).toBe('accepted')

    window.dispatchEvent(new Event(CONSENT_EVENT))
    fireEvent.click(await screen.findByRole('button', { name: 'Accepter' }))
    expect(document.querySelectorAll('[data-google-tag]')).toHaveLength(1)
  })

  it('keeps GA4 disabled after rejection', async () => {
    render(<CookieConsent />)
    fireEvent.click(await screen.findByRole('button', { name: 'Afvis' }))

    expect(window.localStorage.getItem(CONSENT_STORAGE_KEY)).toBe('rejected')
    expect(document.querySelector('[data-google-tag]')).toBeNull()
  })

  it('loads GA4 for stored acceptance and reopens settings on request', async () => {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, 'accepted')
    render(<CookieConsent />)

    await waitFor(() => expect(document.querySelectorAll('[data-google-tag]')).toHaveLength(1))
    window.dispatchEvent(new Event(CONSENT_EVENT))

    expect(await screen.findByRole('dialog', { name: /statistikcookies/i })).toBeInTheDocument()
    expect(window.localStorage.getItem(CONSENT_STORAGE_KEY)).toBeNull()
  })
})
