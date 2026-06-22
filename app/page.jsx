import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Check,
  Gauge,
  Globe2,
  Code2,
  FileSearch,
  MousePointer2,
  RefreshCw,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Zap,
} from 'lucide-react'
import BridgeSignal from '@/components/BridgeSignal'
import SiteFooter from '@/components/SiteFooter'
import SiteHeader from '@/components/SiteHeader'

const included = [
  'Skræddersyet design',
  'Op til 6 undersider',
  'Hosting og SSL',
  'Mobiloptimering',
  'Løbende teknisk drift',
  'Dansk support',
  'SEO-grundpakke',
]

const faqItems = [
  {
    question: 'Hvad koster en hjemmeside hos Bifrost Solutions?',
    answer: 'Den faste pris er 399 kr. ex. moms pr. måned. Beløbet faktureres hver 3. måned, og der er ingen særskilt opstartsregning for standardløsningen.',
  },
  {
    question: 'Hvad er inkluderet i de 399 kr. om måneden?',
    answer: 'Du får skræddersyet webdesign, op til 6 undersider, mobiloptimering, hosting, SSL, teknisk drift, support og en grundlæggende SEO-opsætning.',
  },
  {
    question: 'Er der binding på aftalen?',
    answer: 'Nej. Løsningen er uden lang bindingsperiode. Du bliver, fordi hjemmesiden skaber værdi og bliver passet ordentligt.',
  },
  {
    question: 'Hvad indeholder SEO-grundpakken?',
    answer: 'Vi opsætter sidetitler, meta-beskrivelser, korrekt overskriftsstruktur, mobilvenlighed, teknisk indeksering og et solidt fundament for lokal synlighed i Google.',
  },
  {
    question: 'Kan I også hjælpe med løbende SEO?',
    answer: 'Ja. Har du brug for flere landingssider, søgeordsanalyse, lokalt indhold eller løbende optimering, sammensætter vi en separat SEO-pakke efter dit marked og dine mål.',
  },
  {
    question: 'Hvor hurtigt kan hjemmesiden komme online?',
    answer: 'Tidsplanen afhænger af omfang og materiale. En almindelig virksomhedsside kan ofte gå fra første udkast til lancering på få uger, når feedback og indhold er klar.',
  },
]

function Hero() {
  return (
    <section id="top" className="relative min-h-[100dvh] overflow-hidden pt-16">
      <div className="mx-auto grid min-h-[calc(100dvh-4rem)] max-w-[1440px] grid-cols-1 items-center gap-10 px-5 py-14 md:px-8 lg:grid-cols-[1.08fr_.92fr] lg:px-12 lg:py-16">
        <div className="relative z-10 max-w-[760px]">
          <p className="mb-7 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">Webdesign, hosting og drift</p>
          <h1 className="max-w-[760px] text-[clamp(3.5rem,7.4vw,7.6rem)] font-semibold leading-[0.88] tracking-[-0.075em] text-zinc-950 dark:text-zinc-50">
            Hjemmesider,<br />der arbejder.
          </h1>
          <p className="mt-7 max-w-[470px] text-base leading-7 text-zinc-600 dark:text-zinc-300 md:text-lg">
            Vi designer, hoster og driver din hjemmeside. Du får fart, overblik og én fast kontakt.
          </p>
          <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-end">
            <div className="border-l-2 border-[#3d8f8a] pl-4">
              <p className="font-mono text-3xl font-medium tracking-[-0.06em] text-zinc-950 dark:text-zinc-50">399 kr.</p>
              <p className="mt-1 text-xs leading-5 text-zinc-500">ex. moms pr. måned<br />faktureres hver 3. måned</p>
            </div>
            <a href="mailto:kontakt@bifrostsolutions.dk" className="inline-flex w-fit items-center gap-3 whitespace-nowrap rounded-full bg-zinc-950 px-6 py-3.5 text-sm font-semibold text-zinc-50 transition-transform hover:-translate-y-0.5 active:translate-y-px dark:bg-zinc-100 dark:text-zinc-950">
              Få et gratis udkast <ArrowRight size={16} strokeWidth={1.7} />
            </a>
          </div>
        </div>
        <div className="relative min-h-[360px] lg:min-h-[610px]">
          <BridgeSignal />
        </div>
      </div>
    </section>
  )
}

