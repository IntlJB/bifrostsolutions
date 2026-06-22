import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import MobileNav from './MobileNav'

export const siteNav = [
  ['Løsningen', '/#loesning'],
  ['Cases', '/cases'],
  ['Pris', '/#pris'],
]

export default function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-zinc-950/10 bg-[#f4f5f3]/85 backdrop-blur-xl dark:border-white/10 dark:bg-[#101112]/85">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:px-8 lg:px-12">
        <Link href="/" className="flex shrink-0 items-center gap-3 text-[15px] font-semibold tracking-[-0.03em] text-zinc-950 dark:text-zinc-50" aria-label="Bifrost Solutions, gå til forsiden">
          <Image src="/bifrost-mark.svg" alt="" width={32} height={32} priority className="size-8" />
          Bifrost Solutions
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primær navigation">
          {siteNav.map(([label, href]) => <Link key={href} href={href} className="text-sm text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50">{label}</Link>)}
        </nav>
        <a href="mailto:kontakt@bifrostsolutions.dk" className="hidden items-center gap-2 whitespace-nowrap rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-semibold text-zinc-50 transition-transform hover:-translate-y-0.5 active:translate-y-px dark:bg-zinc-100 dark:text-zinc-950 lg:flex">
          Få et gratis udkast <ArrowRight size={15} strokeWidth={1.7} />
        </a>
        <MobileNav nav={siteNav} />
      </div>
    </header>
  )
}
