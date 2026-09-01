---
title: Document workbench
description: Create, edit, and delete documentation pages from a local web UI.
---

# Document workbench

The workbench is a small local web app (folder `admin/`) that manages the
Markdown sources of this site. It reads and writes the same files VitePress
builds from — Markdown files remain the single source of truth.

## Start it

```bash
cd admin
npm install
npm start
```

It listens on `127.0.0.1:5178` only — never exposed to the network. Open the
printed URL and keep `npm run docs:dev` running in another terminal to watch
edits appear live.

## Panels

| Panel | What it does |
|---|---|
| **Pages tree** | All `.md` files under `docs/`, grouped by directory, with last-modified time |
| **Editor** | Frontmatter form (title, description) plus raw Markdown body |
| **Sidebar** | Drag-and-drop ordering of groups and pages for the site navigation |

## Saving behavior

- Saves are **atomic** (write to temp file, then rename), UTF-8, LF line endings
- Frontmatter is serialized with gray-matter (YAML); unknown keys you added by
  hand are preserved on save
- A save is rejected with `409 Conflict` if the file changed on disk after you
  loaded it — reload before retrying to avoid clobbering
- Creating a page also registers it in the sidebar; deleting or renaming one
  updates sidebar links automatically

## Deleting pages

Deletion asks for confirmation and removes the page from the sidebar in the
same operation. There is no trash — rely on version control for history.

## What the workbench does not do

No accounts or permissions, no draft/review workflow, no rich-text WYSIWYG,
no git operations (show file mtime only). Those are deliberate non-goals for
this phase — see the project README.