function ValueSection() {
  const services = [
    ['Et design bygget til din virksomhed', 'Vi starter med dine kunder, dine ydelser og den handling, siden skal skabe. Resultatet bliver ikke en standardtemplate med dit logo sat ind.', Code2],
    ['Teknik du ikke skal holde øje med', 'Hosting, SSL, sikkerhed og den praktiske opsætning bliver samlet hos os. Du undgår at koordinere mellem webhotel, designer og udvikler.', ShieldCheck],
    ['Indhold der fører mod kontakt', 'Vi hjælper med struktur, overskrifter og tydelige kontaktveje, så besøgende hurtigt forstår, hvad du tilbyder, og hvordan de kommer videre.', Target],
    ['En hjemmeside der kan følge med', 'Når telefonnummer, ydelser eller tekst ændrer sig, har du ét sted at henvende dig. Almindelig drift bliver ikke et nyt projekt hver gang.', RefreshCw],
  ]

  return (
    <section className="mx-auto max-w-[1440px] px-5 py-24 md:px-8 md:py-36 lg:px-12">
      <div className="max-w-3xl">
        <h2 className="text-[clamp(2.6rem,5vw,5.2rem)] font-medium leading-none tracking-[-0.055em] text-zinc-950 dark:text-zinc-50">Mere end en flot forside.</h2>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">Du får en samlet webløsning, der gør virksomheden tydelig, nem at finde og nem at kontakte.</p>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-x-16 md:grid-cols-2">
        {services.map(([title, text, Icon]) => (
          <article key={title} className="border-t border-zinc-950/15 py-8 dark:border-white/15 md:py-10">
            <Icon size={21} strokeWidth={1.5} className="mb-8 text-[#3d8f8a] dark:text-[#84d8d2]" />
            <h3 className="max-w-lg text-2xl font-medium tracking-[-0.04em] text-zinc-950 dark:text-zinc-50">{title}</h3>
            <p className="mt-4 max-w-xl leading-7 text-zinc-600 dark:text-zinc-300">{text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function SeoSection() {
  const foundation = [
    'Sidetitler og meta-beskrivelser',
    'Korrekt H1-H3 struktur',
    'Teknisk indeksering og sitemap',
    'Mobilvenligt og hurtigt layout',
    'Grundlag for lokal synlighed',
    'Billedtekster og interne links',
  ]

  return (
    <section className="border-y border-zinc-950/10 dark:border-white/10" id="seo">
      <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-8 md:py-36 lg:px-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
          <div>
            <Search size={25} strokeWidth={1.4} className="mb-10 text-[#3d8f8a] dark:text-[#84d8d2]" />
            <h2 className="text-[clamp(2.6rem,5vw,5.2rem)] font-medium leading-[.98] tracking-[-0.055em] text-zinc-950 dark:text-zinc-50">En stærk side skal også kunne findes.</h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">Alle hjemmesider leveres med en SEO-grundpakke. Den giver Google de rigtige tekniske signaler og dine kunder en klar vej ind på siden.</p>
          </div>
          <div className="lg:pt-16">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {foundation.map(item => <div key={item} className="flex items-start gap-3 rounded-[14px] border border-zinc-950/12 bg-white/40 p-5 text-sm leading-6 text-zinc-700 dark:border-white/12 dark:bg-white/[0.025] dark:text-zinc-300"><Check size={16} strokeWidth={1.8} className="mt-1 shrink-0 text-[#287872] dark:text-[#84d8d2]" />{item}</div>)}
            </div>
            <div className="mt-8 border-t border-zinc-950/15 pt-8 dark:border-white/15">
              <div className="flex gap-4"><FileSearch size={21} strokeWidth={1.5} className="mt-1 shrink-0 text-[#3d8f8a] dark:text-[#84d8d2]" /><div><h3 className="text-xl font-medium tracking-[-0.03em] text-zinc-950 dark:text-zinc-50">Har du større ambitioner i Google?</h3><p className="mt-3 max-w-2xl leading-7 text-zinc-600 dark:text-zinc-300">Vi kan udvide med søgeordsanalyse, lokale landingssider, indholdsplan og løbende optimering. Omfang og pris aftales ud fra konkurrencen i din branche.</p></div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProcessSection() {
  const process = [
    ['Fortæl os om virksomheden', 'Vi spørger ind til kunder, ydelser, konkurrenter og det vigtigste mål med hjemmesiden. Du behøver ikke have en færdig kravspecifikation.'],
    ['Se retningen før du vælger', 'Du får et gratis og uforpligtende designudkast. Her kan du se struktur, visuel retning og den vigtigste kunderejse.'],
    ['Gør siden klar til kunder', 'Vi finpudser tekst og design, tester på mobil, opsætter formularer og forbinder domænet, før siden bliver lanceret.'],
    ['Lad os passe driften', 'Efter lancering holder vi øje med hosting, SSL og den tekniske base. Du kontakter os, når indholdet skal justeres.'],
  ]
  return (
    <section className="mx-auto max-w-[1440px] px-5 py-24 md:px-8 md:py-36 lg:px-12" id="proces">
      <h2 className="max-w-4xl text-[clamp(2.6rem,5vw,5.2rem)] font-medium leading-none tracking-[-0.055em] text-zinc-950 dark:text-zinc-50">Fra første samtale til stabil drift.</h2>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">Processen er enkel, fordi du ikke skal styre teknik, hosting og design hos forskellige leverandører.</p>
      <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
        {process.map(([title, text]) => <article key={title} className="border-t border-zinc-950/15 pt-7 dark:border-white/15"><h3 className="text-xl font-medium tracking-[-0.035em] text-zinc-950 dark:text-zinc-50">{title}</h3><p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-300">{text}</p></article>)}
      </div>
    </section>
  )
}

function FaqSection() {
  return (
    <section className="border-t border-zinc-950/10 dark:border-white/10" id="faq">
      <div className="mx-auto max-w-[1100px] px-5 py-24 md:px-8 md:py-36">
        <h2 className="text-[clamp(2.6rem,5vw,5.2rem)] font-medium leading-none tracking-[-0.055em] text-zinc-950 dark:text-zinc-50">Det praktiske, før du beslutter dig.</h2>
        <div className="mt-14 border-t border-zinc-950/15 dark:border-white/15">
          {faqItems.map(item => <details key={item.question} className="group border-b border-zinc-950/15 py-6 dark:border-white/15"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium text-zinc-950 dark:text-zinc-50"><span>{item.question}</span><span className="text-2xl font-light text-zinc-500 transition-transform group-open:rotate-45">+</span></summary><p className="mt-4 max-w-3xl pr-12 leading-7 text-zinc-600 dark:text-zinc-300">{item.answer}</p></details>)}
        </div>
      </div>
    </section>
  )
}

function PainSolution() {
  return (
    <section id="loesning" className="border-y border-zinc-950/10 dark:border-white/10">
      <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-8 md:py-36 lg:px-12">
        <h2 className="max-w-[1000px] text-[clamp(2.6rem,5.2vw,5.7rem)] font-medium leading-[0.98] tracking-[-0.06em] text-zinc-950 dark:text-zinc-50">
          Et website skal skabe kunder. Ikke flere leverandører.
        </h2>
        <div className="mt-16 grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-16">
          <article className="border-t border-zinc-950/15 py-7 dark:border-white/15">
            <p className="mb-10 text-sm text-zinc-500">Den gamle model</p>
            <h3 className="max-w-md text-2xl font-medium tracking-[-0.035em] text-zinc-950 dark:text-zinc-50">Langsom hosting. Uklare regninger. Fem led mellem dig og en rettelse.</h3>
          </article>
          <article className="border-t border-zinc-950/15 py-7 dark:border-white/15 md:mt-24">
            <p className="mb-10 text-sm text-zinc-500">Bifrost-modellen</p>
            <h3 className="max-w-md text-2xl font-medium tracking-[-0.035em] text-zinc-950 dark:text-zinc-50">Én løsning, én pris og et website, der bliver passet efter lancering.</h3>
            <div className="mt-10 flex flex-wrap gap-2">
              {['Design', 'Hosting', 'Drift', 'Support'].map(item => <span key={item} className="rounded-full border border-zinc-950/15 px-4 py-2 text-sm text-zinc-700 dark:border-white/15 dark:text-zinc-300">{item}</span>)}
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

function Dashboard() {
  const rows = [
    ['Oppetid', 'Stabil', ShieldCheck],
    ['SSL', 'Aktivt', Globe2],
    ['Mobil', 'Optimeret', MousePointer2],
  ]
  return (
    <section id="overblik" className="mx-auto max-w-[1440px] px-5 py-24 md:px-8 md:py-36 lg:px-12">
      <div className="max-w-3xl">
        <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-medium leading-none tracking-[-0.055em] text-zinc-950 dark:text-zinc-50">Alt er synligt.<br />Intet er dit problem.</h2>
        <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">Performance, hosting og trafik samlet i et roligt overblik. Vi holder øje med resten.</p>
      </div>
      <div className="mt-16 grid overflow-hidden rounded-[18px] border border-zinc-950/15 bg-white/55 dark:border-white/15 dark:bg-white/[0.035] lg:grid-cols-[1.35fr_.65fr]">
        <div className="border-b border-zinc-950/10 p-5 dark:border-white/10 md:p-8 lg:border-b-0 lg:border-r">
          <div className="flex items-center justify-between">
            <div><p className="text-sm font-medium text-zinc-950 dark:text-zinc-50">Performance</p><p className="mt-1 text-xs text-zinc-500">Seneste 30 dage</p></div>
            <Gauge size={20} strokeWidth={1.5} className="text-zinc-500" />
          </div>
          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3">
            <div><strong className="font-mono text-4xl font-medium tracking-[-0.06em] text-zinc-950 dark:text-zinc-50">94</strong><p className="mt-2 text-xs text-zinc-500">Performance</p></div>
            <div><strong className="font-mono text-4xl font-medium tracking-[-0.06em] text-zinc-950 dark:text-zinc-50">1.2s</strong><p className="mt-2 text-xs text-zinc-500">Indlæsning</p></div>
            <div className="col-span-2 md:col-span-1"><strong className="font-mono text-4xl font-medium tracking-[-0.06em] text-zinc-950 dark:text-zinc-50">+18%</strong><p className="mt-2 text-xs text-zinc-500">Organisk trafik</p></div>
          </div>
          <div className="mt-14 flex h-40 items-end gap-2" aria-label="Eksempel på trafikudvikling">
            {[35,42,38,55,51,68,63,78,73,84,79,92].map((height, index) => <span key={index} className="flex-1 rounded-t-[5px] bg-zinc-950/10 transition-colors hover:bg-[#3d8f8a] dark:bg-white/10 dark:hover:bg-[#70cfc9]" style={{height: `${height}%`}} />)}
          </div>
        </div>
        <div className="p-5 md:p-8">
          <p className="text-sm font-medium text-zinc-950 dark:text-zinc-50">Systemstatus</p>
          <div className="mt-9 space-y-0">
            {rows.map(([label, status, Icon]) => <div key={label} className="flex items-center justify-between border-b border-zinc-950/10 py-5 last:border-0 dark:border-white/10"><span className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-300"><Icon size={17} strokeWidth={1.5} />{label}</span><span className="text-sm font-medium text-[#287872] dark:text-[#84d8d2]">{status}</span></div>)}
          </div>
          <div className="mt-12 rounded-[14px] bg-zinc-950 p-5 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-950">
            <Zap size={18} strokeWidth={1.6} />
            <p className="mt-7 text-sm font-medium">Vi holder siden hurtig, sikker og online.</p>
          </div>
        </div>
      </div>
      <p className="mt-3 max-w-2xl text-xs leading-5 text-zinc-500">Dashboardet viser eksempeldata, indtil analytics, oppetid og PageSpeed er forbundet. Derefter opdateres tallene automatisk.</p>
    </section>
  )
}

function CaseSection() {
  return (
    <section id="case" className="border-y border-zinc-950/10 dark:border-white/10">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 lg:grid-cols-[.85fr_1.15fr]">
        <div className="relative min-h-[420px] overflow-hidden lg:min-h-[720px]">
          <Image src="/bifrost-editorial-bridge.webp" alt="Moderne nordisk bro i morgendis" fill sizes="(max-width: 1024px) 100vw, 46vw" className="object-cover" />
        </div>
        <div className="flex items-center px-5 py-20 md:px-12 lg:px-20">
          <figure>
            <Sparkles size={22} strokeWidth={1.4} className="mb-12 text-[#3d8f8a]" />
            <blockquote className="max-w-[750px] text-[clamp(2.2rem,4.3vw,4.7rem)] font-medium leading-[1.03] tracking-[-0.055em] text-zinc-950 dark:text-zinc-50">
              “Nu føles hjemmesiden som en del af forretningen. Ikke som endnu en teknisk opgave.”
            </blockquote>
            <figcaption className="mt-10 text-sm text-zinc-500">Frederik<br /><a href="https://carupgrade.dk" className="text-zinc-950 underline decoration-zinc-950/25 underline-offset-4 transition-colors hover:text-[#287872] dark:text-zinc-200 dark:decoration-white/25 dark:hover:text-[#84d8d2]">Carupgrade.dk</a></figcaption>
            <Link href="/cases" className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-zinc-950 dark:text-zinc-50">Se alle cases <ArrowRight size={16} /></Link>
          </figure>
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  return (
    <section id="pris" className="mx-auto max-w-[1440px] px-5 py-24 md:px-8 md:py-36 lg:px-12">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[.85fr_1.15fr] lg:gap-24">
        <div>
          <h2 className="text-[clamp(2.8rem,5.3vw,5.7rem)] font-medium leading-[0.96] tracking-[-0.06em] text-zinc-950 dark:text-zinc-50">Én pris.<br />Hele vejen.</h2>
          <p className="mt-7 max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-300">Ingen opstartsregning. Ingen binding. Prisen faktureres hver 3. måned, og du ser designretningen, før du beslutter dig.</p>
        </div>
        <div className="border-t border-zinc-950/20 pt-7 dark:border-white/20">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div><p className="text-sm text-zinc-500">Komplet hjemmeside</p><p className="mt-3 text-xl font-medium text-zinc-950 dark:text-zinc-50">Design, hosting og drift</p></div>
            <div className="sm:text-right"><strong className="font-mono text-5xl font-medium tracking-[-0.07em] text-zinc-950 dark:text-zinc-50">399 kr.</strong><p className="mt-2 text-xs leading-5 text-zinc-500">ex. moms pr. måned<br />faktureres hver 3. måned</p></div>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2">
            {included.map(item => <div key={item} className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300"><Check size={16} strokeWidth={1.8} className="text-[#287872] dark:text-[#84d8d2]" />{item}</div>)}
          </div>
          <a href="mailto:kontakt@bifrostsolutions.dk" className="mt-12 inline-flex items-center gap-3 whitespace-nowrap rounded-full bg-zinc-950 px-6 py-3.5 text-sm font-semibold text-zinc-50 transition-transform hover:-translate-y-0.5 active:translate-y-px dark:bg-zinc-100 dark:text-zinc-950">Få et gratis udkast <ArrowRight size={16} strokeWidth={1.7} /></a>
        </div>
      </div>
    </section>
  )
}

export default function Page() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Bifrost Solutions',
    url: 'https://bifrostsolutions.dk',
    email: 'kontakt@bifrostsolutions.dk',
    areaServed: 'DK',
    description: 'Webbureau for danske virksomheder med webdesign, hosting, drift og SEO samlet i én løsning.',
    offers: {
      '@type': 'Offer',
      price: '399',
      priceCurrency: 'DKK',
      description: 'Pris ex. moms pr. måned. Faktureres hver 3. måned.',
    },
  }
  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(item => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
  }
  return <><SiteHeader /><main><Hero /><PainSolution /><ValueSection /><SeoSection /><Dashboard /><ProcessSection /><CaseSection /><Pricing /><FaqSection /></main><SiteFooter /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([structuredData, faqData]) }} /></>
}
