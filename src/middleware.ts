import { NextRequest, NextResponse } from 'next/server';

import { getResponseWithLocaleCookie, applySetCookie } from '@/lib/utils/serverSideUtils';

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  if (url.pathname === '/') {
    url.pathname = '/home';
    return NextResponse.redirect(url, { status: 302 });
  }
  const response = getResponseWithLocaleCookie(req);

  // workaround suggested on https://github.com/vercel/next.js/issues/49442#issuecomment-1679807704
  // allow cookie() to read the cookies from the response without having to wait for the response to be sent
  // check issue https://github.com/vercel/next.js/issues/49442
  applySetCookie(req, response);

  return response;
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
