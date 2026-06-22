import Image from 'next/image'
import Link from 'next/link'
import SiteFooter from './SiteFooter'

export default function PolicyPage({ eyebrow, title, introduction, children }) {
  return (
    <>
      <header className="border-b border-zinc-950/10 dark:border-white/10">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center px-5 md:px-8 lg:px-12">
          <Link href="/" className="flex items-center gap-3 text-[15px] font-semibold tracking-[-0.03em] text-zinc-950 dark:text-zinc-50">
            <Image src="/bifrost-mark.svg" alt="" width={32} height={32} className="size-8" />
            Bifrost Solutions
          </Link>
        </div>
      </header>
      <main className="policy-page">
        <article>
          <p className="policy-eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="policy-intro">{introduction}</p>
          <div className="policy-content">{children}</div>
        </article>
      </main>
      <SiteFooter />
    </>
  )
}
