import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { absoluteUrl } from "@/lib/site";
import { localeHref } from "@/lib/utils";
import { categories } from "@/data/categories";
import { styles } from "@/data/styles";

// Static paths (locale-less) that exist for every locale.
const staticPaths = [
  "/",
  "/components",
  "/styles",
  "/about",
  "/privacy",
  "/terms",
  "/contact",
];

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const path of staticPaths) {
      entries.push({
        url: absoluteUrl(localeHref(locale, path)),
        changeFrequency: "weekly",
        priority: path === "/" ? 1 : 0.7,
      });
    }
    for (const category of categories) {
      entries.push({
        url: absoluteUrl(localeHref(locale, `/components/${category.id}`)),
        changeFrequency: "weekly",
        priority: 0.6,
      });
    }
    for (const style of styles) {
      entries.push({
        url: absoluteUrl(localeHref(locale, `/styles/${style.id}`)),
        changeFrequency: "weekly",
        priority: 0.6,
      });
    }
  }

  return entries;
}
