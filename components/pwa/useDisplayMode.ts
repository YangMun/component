"use client";

import { useEffect, useState } from "react";

export type DisplayMode = "standalone" | "browser";

// Reads the current display mode and keeps it in sync. The authoritative value
// is also written to <html data-display> by an inline head script before paint,
// so CSS (standalone:/browser: variants) never flickers; this hook is for the
// cases that need it in JS (e.g. the install button).
export function useDisplayMode(): DisplayMode {
  // Start as "browser" to match the server render, then correct after mount.
  const [mode, setMode] = useState<DisplayMode>("browser");

  useEffect(() => {
    const mql = window.matchMedia("(display-mode: standalone)");
    const compute = () => {
      const standalone =
        mql.matches ||
        (window.navigator as Navigator & { standalone?: boolean })
          .standalone === true ||
        sessionStorage.getItem("pwa") === "1";
      const next: DisplayMode = standalone ? "standalone" : "browser";
      document.documentElement.dataset.display = next;
      setMode(next);
    };
    compute();
    mql.addEventListener?.("change", compute);
    return () => mql.removeEventListener?.("change", compute);
  }, []);

  return mode;
}
