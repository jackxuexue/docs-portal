// Doc workbench server — local-only API for managing docs-site Markdown sources.
// Listens on 127.0.0.1 only. Markdown files stay the single source of truth.
import express from 'express'
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import matter from 'gray-matter'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DOCS_ROOT = path.resolve(__dirname, '..', 'docs-site', 'docs')
const CONFIG_PATH = path.resolve(DOCS_ROOT, '.vitepress', 'config.mts')
const PUBLIC_DIR = path.join(__dirname, 'public')
const BEGIN = '// ---sidebar:auto-begin---'
const END = '// ---sidebar:auto-end---'
const HOST = '127.0.0.1'
const PORT = process.env.PORT ? Number(process.env.PORT) : 5178
const MTIME_EPSILON = 2 // ms tolerance for conflict detection

const app = express()
app.use(express.json({ limit: '5mb' }))
app.use(express.static(PUBLIC_DIR))

// ---------------------------------------------------------------- helpers

function httpError(status, message) {
  return Object.assign(new Error(message), { status })
}

function assertSafeRel(input) {
  if (typeof input !== 'string' || !input.trim()) throw httpError(400, 'path is required')
  const normalized = path.normalize(input.replace(/\\/g, '/')).replace(/^([.][.](\/|$))+/, '')
  const abs = path.resolve(DOCS_ROOT, normalized)
  if (abs !== DOCS_ROOT && !abs.startsWith(DOCS_ROOT + path.sep)) {
    throw httpError(400, 'path escapes docs root')
  }
  const rel = path.relative(DOCS_ROOT, abs).replace(/\\/g, '/')
  return { rel, abs }
}

function requireMd(rel) {
  if (!rel.toLowerCase().endsWith('.md')) throw httpError(400, 'only .md files are managed')
  if (rel.split('/').includes('.vitepress')) throw httpError(400, '.vitepress is not a managed directory')
}

async function walkMd(dir) {
  let entries
  try {
    entries = await fs.readdir(dir, { withFileTypes: true })
  } catch {
    return []
  }
  const out = []
  for (const entry of entries) {
    const abs = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (entry.name === '.vitepress' || entry.name === 'node_modules') continue
      out.push(...(await walkMd(abs)))
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith('.md')) {
      out.push(abs)
    }
  }
  return out
}

async function atomicWrite(abs, data) {
  const tmp = `${abs}.tmp-${process.pid}-${Date.now()}`
  await fs.writeFile(tmp, data, 'utf8')
  await fs.rename(tmp, abs)
}

function toLink(rel) {
  let p = rel.replace(/\\/g, '/').replace(/\.md$/i, '')
  if (p === 'index') return '/'
  if (p.endsWith('/index')) return '/' + p.slice(0, -'/index'.length) + '/'
  return '/' + p
}

function dirOfLink(link) {
  const p = link.replace(/^\//, '').replace(/\/$/, '')
  return p.includes('/') ? p.slice(0, p.lastIndexOf('/')) : p
}

// ---------------------------------------------------------- sidebar block
// The managed block between the markers is the full statement
// `const sidebar = {...}`; see the header comment in config.mts.

const SIDEBAR_DECL = 'const sidebar = '

function extractManaged(text) {
  const begin = text.indexOf(BEGIN)
  const end = text.indexOf(END)
  if (begin < 0 || end < 0 || end < begin) {
    throw httpError(500, `sidebar managed markers not found in ${path.basename(CONFIG_PATH)}`)
  }
  return { start: begin + BEGIN.length, end, content: text.slice(begin + BEGIN.length, end) }
}

function parseManaged(content) {
  const trimmed = content.trim()
  if (!trimmed) return {}
  if (!trimmed.startsWith(SIDEBAR_DECL)) {
    throw httpError(500, 'managed sidebar block must start with "const sidebar = "')
  }
  const parsed = JSON.parse(trimmed.slice(SIDEBAR_DECL.length))
  if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
    throw httpError(500, 'managed sidebar block must be a JSON object keyed by route prefix')
  }
  return parsed
}

async function readSidebar() {
  const text = await fs.readFile(CONFIG_PATH, 'utf8')
  return parseManaged(extractManaged(text).content)
}

async function writeSidebar(sidebar) {
  const text = await fs.readFile(CONFIG_PATH, 'utf8')
  const { start, end } = extractManaged(text)
  const block = SIDEBAR_DECL + JSON.stringify(sidebar, null, 2)
  await atomicWrite(CONFIG_PATH, text.slice(0, start) + '\n' + block + '\n' + text.slice(end))
}

function pruneEmptyGroups(groups) {
  return groups.filter((g) => g && (g.link || (Array.isArray(g.items) && g.items.length > 0)))
}

function mapGroups(sidebar, fn) {
  for (const key of Object.keys(sidebar)) {
    const groups = sidebar[key]
    if (!Array.isArray(groups)) continue
    for (const group of groups) {
      if (!group || !Array.isArray(group.items)) continue
      group.items = group.items.map((item) => fn(item)).filter(Boolean)
    }
    sidebar[key] = pruneEmptyGroups(groups)
  }
}

function addToSidebar(sidebar, rel, title) {
  const key = Object.keys(sidebar)[0] || '/'
  const link = toLink(rel)
  const dir = dirOfLink(link)
  const groups = Array.isArray(sidebar[key]) ? sidebar[key] : (sidebar[key] = [])
  let target = groups.find(
    (g) => Array.isArray(g.items) && g.items.some((it) => it && it.link && dirOfLink(it.link) === dir)
  )
  if (!target) target = groups.find((g) => Array.isArray(g.items))
  if (!target) {
    target = { text: 'Pages', items: [] }
    groups.push(target)
  }
  if (!Array.isArray(target.items)) target.items = []
  target.items.push({ text: title, link })
}

