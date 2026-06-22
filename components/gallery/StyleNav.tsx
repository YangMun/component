import Link from "next/link";
import { styles } from "@/data/styles";
import { getStyleCount } from "@/data/components";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { localeHref, cn } from "@/lib/utils";

// Editorial style chips: squared, hairline-bordered, ink-filled when active.
export default function StyleNav({
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
    <nav aria-label={dict.gallery.allStyles}>
      <ul className="flex flex-wrap gap-2">
        <li>
          <Link
            href={localeHref(locale, "/styles")}
            aria-current={!activeId ? "page" : undefined}
            className={cn(base, !activeId ? active : inactive)}
          >
            {dict.gallery.allStyles}
          </Link>
        </li>
        {styles.map((style) => {
          const isActive = style.id === activeId;
          return (
            <li key={style.id}>
              <Link
                href={localeHref(locale, `/styles/${style.id}`)}
                aria-current={isActive ? "page" : undefined}
                className={cn(base, isActive ? active : inactive)}
              >
                <span aria-hidden="true">{style.icon}</span>
                {style.title[locale]}
                <span className="mono text-xs opacity-70">
                  {getStyleCount(style.id)}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
