import MarketingPage from '@/components/MarketingPage'

export const metadata = {
  title: 'Hjemmeside med hosting og drift | Bifrost Solutions',
  description: 'Saml hjemmeside, hosting, SSL, teknisk drift og support hos én dansk leverandør.',
  alternates: { canonical: '/hjemmeside-med-hosting-og-drift' },
}

const benefits = [
  { title: 'Hosting og SSL er inkluderet', text: 'Siden bliver sat sikkert i drift uden et separat webhotel, du selv skal administrere.' },
  { title: 'Den tekniske base bliver passet', text: 'Vi tager os af den løbende drift, så siden forbliver tilgængelig og teknisk opdateret.' },
  { title: 'Almindelige rettelser er enkle', text: 'Når telefonnummer, tekst eller ydelser ændrer sig, har du ét sted at henvende dig.' },
  { title: 'Ansvar og kontakt er samlet', text: 'Du undgår at blive sendt mellem designer, udvikler og hostingudbyder, når noget skal løses.' },
]

export default function HostingPage() {
  return <MarketingPage eyebrow="Teknik uden ekstra leverandører" title="Hjemmeside med hosting og drift" intro="Én samlet løsning til virksomheden, fra første design til den daglige tekniske drift." benefits={benefits} details="Vi bygger siden, forbinder domænet og driver den tekniske base. Hosting, SSL og support ligger i samme aftale, så ansvar og kontakt ikke bliver spredt." caseLink="/cases/carupgrade" />
}
