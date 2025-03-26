import { auth } from '@/auth'
import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import createMiddleware from 'next-intl/middleware'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { routing } from './i18n/routing'

const protectedRoutes = ["/en/user-info", "/zh/user-info"]

async function getLocale(request: NextRequest): Promise<string | undefined> {
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  // @ts-expect-error locales are readonly
  const setLocales: string[] = routing.locales
  const setDefaultLocale: string = 'en'

  // languages為瀏覽器設定語言喜好順序陣列
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages()

  // 取得語言cookie
  const cookieValue = (await cookies()).get('NEXT_LOCALE')?.value || ''

  // matchLocale會做陣列比對，取最多次出現且順序第一的語言
  const locale = matchLocale(languages, setLocales, setDefaultLocale)

  return cookieValue || locale
}

export default async function middleware(request: NextRequest) { 
  let session;
  try {
    session = await auth();
  } catch (error) {
    console.error("Auth error:", error);
    return NextResponse.redirect(new URL('/api/auth/signin', request.url));
  }

  const locale = getLocale(request)
  const defaultLocale = await locale === 'zh' || await locale === 'zh-TW' ? 'zh' : 'en'

  const { pathname } = request.nextUrl
  const isProtected = protectedRoutes.some((route) => pathname.startsWith(route))

  if (isProtected && !session) {
    return NextResponse.redirect(new URL('/api/auth/signin', request.url))
  }

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
