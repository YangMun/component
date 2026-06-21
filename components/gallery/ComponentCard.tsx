import type { ComponentEntry } from "@/data/types";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import ComponentPreview from "./ComponentPreview";
import CodeTabs from "./CodeTabs";

// A full gallery card: live preview, title/description, and copyable code.
export default function ComponentCard({
  entry,
  locale,
  dict,
}: {
  entry: ComponentEntry;
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-sm">
      <h3 className="sr-only">{entry.title[locale]}</h3>
      <ComponentPreview
        html={entry.html}
        css={entry.css}
        js={entry.js}
        background={entry.previewBackground}
        title={entry.title[locale]}
      />
      <div className="flex flex-1 flex-col gap-3 border-t border-border p-4">
        <div>
          <p className="font-semibold text-fg">{entry.title[locale]}</p>
          <p className="mt-1 text-sm leading-relaxed text-muted">
            {entry.description[locale]}
          </p>
        </div>
        {entry.tags.length > 0 && (
          <ul className="flex flex-wrap gap-1.5">
            {entry.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-bg px-2 py-0.5 text-xs text-muted"
              >
                #{tag}
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
