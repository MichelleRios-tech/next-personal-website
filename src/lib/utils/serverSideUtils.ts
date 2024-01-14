import "server-only";

import { NextRequest, NextResponse } from 'next/server';
import { ResponseCookies, RequestCookies } from 'next/dist/server/web/spec-extension/cookies';


const availableLocales = ['en', 'es'] as const;
type availableLocales = typeof availableLocales[number];

export const getResponseWithLocaleCookie = (req: NextRequest) => {
  console.log("getResponseWithLocaleCookie");
  const cookie = req.cookies.get('mdl_locale');
  let response = NextResponse.next();
  if (!cookie) {
    const preferredLocale = req.headers.get('Accept-Language')?.match(/^[a-zA-Z]+/)?.[0] ?? 'en';
    const locale = availableLocales.includes(preferredLocale as availableLocales) ? preferredLocale : 'en';
    response.cookies.set('mdl_locale', locale);
    req.cookies.set('mdl_locale', locale);
  }
  console.log("response", response.cookies.get('mdl_locale')?.value);
  return response;
}

export function applySetCookie(req: NextRequest, res: NextResponse): void {
  // parse the outgoing Set-Cookie header
  const setCookies = new ResponseCookies(res.headers);
  // Build a new Cookie header for the request by adding the setCookies
  const newReqHeaders = new Headers(req.headers);
  const newReqCookies = new RequestCookies(newReqHeaders);
  setCookies.getAll().forEach((cookie) => newReqCookies.set(cookie));
  // set “request header overrides” on the outgoing response
  NextResponse.next({
    request: { headers: newReqHeaders },
  }).headers.forEach((value, key) => {
    if (key === 'x-middleware-override-headers' || key.startsWith('x-middleware-request-')) {
      res.headers.set(key, value);
    }
  });
}