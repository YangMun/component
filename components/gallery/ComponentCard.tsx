import type { ComponentEntry } from "@/data/types";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { getCategory } from "@/data/categories";
import { getStyle } from "@/data/styles";
import ComponentPreview from "./ComponentPreview";
import CodeTabs from "./CodeTabs";

// A gallery "plate": a mono caption bar (style · category), the live preview,
// then the title, blurb and copyable code. Flat, hairline-framed — editorial.
export default function ComponentCard({
  entry,
  locale,
  dict,
}: {
  entry: ComponentEntry;
  locale: Locale;
  dict: Dictionary;
}) {
  const category = getCategory(entry.category);
  const style = getStyle(entry.style);

  return (
    <article className="flex flex-col border border-border bg-surface">
      <div className="flex items-center justify-between gap-2 border-b border-border px-3 py-2">
        <span className="eyebrow truncate">
          {style ? style.title[locale] : entry.style}
        </span>
        <span className="eyebrow truncate text-right">
          {category ? category.title[locale] : entry.category}
        </span>
      </div>

      <ComponentPreview
        html={entry.html}
        css={entry.css}
        js={entry.js}
        background={entry.previewBackground}
        title={entry.title[locale]}
      />

      <div className="flex flex-1 flex-col gap-3 border-t border-border p-4">
        <div>
          <h3 className="font-display text-base font-bold text-fg">
            {entry.title[locale]}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted">
            {entry.description[locale]}
          </p>
        </div>
        {entry.tags.length > 0 && (
          <ul className="flex flex-wrap gap-x-3 gap-y-1">
            {entry.tags.map((tag) => (
              <li key={tag} className="mono text-xs text-muted">
                {tag}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-auto">
          <CodeTabs
            html={entry.html}
            css={entry.css}
            js={entry.js}
            labels={{ copy: dict.actions.copy, copied: dict.actions.copied }}
          />
        </div>
      </div>
    </article>
  );
}
