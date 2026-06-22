import CasePage from '@/components/CasePage'
import { cases } from '@/lib/cases'

export const metadata = {
  title: 'Carupgrade case | Bifrost Solutions',
  description: 'Se hvordan Bifrost Solutions byggede en tydelig og serviceorienteret hjemmeside til det mobile værksted Carupgrade.',
  alternates: { canonical: '/cases/carupgrade' },
}

export default function CarupgradeCasePage() {
  return <CasePage project={cases.carupgrade} />
}
