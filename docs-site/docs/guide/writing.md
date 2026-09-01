---
title: Writing guide
description: Markdown features available in this portal, from containers to code highlighting.
---

# Writing guide

Every page is GitHub-flavored Markdown rendered by VitePress, with a few
enhancements loaded on top.

## Frontmatter

Each page starts with a YAML frontmatter block. The workbench edits these
fields visually:

```yaml
---
title: Writing guide        # page title (browser title + search)
description: One-line summary used by local search results.
---
```

## Headings and outline

`#` is the page title; use `##` and `###` for sections. Right-side "On this
page" outline tracks `h2`–`h6` automatically.

## Text

**Bold**, *italic*, `inline code`, [links](./quickstart), and footnotes-free
plain text. Lists:

- unordered item
- another item
  1. nested ordered item

## Tables

| Feature | Supported | Notes |
|---|---|---|
| Tables | Yes | GFM pipe syntax |
| Task lists | Yes | `- [x] done` |
| Emoji | Yes | `:tada:` renders :tada: |

## Code blocks

Fenced blocks get Shiki syntax highlighting, line highlighting, and
copy-to-clipboard:

```ts
// line 2 and 4 are highlighted, line 3 is a "diff" marker
function publish(site: Site): Promise<URL> {
  const dist = site.build() // [!code highlight]
  return upload(dist)       // [!code ++]
}
```

## Custom containers

::: tip
Useful advice that is safe to ignore.
:::

::: warning
Something the reader should pay attention to.
:::

::: danger
Destructive or irreversible actions.
:::

::: details Click to expand
Collapsed by default, good for long transcripts or troubleshooting steps.
:::

## More

See [Diagrams & math](./diagrams) for Mermaid charts and KaTeX formulas.
