import type {InitOptions} from 'i18next';

export const FALLBACK_LOCALE = 'en';
export const supportedLocales = ['en', 'es'] as const;
export type Locales = (typeof supportedLocales)[number];

export const LANGUAGE_COOKIE = 'mdl_locale';

export function getOptions(lang = FALLBACK_LOCALE, ns = 'home'): InitOptions {
  return {
    // debug: true, // Set to true to see console logs
    supportedLngs: supportedLocales,
    fallbackLng: FALLBACK_LOCALE,
    lng: lang,
    ns,
  };
}
