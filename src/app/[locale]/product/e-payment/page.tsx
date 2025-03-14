'use client'

import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'

export default function PEPaymentPage() {
  const t = useTranslations()

  return <Button>{t('e-payment')}</Button>
}
