import { Button } from '@/components/ui/button'
import { setRequestLocale } from 'next-intl/server'
import { use } from 'react'
import { BreadcrumbGlobal } from './components/Breadcrumb'

export default function MainHomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = use(params)
  setRequestLocale(locale)

  return (
    <>
      <BreadcrumbGlobal />
      <div className='flex flex-col items-end gap-4'>
        <a href='/spanish.pdf' download>
          <Button>PDF</Button>
        </a>
        <a href='/front_target.csv' download>
          <Button>CSV</Button>
        </a>
      </div>
    </>
  )
}
