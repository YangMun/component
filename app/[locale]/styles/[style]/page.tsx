import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { buildPageMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/site";
import { localeHref, formatCount } from "@/lib/utils";
import { styles, getStyle } from "@/data/styles";
import { getComponentsByStyle } from "@/data/components";
import ComponentCard from "@/components/gallery/ComponentCard";
import StyleNav from "@/components/gallery/StyleNav";
import JsonLd from "@/components/seo/JsonLd";

// Pre-render a page for every style id (combined with each locale).
export function generateStaticParams() {
  return styles.map((style) => ({ style: style.id }));
}

export function generateMetadata({
  params,
}: {
  params: { locale: string; style: string };
}): Metadata {
  if (!isLocale(params.locale)) return {};
  const style = getStyle(params.style);
  if (!style) return {};
  const dict = getDictionary(params.locale);
  return buildPageMetadata({
    locale: params.locale,
    path: `/styles/${style.id}`,
    title: `${style.title[params.locale]} ${dict.gallery.title}`,
    description: style.description[params.locale],
  });
}

export default function StyleDetailPage({
  params,
}: {
  params: { locale: string; style: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale: Locale = params.locale;
  const style = getStyle(params.style);
  if (!style) notFound();
  const dict = getDictionary(locale);
  const items = getComponentsByStyle(style.id);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: dict.gallery.styleTitle,
        item: absoluteUrl(localeHref(locale, "/styles")),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: style.title[locale],
        item: absoluteUrl(localeHref(locale, `/styles/${style.id}`)),
      },
    ],
  };

  return (
    <div className="mx-auto max-w-content px-4 py-12">
      <JsonLd data={breadcrumbJsonLd} />

      <header className="mb-8">
        <h1 className="flex items-center gap-2 text-3xl font-bold text-fg">
          <span aria-hidden="true">{style.icon}</span>
          {style.title[locale]}
        </h1>
        <p className="mt-2 max-w-2xl text-muted">{style.description[locale]}</p>
      </header>

      <div className="mb-10">
        <StyleNav locale={locale} dict={dict} activeId={style.id} />
      </div>

      {items.length === 0 ? (
        <p className="text-muted">{dict.gallery.empty}</p>
      ) : (
        <>
          <p className="mb-6 text-sm text-muted">
            {formatCount(dict.gallery.itemsCount, items.length)}
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((entry) => (
              <ComponentCard
                key={entry.id}
                entry={entry}
                locale={locale}
                dict={dict}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
