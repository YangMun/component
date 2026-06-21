import Link from "next/link";
import { categories } from "@/data/categories";
import { getComponentCount } from "@/data/components";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { localeHref, cn } from "@/lib/utils";

// Category chips/cards reused on the gallery index and category pages.
export default function CategoryNav({
  locale,
  dict,
  activeId,
}: {
  locale: Locale;
  dict: Dictionary;
  activeId?: string;
}) {
  return (
    <nav aria-label={dict.gallery.allCategories}>
      <ul className="flex flex-wrap gap-2">
        <li>
          <Link
            href={localeHref(locale, "/components")}
            aria-current={!activeId ? "page" : undefined}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              !activeId
                ? "border-brand bg-brand text-brand-fg"
                : "border-border text-muted hover:text-fg"
            )}
          >
            {dict.gallery.allCategories}
          </Link>
        </li>
        {categories.map((category) => {
          const active = category.id === activeId;
          return (
            <li key={category.id}>
              <Link
                href={localeHref(locale, `/components/${category.id}`)}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  active
                    ? "border-brand bg-brand text-brand-fg"
                    : "border-border text-muted hover:text-fg"
                )}
              >
                <span aria-hidden="true">{category.icon}</span>
                {category.title[locale]}
                <span className="text-xs opacity-70">
                  ({getComponentCount(category.id)})
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
