"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { components } from "@/data/components";
import { localeHref, cn } from "@/lib/utils";
import Logo from "@/components/brand/Logo";
import InstallButton from "@/components/pwa/InstallButton";
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
    <header className="sticky top-0 z-40 border-b border-border bg-bg/85 backdrop-blur standalone:pt-[env(safe-area-inset-top)]">
      <div className="mx-auto flex h-16 max-w-content items-center justify-between gap-4 px-5 md:px-8">
        <Link
          href={localeHref(locale)}
          className="text-fg transition-opacity hover:opacity-70"
          aria-label={dict.meta.siteName}
        >
          <Logo siteName={dict.meta.siteName} />
        </Link>

        <nav
          className="hidden items-center gap-7 md:flex"
          aria-label={dict.nav.components}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "eyebrow transition-colors hover:text-fg",
                isActive(link.href) && "text-fg"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span className="mono hidden text-xs text-muted lg:inline">
            {String(components.length).padStart(3, "0")} ◆
          </span>
          <InstallButton label={dict.actions.installApp} />
          <div className="hidden md:block">
            <LocaleSwitcher current={locale} label={dict.langSwitch} />
          </div>
          <ThemeToggle label={dict.actions.toggleTheme} />
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center border border-border text-fg md:hidden standalone:hidden"
            aria-expanded={open}
            aria-label={open ? dict.actions.closeMenu : dict.actions.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            <span aria-hidden="true">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-bg md:hidden">
          <nav
            className="mx-auto flex max-w-content flex-col px-5 py-2"
            aria-label={dict.nav.components}
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "eyebrow border-b border-border py-3.5 transition-colors hover:text-fg",
                  isActive(link.href) && "text-fg"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="py-4">
              <LocaleSwitcher current={locale} label={dict.langSwitch} />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
