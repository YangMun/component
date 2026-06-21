"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { localeHref, cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";
import LocaleSwitcher from "./LocaleSwitcher";

export default function Header({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "";

  const links = [
    { href: localeHref(locale, "/components"), label: dict.nav.components },
    { href: localeHref(locale, "/styles"), label: dict.nav.styles },
    { href: localeHref(locale, "/about"), label: dict.nav.about },
    { href: localeHref(locale, "/contact"), label: dict.nav.contact },
  ];

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-content items-center justify-between gap-4 px-4">
        <Link
          href={localeHref(locale)}
          className="flex items-center gap-2 text-lg font-bold text-fg"
        >
          <span aria-hidden="true">🎨</span>
          <span>{dict.meta.siteName}</span>
        </Link>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label={dict.nav.components}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isActive(link.href)
                  ? "text-brand"
                  : "text-muted hover:text-fg"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <LocaleSwitcher current={locale} label={dict.langSwitch} />
          </div>
          <ThemeToggle label={dict.actions.toggleTheme} />
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-fg md:hidden"
            aria-expanded={open}
            aria-label={open ? dict.actions.closeMenu : dict.actions.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            <span aria-hidden="true">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-surface md:hidden">
          <nav
            className="mx-auto flex max-w-content flex-col gap-1 px-4 py-3"
            aria-label={dict.nav.components}
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium",
                  isActive(link.href)
                    ? "bg-bg text-brand"
                    : "text-muted hover:text-fg"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 px-3">
              <LocaleSwitcher current={locale} label={dict.langSwitch} />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
