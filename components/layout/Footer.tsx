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
    { href: localeHref(locale, "/styles"), label: dict.nav.styles },
    { href: localeHref(locale, "/about"), label: dict.nav.about },
    { href: localeHref(locale, "/contact"), label: dict.nav.contact },
  ];
  const legal = [
    { href: localeHref(locale, "/privacy"), label: dict.nav.privacy },
    { href: localeHref(locale, "/terms"), label: dict.nav.terms },
  ];

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <div className="grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="eyebrow mb-4">{dict.meta.siteName}</p>
            <p className="max-w-measure font-display text-2xl font-bold leading-snug tracking-tight text-fg">
              {dict.footer.description}
            </p>
          </div>

          <nav aria-label={dict.footer.sections.explore}>
            <h2 className="eyebrow mb-4">{dict.footer.sections.explore}</h2>
            <ul className="space-y-2.5">
              {explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-fg transition-opacity hover:opacity-60"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={dict.footer.sections.legal}>
            <h2 className="eyebrow mb-4">{dict.footer.sections.legal}</h2>
            <ul className="space-y-2.5">
              {legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-fg transition-opacity hover:opacity-60"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Oversized wordmark — an editorial sign-off. */}
      <div className="overflow-hidden border-t border-border">
        <div className="mx-auto max-w-content px-5 md:px-8">
          <p className="select-none whitespace-nowrap py-6 font-display text-[14vw] font-bold leading-none tracking-tighter text-fg/10">
            {dict.meta.siteName}
          </p>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-content flex-wrap items-center justify-between gap-2 px-5 py-5 md:px-8">
          <span className="eyebrow">
            © {year} {dict.meta.siteName}
          </span>
          <span className="eyebrow">{dict.footer.rights}</span>
        </div>
      </div>
    </footer>
  );
}
