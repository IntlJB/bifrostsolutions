'use client'

import { CONSENT_EVENT } from '../lib/cookie-consent'

export default function CookieSettingsButton({ className = '' }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new Event(CONSENT_EVENT))}
    >
      Cookieindstillinger
    </button>
  )
}
