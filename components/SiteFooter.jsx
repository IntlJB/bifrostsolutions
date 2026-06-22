import Image from 'next/image'
import Link from 'next/link'
import CookieSettingsButton from './CookieSettingsButton'

const linkClass = 'transition-colors hover:text-zinc-950 focus-visible:text-zinc-950 dark:hover:text-zinc-50 dark:focus-visible:text-zinc-50'

export default function SiteFooter() {
  return (
    <footer className="border-t border-zinc-950/10 dark:border-white/10">
      <div className="mx-auto max-w-[1440px] px-5 py-10 md:px-8 lg:px-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <Link href="/" className="flex shrink-0 items-center gap-3 text-[15px] font-semibold tracking-[-0.03em] text-zinc-950 dark:text-zinc-50" aria-label="Bifrost Solutions, gå til forsiden">
            <Image src="/bifrost-mark.svg" alt="" width={32} height={32} className="size-8" />
            Bifrost Solutions
          </Link>
          <div className="flex max-w-3xl flex-col gap-4 text-sm text-zinc-500 dark:text-zinc-400 md:items-end">
            <nav className="flex flex-wrap gap-x-6 gap-y-3" aria-label="Juridisk navigation">
              <a href="mailto:kontakt@bifrostsolutions.dk" className={linkClass}>kontakt@bifrostsolutions.dk</a>
              <Link href="/cookiepolitik" className={linkClass}>Cookiepolitik</Link>
              <Link href="/privatlivspolitik" className={linkClass}>Privatlivspolitik</Link>
              <CookieSettingsButton className={`${linkClass} cursor-pointer bg-transparent p-0 text-left font-inherit`} />
            </nav>
            <p className="m-0 leading-6">Bifrost Solutions, CVR 46504372<br />+45 50 65 49 00, © 2026</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
