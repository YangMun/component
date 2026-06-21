// Site-wide constants. The production URL is read from an environment variable
// so the real domain is never hard-coded in this public repository.
// Set NEXT_PUBLIC_SITE_URL in the Cloudflare Pages build settings.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com"
).replace(/\/$/, "");

// Build an absolute URL for a path (used for canonical, sitemap, OG tags).
export function absoluteUrl(path = "/"): string {
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

// Public contact address. Set NEXT_PUBLIC_CONTACT_EMAIL in build settings so a
// real address is never committed to this public repository.
export const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@example.com";