// ------------------------------------------------------------------- API

app.get('/api/tree', async (req, res) => {
  const absFiles = (await walkMd(DOCS_ROOT)).sort()
  const items = []
  for (const abs of absFiles) {
    let stat = null
    let title = path.basename(abs, path.extname(abs))
    try {
      stat = await fs.stat(abs)
      const { data } = matter(await fs.readFile(abs, 'utf8'))
      if (data && typeof data.title === 'string' && data.title) title = data.title
    } catch {
      // unreadable file: still list it with zeros
    }
    items.push({
      path: path.relative(DOCS_ROOT, abs).replace(/\\/g, '/'),
      title,
      mtimeMs: stat ? stat.mtimeMs : 0,
      size: stat ? stat.size : 0
    })
  }
  res.json({ docsRoot: DOCS_ROOT, items })
})

app.get('/api/doc', async (req, res) => {
  const { rel, abs } = assertSafeRel(String(req.query.path || ''))
  requireMd(rel)
  const raw = await fs.readFile(abs, 'utf8')
  const parsed = matter(raw)
  const stat = await fs.stat(abs)
  res.json({
    path: rel,
    frontmatter: parsed.data ?? {},
    content: parsed.content,
    mtimeMs: stat.mtimeMs
  })
})

app.put('/api/doc', async (req, res) => {
  const body = req.body ?? {}
  const { rel, abs } = assertSafeRel(body.path)
  requireMd(rel)
  const stat = await fs.stat(abs).catch(() => null)
  if (!stat) throw httpError(404, `not found: ${rel}`)
  if (
    typeof body.expectedMtimeMs === 'number' &&
    !body.force &&
    Math.abs(stat.mtimeMs - body.expectedMtimeMs) > MTIME_EPSILON
  ) {
    return res.status(409).json({ error: 'file changed on disk since it was loaded', mtimeMs: stat.mtimeMs })
  }
  const frontmatter = body.frontmatter && typeof body.frontmatter === 'object' ? body.frontmatter : {}
  const content = typeof body.content === 'string' ? body.content : ''
  await atomicWrite(abs, matter.stringify(content, frontmatter))
  const fresh = await fs.stat(abs)
  res.json({ ok: true, path: rel, mtimeMs: fresh.mtimeMs })
})

app.post('/api/doc', async (req, res) => {
  const body = req.body ?? {}
  const { rel, abs } = assertSafeRel(body.path)
  requireMd(rel)
  if (await fs.stat(abs).then(() => true, () => false)) {
    throw httpError(409, `already exists: ${rel}`)
  }
  const title = typeof body.title === 'string' && body.title ? body.title : path.basename(rel, '.md')
  const description = typeof body.description === 'string' ? body.description : ''
  const content = matter.stringify(`\n# ${title}\n\nStart writing…\n`, { title, description })
  await fs.mkdir(path.dirname(abs), { recursive: true })
  await atomicWrite(abs, content)
  const sidebar = await readSidebar()
  addToSidebar(sidebar, rel, title)
  await writeSidebar(sidebar)
  const stat = await fs.stat(abs)
  res.json({ ok: true, path: rel, mtimeMs: stat.mtimeMs })
})

app.post('/api/doc/rename', async (req, res) => {
  const body = req.body ?? {}
  const from = assertSafeRel(body.from)
  const to = assertSafeRel(body.to)
  requireMd(from.rel)
  requireMd(to.rel)
  if (from.rel === to.rel) throw httpError(400, 'rename target equals source')
  if (await fs.stat(to.abs).then(() => true, () => false)) {
    throw httpError(409, `target already exists: ${to.rel}`)
  }
  const oldRaw = await fs.readFile(from.abs, 'utf8')
  const { data } = matter(oldRaw)
  await fs.mkdir(path.dirname(to.abs), { recursive: true })
  await fs.rename(from.abs, to.abs)
  const sidebar = await readSidebar()
  mapGroups(sidebar, (item) =>
    item && item.link === toLink(from.rel) ? { ...item, link: toLink(to.rel) } : item
  )
  await writeSidebar(sidebar)
  res.json({ ok: true, from: from.rel, to: to.rel, title: data?.title ?? null })
})

app.delete('/api/doc', async (req, res) => {
  const body = req.body ?? {}
  const { rel, abs } = assertSafeRel(body.path)
  requireMd(rel)
  if (!body.confirm) throw httpError(400, 'confirm=true required to delete')
  await fs.unlink(abs)
  const sidebar = await readSidebar()
  mapGroups(sidebar, (item) => (item && item.link === toLink(rel) ? null : item))
  await writeSidebar(sidebar)
  res.json({ ok: true, path: rel })
})

app.get('/api/sidebar', async (req, res) => {
  res.json({ sidebar: await readSidebar() })
})

app.put('/api/sidebar', async (req, res) => {
  const sidebar = req.body?.sidebar
  if (!sidebar || typeof sidebar !== 'object' || Array.isArray(sidebar)) {
    throw httpError(400, 'body.sidebar must be an object keyed by route prefix')
  }
  await writeSidebar(sidebar)
  res.json({ ok: true })
})

app.use((err, req, res, next) => {
  const status = err.status ?? 500
  if (status >= 500) console.error(err)
  res.status(status).json({ error: err.message })
})

app.listen(PORT, HOST, () => {
  console.log(`Doc workbench: http://${HOST}:${PORT}`)
  console.log(`Docs root: ${DOCS_ROOT}`)
  console.log(`Managed sidebar block: ${path.basename(CONFIG_PATH)} between ${BEGIN} / ${END}`)
})
