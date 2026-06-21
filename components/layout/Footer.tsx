import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { localeHref } from "@/lib/utils";

export default function Footer({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const year = new Date().getFullYear();

  const explore = [
    { href: localeHref(locale, "/components"), label: dict.nav.components },
    { href: localeHref(locale, "/about"), label: dict.nav.about },
    { href: localeHref(locale, "/contact"), label: dict.nav.contact },
  ];
  const legal = [
    { href: localeHref(locale, "/privacy"), label: dict.nav.privacy },
    { href: localeHref(locale, "/terms"), label: dict.nav.terms },
  ];

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-content gap-8 px-4 py-12 sm:grid-cols-2 md:grid-cols-4">
        <div className="sm:col-span-2">
          <div className="flex items-center gap-2 text-lg font-bold text-fg">
            <span aria-hidden="true">🎨</span>
            <span>{dict.meta.siteName}</span>
          </div>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            {dict.footer.description}
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-fg">
            {dict.footer.sections.explore}
          </h2>
          <ul className="mt-3 space-y-2">
            {explore.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted transition-colors hover:text-fg"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-fg">
            {dict.footer.sections.legal}
          </h2>
          <ul className="mt-3 space-y-2">
            {legal.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted transition-colors hover:text-fg"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-content px-4 py-6 text-center text-sm text-muted">
          © {year} {dict.meta.siteName}. {dict.footer.rights}
        </div>
      </div>
    </footer>
  );
}
