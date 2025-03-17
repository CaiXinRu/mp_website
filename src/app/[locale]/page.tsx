import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { use } from 'react'

export default function MainHomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = use(params)
  setRequestLocale(locale)

  const t = useTranslations()

  return (
    <div className='grid grid-cols-2'>
      <div>
        <Button>{t('home')}</Button>
      </div>
      <div className='flex flex-col items-end gap-4'>
        <a href='/spanish.pdf' download>
          <Button>PDF</Button>
        </a>
        <a href='/front_target.csv' download>
          <Button>CSV</Button>
        </a>
      </div>
    </div>
  )
}
