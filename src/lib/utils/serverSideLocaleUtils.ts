import "server-only";

import { NextRequest, NextResponse } from 'next/server';

const availableLocales = ['en', 'es'] as const;
type availableLocales = typeof availableLocales[number];

export const getResponseWithLocaleCookie = (req: NextRequest) => {
  const cookie = req.cookies.get('mdl_locale');
  let response = NextResponse.next();
  if (!cookie) {
    const preferredLocale = req.headers.get('Accept-Language')?.match(/^[a-zA-Z]+/)?.[0] ?? 'en';
    const locale = availableLocales.includes(preferredLocale as availableLocales) ? preferredLocale : 'en';
    response.cookies.set('mdl_locale', locale);
  }
  return response;
}
