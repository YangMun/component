import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { buildPageMetadata } from "@/lib/metadata";
import { localeHref, formatCount, cn } from "@/lib/utils";
import { styles } from "@/data/styles";
import { getStyleCount } from "@/data/components";

export function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Metadata {
  if (!isLocale(params.locale)) return {};
  const dict = getDictionary(params.locale);
  return buildPageMetadata({
    locale: params.locale,
    path: "/styles",
    title: dict.gallery.styleTitle,
    description: dict.gallery.styleSubtitle,
  });
}

export default function StylesPage({
  params,
}: {
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale: Locale = params.locale;
  const dict = getDictionary(locale);

  return (
    <div className="mx-auto max-w-content px-4 py-12">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-fg">{dict.gallery.styleTitle}</h1>
        <p className="mt-2 max-w-2xl text-muted">{dict.gallery.styleSubtitle}</p>
      </header>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {styles.map((style) => (
          <li key={style.id}>
            <Link
              href={localeHref(locale, `/styles/${style.id}`)}
              className={cn(
                "block h-full rounded-xl border border-border bg-surface p-6 transition-colors hover:border-brand"
              )}
              style={{ borderTopColor: style.accent, borderTopWidth: 3 }}
            >
              <span className="text-3xl" aria-hidden="true">
                {style.icon}
              </span>
              <h2 className="mt-3 font-semibold text-fg">
                {style.title[locale]}
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                {style.description[locale]}
              </p>
              <p className="mt-3 text-xs font-medium text-muted">
                {formatCount(dict.gallery.itemsCount, getStyleCount(style.id))}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
