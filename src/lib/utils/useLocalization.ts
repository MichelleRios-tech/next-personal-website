import { useEffect, useState } from "react";

type Dictionary = {
  [key: string]: string;
};

export const useLocalization = (ns: string, locale: string) => {
  const [dictionary, setDictionary] = useState<Dictionary>({});

  useEffect(() => {
    const importDictionary = async () => {
      const dictionary = await import(`@/i18n/locales/${locale}/${ns}.json`);
      setDictionary(dictionary.default);
    };
    importDictionary();
  }, [ns, locale]);
  const $t = (key: string) => {
    return dictionary[key] ?? key;
  }
  return { $t };
};
