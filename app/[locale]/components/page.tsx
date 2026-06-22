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
    <div className="mx-auto max-w-content px-5 py-12 md:px-8">
      <PageHeading
        eyebrow={formatCount(dict.gallery.itemsCount, components.length)}
        title={dict.gallery.title}
        description={dict.gallery.subtitle}
      />

      <div className="mb-6 mt-8">
        <CategoryNav locale={locale} dict={dict} />
      </div>
      <div className="mb-10">
        <StyleNav locale={locale} dict={dict} />
      </div>

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
