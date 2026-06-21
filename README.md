# Component Gallery

A free gallery of copy‑paste UI components (buttons, cards, inputs, loaders, …)
for design inspiration. Browse live previews and copy the HTML/CSS to use in any
project. Built as a bilingual (Korean/English) web app with SEO and PWA support.

## Tech stack

- **Next.js (App Router)** + **TypeScript**
- **Tailwind CSS** for the site UI (design tokens drive light/dark theming)
- **Static export** (`output: 'export'`) — deployable to any static host
- **i18n** via locale‑prefixed routes (`/ko`, `/en`)
- **PWA**: web app manifest + service worker (installable on mobile/desktop)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000/ko
npm run build    # static export to ./out
```

> The dev server root (`/`) redirects to a locale. Open `/ko` or `/en`.

## Project structure

```
app/                Next.js App Router
  [locale]/         locale-aware layout + pages (home, components, about, …)
  sitemap.ts        generated sitemap.xml
  robots.ts         generated robots.txt
  manifest.ts       PWA web app manifest
components/         reusable React UI (layout, gallery, seo, content)
data/               data-driven content
  categories.ts     component categories
  components/        one file per component, aggregated in index.ts
  types.ts          ComponentEntry type
i18n/               locale config + dictionaries (ko, en)
lib/                site config, metadata helpers, utils
public/             icons, service worker, static files
scripts/            icon generator
```

## Adding a component

1. Create `data/components/<category>/<slug>.ts` exporting a `ComponentEntry`
   (id, slug, category, localized title/description, tags, `html`, `css`).
2. Import it and append it to the array in `data/components/index.ts`.

That's it — the gallery, category pages, sitemap, and home page pick it up
automatically. No page code changes required.

## Configuration

The production URL and contact address are read from environment variables so
they are not hard‑coded:

- `NEXT_PUBLIC_SITE_URL` — canonical site origin (used for SEO/sitemap)
- `NEXT_PUBLIC_CONTACT_EMAIL` — address shown on the Contact page

## Build & deploy (static host)

- Build command: `next build`
- Output directory: `out`

## License

Component code in this gallery may be reused freely in your projects. See the
in‑app Terms page for details.
