import Link from 'next/link'
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from 'lucide-react'
import CasePreview from './CasePreview'
import SiteFooter from './SiteFooter'
import SiteHeader from './SiteHeader'

export default function CasePage({ project }) {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="mx-auto grid min-h-[min(820px,100dvh)] max-w-[1440px] grid-cols-1 items-end gap-12 px-5 pb-20 pt-28 md:px-8 lg:grid-cols-[1.2fr_.8fr] lg:px-12">
          <div>
            <Link href="/cases" className="mb-10 inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-950 dark:hover:text-zinc-50"><ArrowLeft size={15} /> Alle cases</Link>
            <p className="font-mono text-[11px] uppercase tracking-[.18em] text-zinc-500">{project.industry}</p>
            <h1 className="mt-7 text-[clamp(4rem,8vw,8rem)] font-semibold leading-[.88] tracking-[-.075em]">{project.name}</h1>
          </div>
          <p className="max-w-lg text-lg leading-8 text-zinc-600 dark:text-zinc-300">{project.summary}</p>
        </section>

        <section className="mx-auto max-w-[1440px] px-5 pb-24 md:px-8 md:pb-36 lg:px-12"><CasePreview project={project} /></section>

        <section className="border-y border-zinc-950/10 dark:border-white/10">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-16 px-5 py-24 md:px-8 md:py-36 lg:grid-cols-[.8fr_1.2fr] lg:px-12">
            <h2 className="text-[clamp(2.8rem,5vw,5.2rem)] font-medium leading-[.98] tracking-[-.055em]">Opgaven blev gjort tydelig.</h2>
            <div>
              <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">{project.challenge}</p>
              <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
                {project.decisions.map(decision => <div key={decision} className="flex gap-3 rounded-[14px] border border-zinc-950/12 p-5 text-sm leading-6 dark:border-white/12"><Check size={16} className="mt-1 shrink-0 text-[#287872] dark:text-[#84d8d2]" />{decision}</div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-5 py-24 md:px-8 md:py-36 lg:px-12">
          <h2 className="text-[clamp(2.8rem,5vw,5.2rem)] font-medium leading-none tracking-[-.055em]">Det leverede vi.</h2>
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.deliverables.map(item => <div key={item} className="border-t border-zinc-950/20 py-6 text-lg font-medium dark:border-white/20">{item}</div>)}
          </div>
          <div className="mt-16 flex flex-wrap gap-4">
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-zinc-950 px-6 py-3.5 text-sm font-semibold text-zinc-50 dark:bg-zinc-100 dark:text-zinc-950">Besøg websitet <ArrowUpRight size={16} /></a>
            <a href="mailto:kontakt@bifrostsolutions.dk" className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-zinc-950/20 px-6 py-3.5 text-sm font-semibold dark:border-white/20">Få et gratis udkast <ArrowRight size={16} /></a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
