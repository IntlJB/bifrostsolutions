'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function CasePreview({ project, compact = false }) {
  const [viewport, setViewport] = useState('desktop')
  const mobile = viewport === 'mobile'
  const image = mobile ? project.mobile : project.desktop
  const size = mobile ? project.mobileSize : project.desktopSize

  return (
    <div className="case-preview">
      <div className="mb-4 flex items-center justify-between gap-4">
        <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Se websitet</p>
        <div role="tablist" aria-label={`Vælg visning af ${project.name}`} className="flex rounded-full border border-zinc-950/15 p-1 dark:border-white/15">
          {['desktop', 'mobile'].map(mode => (
            <button
              key={mode}
              type="button"
              role="tab"
              aria-selected={viewport === mode}
              onClick={() => setViewport(mode)}
              className={`rounded-full px-4 py-2 text-xs font-medium transition-colors ${viewport === mode ? 'bg-zinc-950 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-950' : 'text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50'}`}
            >
              {mode === 'desktop' ? 'Desktop' : 'Mobil'}
            </button>
          ))}
        </div>
      </div>
      <div className={`case-preview__stage ${compact ? 'h-[520px]' : 'h-[min(72dvh,760px)]'} overflow-y-auto rounded-[16px] border border-zinc-950/15 bg-zinc-200/60 p-3 dark:border-white/15 dark:bg-white/[.04] md:p-5`}>
        <div className={`mx-auto overflow-hidden bg-white shadow-[0_24px_70px_rgba(24,24,27,.16)] transition-[max-width] duration-500 ${mobile ? 'max-w-[390px]' : 'max-w-full'}`}>
          <Image src={image} alt={`${project.name} hjemmeside vist på ${mobile ? 'mobil' : 'desktop'}`} width={size.width} height={size.height} sizes={mobile ? '390px' : '(max-width: 1024px) 100vw, 1300px'} priority={compact && project.name === 'Carupgrade'} className="h-auto w-full" />
        </div>
      </div>
    </div>
  )
}
