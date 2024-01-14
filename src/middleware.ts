import { NextRequest, NextResponse } from 'next/server';

import { getResponseWithLocaleCookie } from '@/lib/utils/serverSideLocaleUtils';

export async function middleware(req: NextRequest) {
  // redirect to /home if the patch is /
  const url = req.nextUrl.clone();

  if (url.pathname === '/') {
    url.pathname = '/home';
    return NextResponse.redirect(url, { status: 302 });
  }

  return getResponseWithLocaleCookie(req);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt).*)',
  ],
};