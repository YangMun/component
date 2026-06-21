"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeNames, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

// Swaps the leading locale segment of the current path, preserving the rest so
// the user stays on the same page after switching languages.
export default function LocaleSwitcher({
  current,
  label,
}: {
  current: Locale;
  label: string;
}) {
  const pathname = usePathname() || `/${current}`;
  const segments = pathname.split("/");

  function hrefFor(locale: Locale): string {
    const next = [...segments];
    // segments[0] is "" (leading slash); segments[1] is the locale.
    next[1] = locale;
    return next.join("/") || `/${locale}`;
  }

  return (
    <div className="flex items-center gap-1" aria-label={label}>
      {locales.map((locale) => (
        <Link
          key={locale}
          href={hrefFor(locale)}
          hrefLang={locale}
          aria-current={locale === current ? "true" : undefined}
          className={cn(
            "rounded-md px-2 py-1 text-sm font-medium transition-colors",
            locale === current
              ? "bg-brand text-brand-fg"
              : "text-muted hover:text-fg"
          )}
        >
          {locale.toUpperCase()}
          <span className="sr-only"> — {localeNames[locale]}</span>
        </Link>
      ))}
    </div>
  );
}
