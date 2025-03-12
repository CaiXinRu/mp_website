import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import createMiddleware from 'next-intl/middleware'
import { NextRequest } from 'next/server'
import { routing } from './i18n/routing'

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  // @ts-expect-error locales are readonly
  const setLocales: string[] = routing.locales
  const setDefaultLocale: string = 'en'

  // languages為瀏覽器設定語言喜好順序陣列
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages()

  // matchLocale會做陣列比對，取最多次出現且順序第一的語言
  const locale = matchLocale(languages, setLocales, setDefaultLocale)

  return locale
}

export default function middleware(request: NextRequest) {
  const locale = getLocale(request)
  const defaultLocale = locale === 'zh' || locale === 'zh-TW' ? 'zh' : 'en'

  return createMiddleware({
    ...routing,
    defaultLocale,
  })(request)
}

export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(zh|en)/:path*',

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
}
