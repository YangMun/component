import type { Metadata } from "next";
import { defaultLocale, type Locale } from "@/i18n/config";
import { absoluteUrl } from "@/lib/site";
import { localeHref } from "@/lib/utils";

// Builds consistent per-page metadata: canonical + ko/en hreflang alternates,
// plus OpenGraph/Twitter. `path` is the locale-less path, e.g. "/about".
export function buildPageMetadata({
  locale,
  path,
  title,
  description,
}: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
}): Metadata {
  const canonical = absoluteUrl(localeHref(locale, path));
  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        ko: absoluteUrl(localeHref("ko", path)),
        en: absoluteUrl(localeHref("en", path)),
        "x-default": absoluteUrl(localeHref(defaultLocale, path)),
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      locale: locale === "ko" ? "ko_KR" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
