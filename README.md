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
  styles.ts         design styles (trends/concepts)
  components/        one array file per category, aggregated in index.ts
  types.ts          ComponentEntry / Category / Style types
i18n/               locale config + dictionaries (ko, en)
lib/                site config, metadata helpers, utils
public/             icons, service worker, static files
scripts/            icon generator
```

## Adding a component

1. Open the category's array file, e.g. `data/components/buttons.ts`.
2. Append a `ComponentEntry` (id, slug, `category`, `style`, localized
   title/description, tags, `html`, `css`, optional `previewBackground`,
   `featured`). `category` must exist in `data/categories.ts` and `style` in
   `data/styles.ts`.

That's it — the gallery, category pages, style pages, sitemap, and home page
pick it up automatically. No page code changes required.

To add a **category** or **design style**, append to `data/categories.ts` or
`data/styles.ts`; navigation, routes and the sitemap update automatically.

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
