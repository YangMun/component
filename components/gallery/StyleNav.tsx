import Link from "next/link";
import { styles } from "@/data/styles";
import { getStyleCount } from "@/data/components";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { localeHref, cn } from "@/lib/utils";

// Style chips reused on the styles index and style detail pages.
export default function StyleNav({
  locale,
  dict,
  activeId,
}: {
  locale: Locale;
  dict: Dictionary;
  activeId?: string;
}) {
  return (
    <nav aria-label={dict.gallery.allStyles}>
      <ul className="flex flex-wrap gap-2">
        <li>
          <Link
            href={localeHref(locale, "/styles")}
            aria-current={!activeId ? "page" : undefined}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              !activeId
                ? "border-brand bg-brand text-brand-fg"
                : "border-border text-muted hover:text-fg"
            )}
          >
            {dict.gallery.allStyles}
          </Link>
        </li>
        {styles.map((style) => {
          const active = style.id === activeId;
          return (
            <li key={style.id}>
              <Link
                href={localeHref(locale, `/styles/${style.id}`)}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  active
                    ? "border-brand bg-brand text-brand-fg"
                    : "border-border text-muted hover:text-fg"
                )}
              >
                <span aria-hidden="true">{style.icon}</span>
                {style.title[locale]}
                <span className="text-xs opacity-70">
                  ({getStyleCount(style.id)})
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
