import type { Locale } from "@/i18n/config";

// Tiny className combiner (avoids pulling in a dependency for this).
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

// Build a locale-prefixed href, e.g. localeHref("en", "/components") => "/en/components".
export function localeHref(locale: Locale, path = "/"): string {
  const clean = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${clean}`;
}

// Replace the {count} placeholder in a localized template (kept as a plain
// string so dictionaries stay serializable across the server/client boundary).
export function formatCount(template: string, count: number): string {
  return template.replace("{count}", String(count));
}
