---
title: Deployment
description: Publish the static build to GitHub Pages or any static host.
---

# Deployment

`npm run docs:build` emits a fully static site to
`docs/.vitepress/dist`. Any static host can serve it as-is.

## GitHub Pages

`.github/workflows/deploy.yml` (repo root) builds on every push to
`main` and publishes via the official Pages actions:

1. checkout → setup-node (with npm cache)
2. `npm ci` + `npm run docs:build` in `docs-site/`
3. upload-pages-artifact → deploy-pages

One-time setup in the repository: **Settings → Pages → Source: GitHub
Actions**.

## Custom base path

Hosting under a sub-path (like `/<repo>/`)? Set `base` in `config.mts`:

```mts
export default withMermaid({
  base: '/your-repo/',
  // ...
})
```

The root `index.md` redirect uses a relative URL, so it keeps working under
any base.

## Local static check

Preview the production build without deploying:

```bash
npm run docs:preview   # serves dist/ locally
```

## Other hosts

Netlify / Cloudflare Pages / any static file server work with zero extra
config — point the deploy command at `npm run docs:build` and the publish
directory at `docs/.vitepress/dist`.
