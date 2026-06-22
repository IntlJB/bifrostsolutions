export const MEASUREMENT_ID = 'G-44LJ04547K'
export const CONSENT_STORAGE_KEY = 'bifrost_cookie_consent_v1'
export const CONSENT_EVENT = 'bifrost:open-cookie-settings'
const CONSENT_CHANGE_EVENT = 'bifrost:cookie-consent-changed'

export function readConsent() {
  try {
    return window.localStorage.getItem(CONSENT_STORAGE_KEY)
  } catch {
    return null
  }
}

export function writeConsent(value) {
  try {
    if (value === null) window.localStorage.removeItem(CONSENT_STORAGE_KEY)
    else window.localStorage.setItem(CONSENT_STORAGE_KEY, value)
  } catch {
    // The current page can still honor the choice when storage is unavailable.
  }
  window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT))
}

export function subscribeToConsent(callback) {
  window.addEventListener(CONSENT_CHANGE_EVENT, callback)
  return () => window.removeEventListener(CONSENT_CHANGE_EVENT, callback)
}

export function clearAnalyticsCookies() {
  const names = document.cookie
    .split(';')
    .map(cookie => cookie.split('=')[0].trim())
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
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments)
  }
  window.gtag('js', new Date())
  window.gtag('config', MEASUREMENT_ID)

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`
  script.dataset.googleTag = MEASUREMENT_ID
  document.head.append(script)
}
