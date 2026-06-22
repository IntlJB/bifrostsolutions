import { Geist, Geist_Mono } from 'next/font/google'
import CookieConsent from '../components/CookieConsent'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata = {
  metadataBase: new URL('https://bifrostsolutions.dk'),
  title: 'Hjemmeside til 399 kr. pr. måned | Bifrost Solutions',
  description: 'Få en professionel hjemmeside med webdesign, hosting, SSL, drift, support og SEO-grundpakke til 399 kr. ex. moms pr. måned. Faktureres hver 3. måned.',
  keywords: ['webbureau', 'hjemmeside til virksomhed', 'billig hjemmeside', 'webdesign', 'hosting', 'SEO', 'hjemmeside 399 kr'],
  alternates: { canonical: '/' },
  icons: { icon: '/bifrost-mark.svg', shortcut: '/bifrost-mark.svg', apple: '/bifrost-mark.svg' },
  openGraph: {
    title: 'Professionel hjemmeside til 399 kr. pr. måned',
    description: 'Webdesign, hosting, drift, support og SEO-grundpakke samlet hos Bifrost Solutions.',
    locale: 'da_DK',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Bifrost Solutions webdesign, hosting og drift' }],
  },
  twitter: { card: 'summary_large_image', title: 'Hjemmeside til 399 kr. pr. måned', description: 'Design, hosting, drift og SEO samlet i én løsning.', images: ['/og-image.png'] },
}

export default function RootLayout({ children }) {
  return (
    <html lang="da" className={`${geist.variable} ${geistMono.variable}`}>
      <body>{children}<CookieConsent /></body>
    </html>
  )
}
