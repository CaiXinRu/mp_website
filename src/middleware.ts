import { auth } from '@/auth'
import createMiddleware from 'next-intl/middleware'
import { NextRequest, NextResponse } from 'next/server'
import { routing } from './i18n/routing'

const protectedRoutes = ["/en/user-info", "/zh/user-info"]

const handleI18nRouting = createMiddleware(routing);

export default async function middleware(request: NextRequest) { 
  let session;
  try {
    session = await auth();
  } catch (error) {
    console.error("Auth error:", error);
    return NextResponse.redirect(new URL('/api/auth/signin', request.url));
  }

  const { pathname } = request.nextUrl
  const isProtected = protectedRoutes.some((route) => pathname.startsWith(route))

  if (isProtected && !session) {
    return NextResponse.redirect(new URL('/api/auth/signin', request.url))
  }

  return handleI18nRouting(request);
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
