import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { buildPageMetadata } from "@/lib/metadata";
import { localeHref, formatCount } from "@/lib/utils";
import { styles } from "@/data/styles";
import { getStyleCount } from "@/data/components";
import PageHeading from "@/components/ui/PageHeading";

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
    <div className="mx-auto max-w-content px-5 py-12 md:px-8">
      <PageHeading
        eyebrow={`${styles.length} ${dict.home.stats.styles}`}
        title={dict.gallery.styleTitle}
        description={dict.gallery.styleSubtitle}
      />

      <ul className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {styles.map((style, i) => (
          <li key={style.id}>
            <Link
              href={localeHref(locale, `/styles/${style.id}`)}
              className="group flex h-full flex-col bg-surface p-6 transition-colors hover:bg-bg"
            >
              <span
                aria-hidden="true"
                className="mb-5 block h-1 w-10"
                style={{ background: style.accent }}
              />
              <div className="flex items-center justify-between">
                <span className="text-2xl" aria-hidden="true">
                  {style.icon}
                </span>
                <span className="mono text-xs text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h2 className="mt-4 font-display text-xl font-bold text-fg">
                {style.title[locale]}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {style.description[locale]}
              </p>
              <p className="eyebrow mt-5">
                {formatCount(dict.gallery.itemsCount, getStyleCount(style.id))}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
