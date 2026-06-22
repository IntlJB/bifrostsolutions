import CasePage from '@/components/CasePage'
import { cases } from '@/lib/cases'

export const metadata = {
  title: 'Lepas Dressage case | Bifrost Solutions',
  description: 'Se Bifrost Solutions hjemmeside til Lepas Dressage med fokus på opstaldning, faciliteter og dressurfaglighed.',
  alternates: { canonical: '/cases/lepas-dressage' },
}

export default function LepasDressageCasePage() {
  return <CasePage project={cases.lepas} />
}
