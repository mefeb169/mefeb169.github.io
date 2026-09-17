# mefeb169.github.io

Usama's personal portfolio site — live at **https://mefeb169.github.io/**.

Built with Vite + React + TypeScript + Tailwind CSS v4.

## Development

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check (tsc -b) + production build to dist/
npm run lint      # eslint
```

## Content

All page content lives in [`src/data/profile.ts`](src/data/profile.ts) — components import
from there rather than hardcoding copy. That file traces back to `profile.md` in the private
profile repo (not published here), which is the reconciled, live-verified source of truth.

## Deployment

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds the site and publishes it via GitHub Pages (Pages source: **GitHub Actions**).
