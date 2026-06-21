'use client'

import { useEffect, useRef } from 'react'
import { Activity, ArrowUpRight } from 'lucide-react'

export default function BridgeSignal() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const move = (event) => {
      const rect = el.getBoundingClientRect()
      el.style.setProperty('--x', `${((event.clientX - rect.left) / rect.width) * 100}%`)
      el.style.setProperty('--y', `${((event.clientY - rect.top) / rect.height) * 100}%`)
    }
    el.addEventListener('pointermove', move)
    return () => el.removeEventListener('pointermove', move)
  }, [])

  return (
    <div ref={ref} className="group absolute inset-0 overflow-hidden rounded-[18px] border border-zinc-950/15 bg-zinc-950 dark:border-white/15 [--x:60%] [--y:45%]">
      <div className="absolute inset-0 opacity-90 [background:radial-gradient(circle_at_var(--x)_var(--y),rgba(112,214,255,.35),transparent_27%),linear-gradient(145deg,#111315_15%,#1a2325_55%,#0d0e0f)] transition-opacity duration-500" />
      <div className="absolute inset-x-[-20%] top-[46%] h-36 -rotate-[10deg] blur-[1px] [background:linear-gradient(90deg,transparent_5%,#70d6ff_30%,#ff70a6_49%,#ffcf56_68%,transparent_94%)] opacity-80 motion-safe:animate-[breathe_7s_ease-in-out_infinite]" />
      <div className="absolute inset-x-[-15%] top-[48%] h-12 -rotate-[10deg] bg-white/80 blur-2xl" />
      <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5 text-zinc-100 md:p-7">
        <span className="font-mono text-[11px] text-white/60">BIFROST SIGNAL</span>
        <Activity size={18} strokeWidth={1.5} />
      </div>
      <div className="absolute inset-x-5 bottom-5 grid grid-cols-[1fr_auto] items-end gap-6 rounded-[14px] border border-white/15 bg-black/25 p-5 text-white backdrop-blur-md md:inset-x-7 md:bottom-7 md:p-6">
        <div><p className="text-xs text-white/55">Fra klik til kontakt</p><p className="mt-2 max-w-xs text-xl font-medium tracking-[-0.04em] md:text-2xl">En kortere vej gennem din digitale forretning.</p></div>
        <ArrowUpRight size={22} strokeWidth={1.4} />
      </div>
    </div>
  )
}
