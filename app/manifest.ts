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
    // ?source=pwa lets the launched app reliably self-identify as standalone.
    start_url: `/${defaultLocale}/?source=pwa`,
    scope: "/",
    display: "standalone",
    background_color: "#f4f2ea",
    theme_color: "#f4f2ea",
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
