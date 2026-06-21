import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { buildPageMetadata } from "@/lib/metadata";
import { components } from "@/data/components";
import { formatCount } from "@/lib/utils";
import ComponentCard from "@/components/gallery/ComponentCard";
import CategoryNav from "@/components/gallery/CategoryNav";
import StyleNav from "@/components/gallery/StyleNav";

export function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Metadata {
  if (!isLocale(params.locale)) return {};
  const dict = getDictionary(params.locale);
  return buildPageMetadata({
    locale: params.locale,
    path: "/components",
    title: dict.gallery.title,
    description: dict.gallery.subtitle,
  });
}

export default function ComponentsPage({
  params,
}: {
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale: Locale = params.locale;
  const dict = getDictionary(locale);

  return (
    <div className="mx-auto max-w-content px-4 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-fg">{dict.gallery.title}</h1>
        <p className="mt-2 text-muted">{dict.gallery.subtitle}</p>
      </header>

      <div className="mb-6">
        <CategoryNav locale={locale} dict={dict} />
      </div>
      <div className="mb-10">
        <StyleNav locale={locale} dict={dict} />
      </div>

      <p className="mb-6 text-sm text-muted">
        {formatCount(dict.gallery.itemsCount, components.length)}
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {components.map((entry) => (
          <ComponentCard
            key={entry.id}
            entry={entry}
            locale={locale}
            dict={dict}
          />
        ))}
      </div>
    </div>
  );
}
