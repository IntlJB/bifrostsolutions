import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import CasePreview from '@/components/CasePreview'
import SiteFooter from '@/components/SiteFooter'
import SiteHeader from '@/components/SiteHeader'
import { cases } from '@/lib/cases'

export const metadata = {
  title: 'Cases og kundeprojekter | Bifrost Solutions',
  description: 'Se hjemmesider bygget af Bifrost Solutions til danske virksomheder, blandt andre Carupgrade og Lepas Dressage.',
  alternates: { canonical: '/cases' },
}

export default function CasesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="mx-auto grid min-h-[min(900px,100dvh)] max-w-[1440px] grid-cols-1 items-center gap-12 overflow-hidden px-5 pb-16 pt-28 md:px-8 lg:grid-cols-[.85fr_1.15fr] lg:px-12">
          <div className="relative z-10">
            <p className="font-mono text-[11px] uppercase tracking-[.18em] text-zinc-500 dark:text-zinc-400">Udvalgte kundeprojekter</p>
            <h1 className="mt-7 max-w-3xl text-[clamp(3.8rem,7.5vw,7.4rem)] font-semibold leading-[.88] tracking-[-.075em]">Websites med et klart arbejde.</h1>
            <p className="mt-7 max-w-lg text-lg leading-8 text-zinc-600 dark:text-zinc-300">Se hvordan design, indhold og teknik bliver samlet omkring den enkelte virksomhed.</p>
            <a href="#projekter" className="mt-9 inline-flex items-center gap-3 whitespace-nowrap rounded-full bg-zinc-950 px-6 py-3.5 text-sm font-semibold text-zinc-50 transition-transform hover:-translate-y-0.5 active:translate-y-px dark:bg-zinc-100 dark:text-zinc-950">Se projekterne <ArrowRight size={16} /></a>
          </div>
          <div className="relative min-h-[440px] md:min-h-[600px]" aria-label="Udsnit af Carupgrade og Lepas Dressage">
            <div className="absolute left-0 top-4 h-[78%] w-[78%] overflow-hidden rounded-[16px] border border-zinc-950/10 bg-white shadow-[0_28px_80px_rgba(24,24,27,.16)] dark:border-white/10">
              <Image src="/cases/carupgrade-hero.webp" alt="Carupgrade hjemmeside" fill priority fetchPriority="high" unoptimized sizes="(max-width: 1024px) 78vw, 45vw" className="object-cover object-top" />
            </div>
            <div className="absolute bottom-0 right-0 h-[72%] w-[38%] overflow-hidden rounded-[16px] border border-zinc-950/10 bg-white shadow-[0_28px_80px_rgba(24,24,27,.2)] dark:border-white/10">
              <Image src={cases.lepas.mobile} alt="Lepas Dressage hjemmeside på mobil" fill sizes="(max-width: 1024px) 38vw, 22vw" className="object-cover object-top" />
            </div>
          </div>
        </section>

        <div id="projekter">
          <section className="border-y border-zinc-950/10 dark:border-white/10">
            <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-8 md:py-36 lg:px-12">
              <div className="mb-14 max-w-4xl">
                <p className="text-sm text-zinc-500 dark:text-zinc-400">{cases.carupgrade.industry}</p>
                <h2 className="mt-5 text-[clamp(3.2rem,6vw,6.3rem)] font-medium leading-[.92] tracking-[-.065em]">Carupgrade</h2>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">{cases.carupgrade.summary}</p>
              </div>
              <CasePreview project={cases.carupgrade} compact />
              <div className="mt-9 flex flex-wrap gap-4">
                <Link href="/cases/carupgrade" className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-zinc-950 px-6 py-3.5 text-sm font-semibold text-zinc-50 dark:bg-zinc-100 dark:text-zinc-950">Se casen <ArrowRight size={16} /></Link>
                <a href={cases.carupgrade.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-zinc-950/20 px-6 py-3.5 text-sm font-semibold dark:border-white/20">Besøg websitet <ArrowUpRight size={16} /></a>
              </div>
            </div>
          </section>

          <section className="mx-auto grid max-w-[1440px] grid-cols-1 gap-14 px-5 py-24 md:px-8 md:py-36 lg:grid-cols-[.72fr_1.28fr] lg:items-start lg:px-12">
            <div className="lg:sticky lg:top-28">
              <p className="text-sm text-zinc-500 dark:text-zinc-400">{cases.lepas.industry}</p>
              <h2 className="mt-5 text-[clamp(3.2rem,6vw,6.3rem)] font-medium leading-[.92] tracking-[-.065em]">Lepas Dressage</h2>
              <p className="mt-7 max-w-lg text-lg leading-8 text-zinc-600 dark:text-zinc-300">{cases.lepas.summary}</p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link href="/cases/lepas-dressage" className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-zinc-950 px-6 py-3.5 text-sm font-semibold text-zinc-50 dark:bg-zinc-100 dark:text-zinc-950">Se casen <ArrowRight size={16} /></Link>
                <a href={cases.lepas.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-zinc-950/20 px-6 py-3.5 text-sm font-semibold dark:border-white/20">Besøg websitet <ArrowUpRight size={16} /></a>
              </div>
            </div>
            <CasePreview project={cases.lepas} compact />
          </section>
        </div>

        <section className="border-t border-zinc-950/10 dark:border-white/10">
          <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-8 md:py-36 lg:px-12">
            <h2 className="max-w-4xl text-[clamp(3rem,6vw,6rem)] font-medium leading-[.95] tracking-[-.06em]">Din virksomhed har sin egen opgave.</h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">Fortæl os, hvad kunderne skal forstå. Så viser vi en konkret designretning.</p>
            <a href="mailto:kontakt@bifrostsolutions.dk" className="mt-9 inline-flex items-center gap-3 whitespace-nowrap rounded-full bg-zinc-950 px-6 py-3.5 text-sm font-semibold text-zinc-50 dark:bg-zinc-100 dark:text-zinc-950">Få et gratis udkast <ArrowRight size={16} /></a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
