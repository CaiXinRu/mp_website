'use client'

import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'

export default function SmartDevicePage() {
  const t = useTranslations()

  return <Button>{t('smart-device')}</Button>
}
