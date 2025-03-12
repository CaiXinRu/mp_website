import { routing } from '@/i18n/routing'
import { NextIntlClientProvider } from 'next-intl'
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from 'next-intl/server'
import { notFound } from 'next/navigation'
import React from 'react'

export async function generateMetadata() {
  const t = await getTranslations()
  return {
    title: {
      template: `%s | ${t('web-title')}`,
      default: `${t('web-title')}`,
    },
    openGraph: {
      title: `${t('web-title')}`,
      description: "Let's explore more Microprogrammmmmmm.",
    },
    metadataBase: new URL('http://localhost:3000'),
    alternates: {
      languages: {
        en: '/en/main',
        zh: '/zh/main',
      },
    },
  }
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function MainLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  const messages = await getMessages()

  setRequestLocale(locale)

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  )
}
