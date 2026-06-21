import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { buildPageMetadata } from "@/lib/metadata";
import { localeHref, formatCount } from "@/lib/utils";
import { absoluteUrl } from "@/lib/site";
import { categories } from "@/data/categories";
import { getComponentCount, getFeaturedComponents } from "@/data/components";
import ComponentCard from "@/components/gallery/ComponentCard";
import JsonLd from "@/components/seo/JsonLd";

export function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Metadata {
  if (!isLocale(params.locale)) return {};
  const dict = getDictionary(params.locale);
  return buildPageMetadata({
    locale: params.locale,
    path: "/",
    title: `${dict.meta.siteName} — ${dict.meta.tagline}`,
    description: dict.meta.description,
  });
}

export default function HomePage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale: Locale = params.locale;
  const dict = getDictionary(locale);
  const featured = getFeaturedComponents(6);

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: dict.meta.siteName,
    description: dict.meta.description,
    url: absoluteUrl(localeHref(locale)),
    inLanguage: locale,
  };

  return (
    <>
      <JsonLd data={websiteJsonLd} />

      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-content px-4 py-20 text-center sm:py-28">
          <p className="mb-4 inline-block rounded-full border border-border px-3 py-1 text-xs font-medium text-muted">
            {dict.meta.tagline}
          </p>
          <h1 className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-fg sm:text-5xl">
            {dict.home.heroTitle}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            {dict.home.heroSubtitle}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={localeHref(locale, "/components")}
              className="rounded-lg bg-brand px-6 py-3 font-semibold text-brand-fg transition-opacity hover:opacity-90"
            >
              {dict.home.heroCtaPrimary}
            </Link>
            <Link
              href={localeHref(locale, "/about")}
              className="rounded-lg border border-border px-6 py-3 font-semibold text-fg transition-colors hover:bg-surface"
            >
              {dict.home.heroCtaSecondary}
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-content px-4 py-16">
        <h2 className="text-center text-2xl font-bold text-fg">
          {dict.home.featuresTitle}
        </h2>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dict.home.features.map((feature) => (
            <li
              key={feature.title}
              className="rounded-xl border border-border bg-surface p-6"
            >
              <h3 className="font-semibold text-fg">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {feature.body}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Browse by category */}
      <section className="mx-auto max-w-content px-4 pb-4">
        <h2 className="text-2xl font-bold text-fg">
          {dict.home.browseByCategory}
        </h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <li key={category.id}>
              <Link
                href={localeHref(locale, `/components/${category.id}`)}
                className="block h-full rounded-xl border border-border bg-surface p-6 transition-colors hover:border-brand"
              >
                <span className="text-3xl" aria-hidden="true">
                  {category.icon}
                </span>
                <h3 className="mt-3 font-semibold text-fg">
                  {category.title[locale]}
                </h3>
                <p className="mt-1 text-sm text-muted">
                  {formatCount(
                    dict.gallery.itemsCount,
                    getComponentCount(category.id)
                  )}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Featured components */}
      <section className="mx-auto max-w-content px-4 py-16">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-bold text-fg">
            {dict.home.featuredTitle}
          </h2>
          <Link
            href={localeHref(locale, "/components")}
            className="text-sm font-medium text-brand hover:underline"
          >
            {dict.actions.viewAll} →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((entry) => (
            <ComponentCard
              key={entry.id}
              entry={entry}
              locale={locale}
              dict={dict}
            />
          ))}
        </div>
      </section>
    </>
  );
}
