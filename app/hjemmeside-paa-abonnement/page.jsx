import MarketingPage from '@/components/MarketingPage'

export const metadata = {
  title: 'Hjemmeside på abonnement til fast pris | Bifrost Solutions',
  description: 'Få hjemmeside på abonnement for 399 kr. ex. moms pr. måned med design, hosting, drift og support inkluderet.',
  alternates: { canonical: '/hjemmeside-paa-abonnement' },
}

const benefits = [
  { title: 'Fast pris fra starten', text: 'Standardløsningen koster 399 kr. ex. moms pr. måned og faktureres hver tredje måned.' },
  { title: 'Ingen opstartsregning', text: 'Design og teknisk opsætning er en del af standardløsningen, så du undgår en stor første faktura.' },
  { title: 'Hosting og drift er med', text: 'SSL, hosting og den løbende tekniske base er inkluderet i den samme aftale.' },
  { title: 'Se designet først', text: 'Du får et gratis og uforpligtende udkast, så du kan vurdere retningen, før du vælger.' },
]

export default function SubscriptionPage() {
  return <MarketingPage eyebrow="Forudsigelig webløsning" title="Hjemmeside på abonnement" intro="Design, hosting og drift samlet til en fast månedlig pris uden en stor opstartsregning." benefits={benefits} details="Abonnementet samler den første hjemmeside, den tekniske drift og din kontakt til os. Ekstra SEO-arbejde eller større specialfunktioner aftales separat, så grundprisen forbliver tydelig." caseLink="/cases/lepas-dressage" />
}
