---
title: Site configuration
description: Annotated walkthrough of .vitepress/config.mts.
---

# Site configuration

`docs/.vitepress/config.mts` is the single configuration file for the site.

## Core identity

```mts
export default withMermaid({
  lang: 'en-US',           // single language site (en only)
  title: 'DevDocs Portal',
  description: '...used as meta description',
  cleanUrls: true,         // /guide/quickstart instead of .html
})
```

`withMermaid` wraps the config to lazy-load Mermaid diagram chunks on pages
that need them.

## Search

```mts
search: { provider: 'local' }
```

Local search builds a client-side index at build time (minisearch) — no
external service, works offline. Index coverage is automatic; new pages are
picked up on the next `docs:build` or dev reload.

## Edit links

```mts
editLink: {
  pattern: 'https://github.com/<org>/<repo>/edit/main/docs-site/docs/:path',
  text: 'Edit this page on GitHub'
}
```

`:path` is substituted per page. Point it at the repository hosting these
Markdown sources.

## Sidebar

The `sidebar` constant is filled by the managed block — see
[Sidebar management](/develop/sidebar). A single `"/"` key applies one global
navigation tree to every page; switch to per-section keys (`"/guide/"`…) if
sections ever outgrow one shared tree.

## Branding

- `siteTitle` — text or HTML in the navbar
- Theme colors — override `--vp-c-brand-*` CSS variables in a custom CSS file
- Dark mode — on by default (`appearance` defaults to `true`)

## Dead links

`ignoreDeadLinks: false` makes `docs:build` fail on broken internal links.
Keep it off — a docs site that builds with dead links is worse than one that
refuses to build.
