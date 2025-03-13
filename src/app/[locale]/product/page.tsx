'use client'

import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'

export default function ProductPage() {
  const t = useTranslations()

  return <Button>{t('product')}</Button>
}
