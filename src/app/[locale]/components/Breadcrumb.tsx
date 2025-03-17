'use client'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { usePathname } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import React from 'react'

export function BreadcrumbGlobal() {
  const pathname = usePathname()
  const t = useTranslations()
  const pathSegments = pathname.split('/').filter(Boolean)
  const breadcrumbs = pathSegments.map((segment, index) => {
    const isLast = index === pathSegments.length - 1
    const noUrlSegments = ['product', 'solution', 'about-us']
    const url =
      noUrlSegments.includes(segment) || isLast
        ? null
        : '/' + pathSegments.slice(0, index + 1).join('/')
    return { label: t(segment), url }
  })

  return (
    <Breadcrumb className='mb-5'>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href='/'>{t('home')}</BreadcrumbLink>
        </BreadcrumbItem>
        {breadcrumbs.map((item) => (
          <React.Fragment key={item.label}>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              {item.url ? (
                <BreadcrumbLink href={item.url}>{item.label}</BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
