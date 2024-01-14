import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  // redirect to /home if the patch is /
  const url = req.nextUrl.clone();
  if (url.pathname === '/') {
    url.pathname = '/home';
    return NextResponse.redirect(url, { status: 302 });
  }
  //look for the cookie mdl-locale and set the locale if it doesn't exist set it using the Accept-Language HTTP Header
  const cookie = req.cookies.get('mdl-locale');
  if (!cookie) {
    const locale = 
      req.headers.get('Accept-Language')?.match(/^[a-zA-Z]+/)?.[0]
      ?? 'en';
  
    req.cookies.set('mdl-locale', locale);
  }
  console.log(req.cookies.get('mdl-locale'));
  // log the path of the request
  console.log(url.pathname);
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