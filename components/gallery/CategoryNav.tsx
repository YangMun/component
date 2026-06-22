import Link from "next/link";
import { categories } from "@/data/categories";
import { getComponentCount } from "@/data/components";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { localeHref, cn } from "@/lib/utils";

// Editorial category chips: squared, hairline-bordered, ink-filled when active.
export default function CategoryNav({
  locale,
  dict,
  activeId,
}: {
  locale: Locale;
  dict: Dictionary;
  activeId?: string;
}) {
  const base =
    "inline-flex items-center gap-1.5 border px-3.5 py-2 text-sm transition-colors";
  const inactive = "border-border text-muted hover:border-fg hover:text-fg";
  const active = "border-fg bg-fg text-bg";

  return (
    <nav aria-label={dict.gallery.allCategories}>
      <ul className="flex flex-wrap gap-2">
        <li>
          <Link
            href={localeHref(locale, "/components")}
            aria-current={!activeId ? "page" : undefined}
            className={cn(base, !activeId ? active : inactive)}
          >
            {dict.gallery.allCategories}
          </Link>
        </li>
        {categories.map((category) => {
          const isActive = category.id === activeId;
          return (
            <li key={category.id}>
              <Link
                href={localeHref(locale, `/components/${category.id}`)}
                aria-current={isActive ? "page" : undefined}
                className={cn(base, isActive ? active : inactive)}
              >
                <span aria-hidden="true">{category.icon}</span>
                {category.title[locale]}
                <span className="mono text-xs opacity-70">
                  {getComponentCount(category.id)}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
