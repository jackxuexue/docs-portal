---
title: Get started
description: 'Install the docs toolchain, preview the site locally, and publish a build.'
---

# Get started

This portal is a [VitePress](https://vitepress.dev) site plus a local **document workbench**
for managing pages without leaving the browser. Everything you read here is plain
Markdown under `docs-site/docs/`.

## Prerequisites

- Node.js 20 or newer
- npm or pnpm

## Run the site locally

```bash
cd docs-site
npm install
npm run docs:dev
```

VitePress starts a dev server (default `http://localhost:5173`) with instant
hot reload — edit a `.md` file and the page updates without a refresh.

## Write your first page

1. Create `docs/guide/my-page.md`
2. Add frontmatter and content:

```md
---
title: My page
description: A short summary shown in search results.
---

# My page

Hello from the docs portal.
```

3. Register it in the sidebar (or let the workbench do it for you) and visit
   `/guide/my-page` in the dev server.

## Build for production

```bash
npm run docs:build
```

The static site is emitted to `docs/.vitepress/dist`. See [Deployment](/reference/deploy)
for hosting options.

## Next steps

- [Writing guide](./writing) — Markdown features available in this portal
- [Diagrams & math](./diagrams) — Mermaid charts and KaTeX formulas
- [Deployment](/reference/deploy) — publish the built site
- [Document workbench](/develop/workbench) — manage pages visually
