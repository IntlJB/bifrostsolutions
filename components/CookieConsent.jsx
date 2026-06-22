'use client'

import { useEffect, useRef, useSyncExternalStore } from 'react'
import {
  clearAnalyticsCookies,
  CONSENT_EVENT,
  loadAnalytics,
  readConsent,
  subscribeToConsent,
  writeConsent,
} from '../lib/cookie-consent'

export default function CookieConsent() {
  const consent = useSyncExternalStore(subscribeToConsent, readConsent, () => 'server')
  const open = consent === null
  const rejectButton = useRef(null)

  useEffect(() => {
    if (consent === 'accepted') loadAnalytics()
  }, [consent])

  useEffect(() => {
    function reopenSettings() {
      writeConsent(null)
      clearAnalyticsCookies()
    }

    window.addEventListener(CONSENT_EVENT, reopenSettings)
    return () => window.removeEventListener(CONSENT_EVENT, reopenSettings)
  }, [])

  useEffect(() => {
    if (open) rejectButton.current?.focus()
  }, [open])

  function accept() {
    writeConsent('accepted')
    loadAnalytics()
  }

  function reject() {
    writeConsent('rejected')
    clearAnalyticsCookies()
  }

  if (!open) return null

  return (
    <section className="cookie-consent" role="dialog" aria-labelledby="cookie-consent-title">
      <div className="cookie-consent__content">
        <div className="cookie-consent__copy">
          <h2 id="cookie-consent-title">Vi bruger statistikcookies</h2>
          <p>
            Med dit samtykke bruger vi Google Analytics til at forstå trafikken og forbedre hjemmesiden.{' '}
            <a href="/cookiepolitik">Læs cookiepolitikken</a>.
          </p>
        </div>
        <div className="cookie-consent__actions">
          <button ref={rejectButton} type="button" onClick={reject}>Afvis</button>
          <button type="button" className="cookie-consent__accept" onClick={accept}>Accepter</button>
        </div>
      </div>
    </section>
  )
}
