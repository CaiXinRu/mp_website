import { routing } from '@/i18n/routing'
import { NextIntlClientProvider } from 'next-intl'
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from 'next-intl/server'
import { Inter } from 'next/font/google'
import { notFound } from 'next/navigation'
import Footer from './components/Footer'
import Header from './components/Header'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata() {
  const t = await getTranslations()
  return {
    title: `${t('web-title')}`,
    description: "Let's explore more Microprogrammmmmmm.",
  }
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <div className='max-w-3xl min-h-screen py-5 mx-auto flex flex-col'>
            <div>
              <Header />
            </div>
            <div className='flex-1'>{children}</div>
            <div>
              <Footer />
            </div>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
