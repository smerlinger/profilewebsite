# shaunsmerling.com

Personal site + blog, built with [Astro](https://astro.build). Minimal, text-forward, light/dark.

## Writing a new blog post

This is the whole workflow — no HTML, no layout code:

1. Create a new file in `src/content/blog/`, e.g. `my-new-idea.md`.
   The filename becomes the URL: `/writing/my-new-idea`.
2. Put this frontmatter at the top:

   ```markdown
   ---
   title: My New Idea
   date: 2026-07-28
   description: One-line summary (optional, used for previews & SEO).
   draft: false
   ---

   Write the post in Markdown below the frontmatter.
   ```

3. Write. Save. That's it — the post appears on `/writing`, newest first.

Set `draft: true` to keep a post out of the site while you work on it.

## Running locally

```bash
npm install      # first time only
npm run dev      # http://localhost:4321
```

## Structure

- `src/pages/` — the routes (home, writing, books, vision, photos)
- `src/content/blog/` — your posts (Markdown)
- `src/layouts/` — page + post shells
- `src/styles/global.css` — all the design in one file (colors, type, layout)
- `public/` — static assets (favicon, photos)

## Editing other pages

- **Home / projects** → `src/pages/index.astro`
- **Books** → the `books` array in `src/pages/books.astro`
- **Vision** → the `vision` array in `src/pages/vision.astro`
- **Photos** → drop images in `public/photos/`, list them in `src/pages/photos.astro`

## Deploy

Push to GitHub and import into [Vercel](https://vercel.com) (framework preset: Astro).
Point the `shaunsmerling.com` domain at the Vercel project.
