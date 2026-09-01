---
title: Doc conventions
description: Naming, frontmatter, and structure rules that keep the portal consistent.
---

# Doc conventions

## Structure

```
docs/
├── index.md          # redirect to the entry page
├── guide/            # task-oriented: how to use the portal
├── develop/          # how to extend/operate the portal
└── reference/        # factual reference material
```

One page answers one question. If a page needs a table of contents deeper
than three levels, split it.

## File naming

- kebab-case: `quickstart.md`, `site-config.md`
- one topic per file; `index.md` is reserved for directory entry pages

## Frontmatter

| Field | Required | Purpose |
|---|---|---|
| `title` | yes | Browser title, search index, sidebar label |
| `description` | yes | One-line summary in search results |
| other keys | keep | Unknown keys are preserved by the workbench |

The body must start with `# <same as title>`.

## Registering pages

A page is only reachable when it is in the sidebar JSON (managed block).
The workbench keeps sidebar and pages in sync for create/rename/delete;
hand-created files must be registered manually or via the workbench.

## Style

- Present tense, second person ("Run the build", not "The build is run")
- Code samples that readers can paste verbatim
- Every diagram or table has at least one sentence of surrounding prose
- Internal links use clean URLs: `[text](./quickstart)`, not `.html` links
