'use client'

import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'

export default function MainHomePage() {
  const t = useTranslations()

  return <Button>{t('home')}</Button>
}
