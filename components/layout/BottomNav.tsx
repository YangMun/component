"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { localeHref, cn } from "@/lib/utils";

// App-only bottom tab bar. Rendered in the DOM always but shown only in the
// installed app (display-mode: standalone) via the `standalone:` variant, so
// the web/app distinction is purely CSS-driven and flicker-free.
export default function BottomNav({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const pathname = usePathname() || "";

  const items = [
    { href: localeHref(locale), label: dict.nav.home, icon: "◆" },
    { href: localeHref(locale, "/components"), label: dict.nav.components, icon: "▦" },
    { href: localeHref(locale, "/styles"), label: dict.nav.styles, icon: "✦" },
    { href: localeHref(locale, "/about"), label: dict.nav.about, icon: "≡" },
  ];

  function isActive(href: string) {
    const home = localeHref(locale);
    if (href === home) return pathname === home || pathname === `${home}/`;
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <nav
      aria-label={dict.nav.home}
      className="fixed inset-x-0 bottom-0 z-40 hidden border-t border-border bg-bg/95 pb-[env(safe-area-inset-bottom)] backdrop-blur standalone:block"
    >
      <ul className="mx-auto flex max-w-content">
        {items.map((item) => {
          const active = isActive(item.href);
          return (
            <li key={item.href} className="flex-1">
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex flex-col items-center gap-1 py-2.5 transition-colors",
                  active ? "text-fg" : "text-muted"
                )}
              >
                <span aria-hidden="true" className="text-lg leading-none">
                  {item.icon}
                </span>
                <span className="text-[0.65rem] tracking-wide">
                  {item.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
