import type { MetadataRoute } from "next";
import ko from "@/i18n/dictionaries/ko";
import { defaultLocale } from "@/i18n/config";

export const dynamic = "force-static";

// PWA manifest so the site can be installed as an app on mobile and desktop.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${ko.meta.siteName} — ${ko.meta.tagline}`,
    short_name: ko.meta.siteName,
    description: ko.meta.description,
    start_url: `/${defaultLocale}/`,
    scope: "/",
    display: "standalone",
    background_color: "#f8fafc",
    theme_color: "#7c3aed",
    lang: defaultLocale,
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
