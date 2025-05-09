'use client'

import { BreadcrumbGlobal } from '@/app/[locale]/components/Breadcrumb'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'

export default function SmartDevicePage() {
  const t = useTranslations()

  return (
    <>
      <BreadcrumbGlobal />
      <Button>{t('smart-device')}</Button>
    </>
  )
}
