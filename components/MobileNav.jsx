'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function MobileNav({ nav }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="lg:hidden">
      <button type="button" onClick={() => setOpen(value => !value)} aria-expanded={open} aria-label={open ? 'Luk menu' : 'Åbn menu'} className="grid size-10 place-items-center rounded-full border border-zinc-950/15 text-zinc-950 dark:border-white/15 dark:text-zinc-50">
        {open ? <X size={19} /> : <Menu size={19} />}
      </button>
      {open && <nav className="absolute inset-x-4 top-[72px] rounded-[16px] border border-zinc-950/10 bg-[#f4f5f3] p-3 shadow-xl dark:border-white/10 dark:bg-[#171819]" aria-label="Mobil navigation">
        {nav.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="block rounded-[10px] px-4 py-3 text-sm text-zinc-800 hover:bg-black/5 dark:text-zinc-200 dark:hover:bg-white/5">{label}</a>)}
        <a href="mailto:kontakt@bifrostsolutions.dk" className="mt-2 block rounded-[10px] bg-zinc-950 px-4 py-3 text-center text-sm font-semibold text-white dark:bg-zinc-100 dark:text-zinc-950">Få et gratis udkast</a>
      </nav>}
    </div>
  )
}
