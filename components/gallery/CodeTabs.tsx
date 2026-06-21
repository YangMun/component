"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import CopyButton from "./CopyButton";

type Tab = "html" | "css";

// HTML/CSS tabbed code viewer with a one-click copy button per tab.
export default function CodeTabs({
  html,
  css,
  labels,
}: {
  html: string;
  css: string;
  labels: { copy: string; copied: string };
}) {
  const [tab, setTab] = useState<Tab>("html");
  const code = tab === "html" ? html : css;

  return (
    <div className="overflow-hidden rounded-lg border border-border bg-surface">
      <div className="flex items-center justify-between border-b border-border bg-bg px-2">
        <div role="tablist" aria-label="code" className="flex">
          {(["html", "css"] as const).map((t) => (
            <button
              key={t}
              role="tab"
              aria-selected={tab === t}
              onClick={() => setTab(t)}
              className={cn(
                "px-3 py-2 text-xs font-semibold uppercase tracking-wide transition-colors",
                tab === t
                  ? "border-b-2 border-brand text-brand"
                  : "text-muted hover:text-fg"
              )}
            >
              {t}
            </button>
          ))}
        </div>
        <CopyButton
          text={code}
          label={labels.copy}
          copiedLabel={labels.copied}
          className="my-1"
        />
      </div>
      <pre className="max-h-72 overflow-auto p-4 text-xs leading-relaxed">
        <code className="font-mono text-fg">{code}</code>
      </pre>
    </div>
  );
}
