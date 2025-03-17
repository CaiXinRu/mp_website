'use client'

import LocaleSwitcher from '@/components/global/LocalSwitcher'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from '@/components/ui/menubar'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'

export default function Header() {
  const t = useTranslations()
  return (
    <Menubar className='mb-5'>
      <div className='flex px-4 items-center w-full flex-start'>
        <span className='text-red-600 mr-4 text-base'>{t('web-title')}</span>
        <MenubarMenu>
          <MenubarTrigger>
            <Link href={'/'}>{t('home')}</Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>{t('product')}</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <Link href={'/product/e-payment'}>{t('e-payment')}</Link>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <Link href={'/product/smart-device'}>{t('smart-device')}</Link>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>{t('smart-manufacturing')}</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>{t('solution')}</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>{t('e-payment')}</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>{t('smart-bike')}</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>{t('smart-manufacturing')}</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>{t('ai-recognition')}</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>{t('else')}</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>{t('about-us')}</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>{t('company')}</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>{t('vision-and-mission')}</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>{t('brand')}</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>{t('history')}</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>{t('company_partner')}</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </div>
      <LocaleSwitcher />
    </Menubar>
  )
}
