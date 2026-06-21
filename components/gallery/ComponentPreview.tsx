"use client";

import { useMemo } from "react";

// Renders a component's HTML + CSS inside a sandboxed iframe so its arbitrary
// styles are fully isolated from the site (no class collisions, no leakage).
export default function ComponentPreview({
  html,
  css,
  background,
  title,
}: {
  html: string;
  css: string;
  background?: string;
  title: string;
}) {
  const srcDoc = useMemo(() => {
    const bg = background ?? "#f1f5f9";
    return `<!doctype html><html><head><meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<style>
  *,*::before,*::after{box-sizing:border-box}
  html,body{margin:0;height:100%}
  body{display:flex;align-items:center;justify-content:center;padding:24px;
    background:${bg};font-family:ui-sans-serif,system-ui,sans-serif}
  ${css}
</style></head><body>${html}</body></html>`;
  }, [html, css, background]);

  return (
    <iframe
      title={title}
      srcDoc={srcDoc}
      loading="lazy"
      sandbox="allow-scripts"
      className="h-44 w-full border-0 bg-white"
    />
  );
}
