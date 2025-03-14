import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { use } from 'react'
import TestPage from './hooks/test'

export default function MainHomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = use(params)
  const t = useTranslations()

  setRequestLocale(locale)

  return (
    <div>
      <Button>{t('home')}</Button>
      <TestPage />
    </div>
  )
}
