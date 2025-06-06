'use client'

import { Button } from '@/components/ui/button'
import { Menubar } from '@/components/ui/menubar'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations()
  return (
    <Menubar className='mt-5'>
      <div className='flex px-4 items-center w-full justify-end'>
        <Link href={'/contact-us-zod'}>
          <Button variant='link'>{t('contact-us-zod')}</Button>
        </Link>
        <Link href={'/contact-us-yup'}>
          <Button variant='link'>{t('contact-us-yup')}</Button>
        </Link>
        <Link href={'/user-info'}>
          <Button variant='link'>{t('user-info')}</Button>
        </Link>
      </div>
    </Menubar>
  )
}
