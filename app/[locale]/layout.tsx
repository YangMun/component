import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, Space_Mono } from "next/font/google";
import "../globals.css";
import { locales, defaultLocale, isLocale, type Locale } from "@/i18n/config";

// Editorial type system: a characterful grotesk for display, Inter for body,
// and a monospace for eyebrows, labels and indices. Self-hosted at build time.
const fontDisplay = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
  display: "swap",
});
const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const fontMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});
import { getDictionary } from "@/i18n/dictionaries";
import { siteUrl, absoluteUrl } from "@/lib/site";
import { localeHref } from "@/lib/utils";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Pre-render one HTML tree per locale (required for static export).
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const dict = getDictionary(locale);
  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: `${dict.meta.siteName} — ${dict.meta.tagline}`,
      template: `%s | ${dict.meta.siteName}`,
    },
    description: dict.meta.description,
    applicationName: dict.meta.siteName,
    manifest: "/manifest.webmanifest",
    alternates: {
      canonical: absoluteUrl(localeHref(locale)),
      languages: {
        ko: absoluteUrl(localeHref("ko")),
        en: absoluteUrl(localeHref("en")),
        "x-default": absoluteUrl(localeHref(defaultLocale)),
      },
    },
    openGraph: {
      type: "website",
      siteName: dict.meta.siteName,
      title: `${dict.meta.siteName} — ${dict.meta.tagline}`,
      description: dict.meta.description,
      locale: locale === "ko" ? "ko_KR" : "en_US",
      url: absoluteUrl(localeHref(locale)),
    },
    twitter: {
      card: "summary_large_image",
      title: `${dict.meta.siteName} — ${dict.meta.tagline}`,
      description: dict.meta.description,
    },
    appleWebApp: {
      capable: true,
      statusBarStyle: "default",
      title: dict.meta.siteName,
    },
    formatDetection: { telephone: false },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f2ea" },
    { media: "(prefers-color-scheme: dark)", color: "#14130f" },
  ],
};

// Applied before paint to avoid a flash of the wrong theme.
const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');var m=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(!t&&m)){document.documentElement.classList.add('dark');}}catch(e){}})();`;

// Registers the service worker so the site is installable as a PWA.
const swRegisterScript = `if('serviceWorker' in navigator){window.addEventListener('load',function(){navigator.serviceWorker.register('/sw.js').catch(function(){});});}`;

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale: Locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const dict = getDictionary(locale);

  return (
    <html
      lang={locale}
      className={`${fontDisplay.variable} ${fontSans.variable} ${fontMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script dangerouslySetInnerHTML={{ __html: swRegisterScript }} />
      </head>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-brand focus:px-4 focus:py-2 focus:text-brand-fg"
        >
          {dict.nav.skipToContent}
        </a>
        <Header locale={locale} dict={dict} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer locale={locale} dict={dict} />
      </body>
    </html>
  );
}
