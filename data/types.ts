import type { Locale } from "@/i18n/config";

// A localized string: every user-facing label provides text for each locale.
export type Localized = Record<Locale, string>;

// A single copy-paste component entry. Adding a new component is just adding a
// file that exports one of these and registering it in data/components/index.ts.
export type ComponentEntry = {
  /** Unique id, conventionally `${category}-${slug}`. */
  id: string;
  /** URL-safe identifier, unique within its category. */
  slug: string;
  /** Category id, must exist in data/categories.ts. */
  category: string;
  title: Localized;
  description: Localized;
  /** Free-form tags for search/SEO. */
  tags: string[];
  /** Copy-paste HTML markup. */
  html: string;
  /** Copy-paste CSS. Selectors are scoped by a wrapper class per component. */
  css: string;
  /** Optional CSS background for the preview stage (e.g. dark for neon). */
  previewBackground?: string;
  /** When true, may be surfaced on the home page. */
  featured?: boolean;
};

export type Category = {
  /** URL-safe id used in routes: /[locale]/components/[id]. */
  id: string;
  title: Localized;
  description: Localized;
  /** Emoji or short glyph used as a lightweight icon. */
  icon: string;
};
