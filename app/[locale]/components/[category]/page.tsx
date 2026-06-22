import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { buildPageMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/site";
import { localeHref, formatCount } from "@/lib/utils";
import { categories, getCategory } from "@/data/categories";
import { getComponentsByCategory } from "@/data/components";
import ComponentCard from "@/components/gallery/ComponentCard";
import CategoryNav from "@/components/gallery/CategoryNav";
import PageHeading from "@/components/ui/PageHeading";
import JsonLd from "@/components/seo/JsonLd";

// Pre-render a page for every category id (combined with each locale).
export function generateStaticParams() {
  return categories.map((category) => ({ category: category.id }));
}

export function generateMetadata({
  params,
}: {
  params: { locale: string; category: string };
}): Metadata {
  if (!isLocale(params.locale)) return {};
  const category = getCategory(params.category);
  if (!category) return {};
  const dict = getDictionary(params.locale);
  return buildPageMetadata({
    locale: params.locale,
    path: `/components/${category.id}`,
    title: `${category.title[params.locale]} ${dict.gallery.title}`,
    description: category.description[params.locale],
  });
}

export default function CategoryPage({
  params,
}: {
  params: { locale: string; category: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale: Locale = params.locale;
  const category = getCategory(params.category);
  if (!category) notFound();
  const dict = getDictionary(locale);
  const items = getComponentsByCategory(category.id);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: dict.gallery.title,
        item: absoluteUrl(localeHref(locale, "/components")),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: category.title[locale],
        item: absoluteUrl(localeHref(locale, `/components/${category.id}`)),
      },
    ],
  };

  return (
    <div className="mx-auto max-w-content px-5 py-12 md:px-8">
      <JsonLd data={breadcrumbJsonLd} />

      <PageHeading
        eyebrow={formatCount(dict.gallery.itemsCount, items.length)}
        icon={category.icon}
        title={category.title[locale]}
        description={category.description[locale]}
      />

      <div className="mb-10 mt-8">
        <CategoryNav locale={locale} dict={dict} activeId={category.id} />
      </div>

      {items.length === 0 ? (
        <p className="text-muted">{dict.gallery.empty}</p>
      ) : (
        <>
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
