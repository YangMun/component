"use client";

import { useEffect, useState } from "react";

// Toggles the `dark` class on <html> and persists the choice. The initial
// class is set by an inline script in the layout to avoid a flash.
export default function ThemeToggle({ label }: { label: string }) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* ignore */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-fg transition-colors hover:bg-bg"
    >
      {/* Render a stable icon until mounted to avoid hydration mismatch. */}
      <span aria-hidden="true">{mounted && isDark ? "☀️" : "🌙"}</span>
    </button>
  );
}
