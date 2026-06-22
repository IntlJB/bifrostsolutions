import MarketingPage from '@/components/MarketingPage'

export const metadata = {
  title: 'Hjemmeside til mindre virksomhed | Bifrost Solutions',
  description: 'Få en professionel hjemmeside til din mindre virksomhed med design, hosting, drift og dansk support til en fast pris.',
  alternates: { canonical: '/hjemmeside-til-mindre-virksomhed' },
}

const benefits = [
  { title: 'Dine ydelser bliver forståelige', text: 'Vi prioriterer det, kunderne skal vide, og bygger en tydelig vej fra første besøg til kontakt.' },
  { title: 'Siden virker på mobilen', text: 'Layout, tekst og kontaktmuligheder bliver bygget til de skærme, dine kunder faktisk bruger.' },
  { title: 'Du får op til seks undersider', text: 'Der er plads til virksomhed, ydelser, cases, kontakt og de sider, som skaber tillid i dit marked.' },
  { title: 'Du har én dansk kontakt', text: 'Design, hosting og almindelige rettelser ligger samme sted, så du ikke skal koordinere flere leverandører.' },
]

export default function SmallBusinessPage() {
  return <MarketingPage eyebrow="Webdesign til mindre virksomheder" title="Hjemmeside til mindre virksomhed" intro="En skarp virksomhedsside, der forklarer din ydelse og gør det let for de rigtige kunder at kontakte dig." benefits={benefits} details="Vi tager ansvar for design, mobilvisning, hosting, SSL og den tekniske drift. Du kan fokusere på virksomheden og kontakte os, når indholdet ændrer sig." caseLink="/cases/carupgrade" />
}
