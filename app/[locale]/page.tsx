import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { buildPageMetadata } from "@/lib/metadata";
import { localeHref, formatCount } from "@/lib/utils";
import { absoluteUrl } from "@/lib/site";
import { categories } from "@/data/categories";
import { styles } from "@/data/styles";
import {
  components,
  getComponentCount,
  getStyleCount,
  getFeaturedComponents,
} from "@/data/components";
import ComponentCard from "@/components/gallery/ComponentCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Marquee from "@/components/layout/Marquee";
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

  const stats = [
    { value: components.length, label: dict.home.stats.components },
    { value: categories.length, label: dict.home.stats.categories },
    { value: styles.length, label: dict.home.stats.styles },
  ];

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
        <div className="mx-auto grid max-w-content gap-10 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[1.7fr_1fr] lg:items-end">
          <div>
            <p className="eyebrow mb-6">◆ {dict.home.heroEyebrow}</p>
            <h1 className="display text-display text-fg">
              {dict.home.heroTitle}
            </h1>
            <p className="mt-7 max-w-measure text-lg leading-relaxed text-muted">
              {dict.home.heroSubtitle}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <Link
                href={localeHref(locale, "/components")}
                className="bg-brand px-7 py-3.5 font-medium text-brand-fg transition-opacity hover:opacity-80"
              >
                {dict.home.heroCtaPrimary}
              </Link>
              <Link
                href={localeHref(locale, "/about")}
                className="border-b border-fg pb-1 font-medium text-fg transition-opacity hover:opacity-60"
              >
                {dict.home.heroCtaSecondary}
              </Link>
            </div>
          </div>

          {/* Index / stats column */}
          <dl className="grid grid-cols-3 gap-px border border-border bg-border lg:grid-cols-1">
            {stats.map((s) => (
              <div key={s.label} className="bg-bg p-5">
                <dt className="eyebrow">{s.label}</dt>
                <dd className="mono mt-2 text-3xl font-bold text-fg">
                  {String(s.value).padStart(2, "0")}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Style marquee */}
      <Marquee items={styles.map((s) => s.title[locale])} />

      {/* Capabilities — numbered editorial list */}
      <section className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-20">
        <SectionHeading eyebrow="01 — 04" title={dict.home.featuresTitle} />
        <ul className="mt-2">
          {dict.home.features.map((feature, i) => (
            <li
              key={feature.title}
              className="grid grid-cols-[2.5rem_1fr] gap-x-4 gap-y-2 border-b border-border py-7 md:grid-cols-[5rem_1fr_2fr] md:items-baseline md:gap-8"
            >
              <span className="mono text-sm text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-xl font-bold text-fg">
                {feature.title}
              </h3>
              {/* Full-width below the title on mobile; third column on md+. */}
              <p className="col-span-2 leading-relaxed text-muted md:col-span-1 md:col-start-3 md:row-start-1">
                {feature.body}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Browse by category — table-of-contents index */}
      <section className="mx-auto max-w-content px-5 pb-8 md:px-8">
        <SectionHeading
          eyebrow={dict.gallery.allCategories}
          title={dict.home.browseByCategory}
        />
        <ul className="mt-2">
          {categories.map((category, i) => (
            <li key={category.id}>
              <Link
                href={localeHref(locale, `/components/${category.id}`)}
                className="group flex items-center gap-3 border-b border-border py-5 transition-colors hover:bg-surface sm:gap-5"
              >
                <span className="mono shrink-0 text-sm text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span aria-hidden="true" className="shrink-0 text-xl">
                  {category.icon}
                </span>
                <span className="min-w-0 flex-1 truncate font-display text-lg font-bold text-fg md:text-xl">
                  {category.title[locale]}
                </span>
                <span className="mono shrink-0 text-sm text-muted">
                  {formatCount(
                    dict.gallery.itemsCount,
                    getComponentCount(category.id)
                  )}
                </span>
                <span
                  aria-hidden="true"
                  className="shrink-0 text-muted transition-transform group-hover:translate-x-1 group-hover:text-fg"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Browse by design style — editorial chips */}
      <section className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-20">
        <SectionHeading
          eyebrow={dict.gallery.allStyles}
          title={dict.home.browseByStyle}
          action={
            <Link
              href={localeHref(locale, "/styles")}
              className="eyebrow transition-colors hover:text-fg"
            >
              {dict.actions.viewAll} →
            </Link>
          }
        />
        <ul className="mt-8 flex flex-wrap gap-2.5">
          {styles.map((style) => (
            <li key={style.id}>
              <Link
                href={localeHref(locale, `/styles/${style.id}`)}
                className="inline-flex items-center gap-2 border border-border px-4 py-2 text-sm text-fg transition-colors hover:border-fg"
              >
                <span aria-hidden="true">{style.icon}</span>
                {style.title[locale]}
                <span className="mono text-xs text-muted">
                  {getStyleCount(style.id)}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Featured — gallery wall */}
      <section className="mx-auto max-w-content px-5 pb-20 md:px-8">
        <SectionHeading
          eyebrow="SELECTED WORKS"
          title={dict.home.featuredTitle}
          action={
            <Link
              href={localeHref(locale, "/components")}
              className="eyebrow transition-colors hover:text-fg"
            >
              {dict.actions.viewAll} →
            </Link>
          }
        />
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
