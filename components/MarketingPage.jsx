import Link from 'next/link'
import { ArrowRight, Check, ShieldCheck } from 'lucide-react'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'

export default function MarketingPage({ eyebrow, title, intro, benefits, details, caseLink }) {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="mx-auto grid min-h-[min(820px,100dvh)] max-w-[1440px] grid-cols-1 items-end gap-12 px-5 pb-20 pt-28 md:px-8 md:pb-24 lg:grid-cols-[1.25fr_.75fr] lg:px-12">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">{eyebrow}</p>
            <h1 className="mt-7 max-w-5xl text-[clamp(3.5rem,7vw,7rem)] font-semibold leading-[.9] tracking-[-0.07em] text-zinc-950 dark:text-zinc-50">{title}</h1>
            <p className="mt-7 max-w-[620px] text-lg leading-8 text-zinc-600 dark:text-zinc-300">{intro}</p>
          </div>
          <div className="border-l-2 border-[#3d8f8a] pb-1 pl-5">
            <p className="font-mono text-3xl font-medium tracking-[-0.06em]">399 kr.</p>
            <p className="mt-2 text-sm leading-6 text-zinc-500">ex. moms pr. måned<br />faktureres hver 3. måned</p>
          </div>
        </section>

        <section className="border-y border-zinc-950/10 dark:border-white/10">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-x-16 px-5 py-24 md:grid-cols-2 md:px-8 md:py-32 lg:px-12">
            {benefits.map(({ title: benefitTitle, text }) => (
              <article key={benefitTitle} className="border-t border-zinc-950/15 py-8 dark:border-white/15">
                <Check size={18} strokeWidth={1.7} className="mb-7 text-[#287872] dark:text-[#84d8d2]" />
                <h2 className="text-2xl font-medium tracking-[-0.04em]">{benefitTitle}</h2>
                <p className="mt-4 max-w-xl leading-7 text-zinc-600 dark:text-zinc-300">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-5 py-24 md:px-8 md:py-36 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-24">
            <ShieldCheck size={28} strokeWidth={1.4} className="text-[#287872] dark:text-[#84d8d2]" />
            <div>
              <h2 className="max-w-3xl text-[clamp(2.8rem,5vw,5.3rem)] font-medium leading-[.98] tracking-[-0.055em]">Én løsning, du kan regne med.</h2>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">{details}</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="mailto:kontakt@bifrostsolutions.dk" className="inline-flex items-center gap-3 whitespace-nowrap rounded-full bg-zinc-950 px-6 py-3.5 text-sm font-semibold text-zinc-50 transition-transform hover:-translate-y-0.5 active:translate-y-px dark:bg-zinc-100 dark:text-zinc-950">Få et gratis udkast <ArrowRight size={16} /></a>
                <Link href={caseLink} className="inline-flex items-center whitespace-nowrap rounded-full border border-zinc-950/20 px-6 py-3.5 text-sm font-semibold dark:border-white/20">Se relevant case</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
