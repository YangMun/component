// Central i18n configuration. Add a locale here and provide a dictionary in
// ./dictionaries to make the whole site bilingual-ready without touching pages.
export const locales = ["ko", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ko";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export const localeNames: Record<Locale, string> = {
  ko: "한국어",
  en: "English",
};
