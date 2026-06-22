import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./i18n/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Design tokens driven by CSS variables (see globals.css) so dark mode
        // and future theming stay in one place.
        bg: "rgb(var(--bg) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",
        fg: "rgb(var(--fg) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        brand: "rgb(var(--brand) / <alpha-value>)",
        "brand-fg": "rgb(var(--brand-fg) / <alpha-value>)",
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "Pretendard",
          "Apple SD Gothic Neo",
          "Malgun Gothic",
          "system-ui",
          "sans-serif",
        ],
        display: [
          "var(--font-display)",
          "var(--font-sans)",
          "Pretendard",
          "Apple SD Gothic Neo",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "var(--font-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      fontSize: {
        // Fluid editorial display sizes.
        display: ["clamp(2.75rem, 8vw, 6rem)", { lineHeight: "1.0" }],
        "display-sm": ["clamp(2rem, 5vw, 3.25rem)", { lineHeight: "1.05" }],
      },
      maxWidth: {
        content: "78rem",
        measure: "42rem",
      },
    },
  },
  plugins: [
    // `standalone:` / `browser:` variants keyed off data-display on <html>,
    // which an inline head script sets before paint (see app/[locale]/layout).
    // CSS-driven so the web vs. installed-app distinction is flicker-free.
    plugin(({ addVariant }) => {
      addVariant("standalone", '[data-display="standalone"] &');
      addVariant("browser", '[data-display="browser"] &');
    }),
  ],
};

export default config;
