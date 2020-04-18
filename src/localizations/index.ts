import fi from "./fi";
import en from "./en";
import { DEFAULT_LOCALE } from "../constants";

interface ILocales {
  [key: string]: {};
}

const locales: ILocales = {
  fi,
  en,
};

export function getLocales(locale: string) {
  const currentLang = locales[locale];
  return currentLang ? currentLang : locales[DEFAULT_LOCALE];
}

export function switchLocale(locale: string) {
  const newLocale = locales[locale];
  if (newLocale) {
    localStorage.setItem("locale", locale);
    return newLocale;
  }
  locales[DEFAULT_LOCALE];
}
