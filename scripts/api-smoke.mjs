// API smoke test for the doc workbench. Run: node scripts/api-smoke.mjs
// Requires the admin server on 127.0.0.1:5178. Creates and removes a temp page.
const BASE = 'http://127.0.0.1:5178'

async function api(method, url, body) {
  const res = await fetch(BASE + url, {
    method,
    headers: body ? { 'Content-Type': 'application/json' } : undefined,
    body: body ? JSON.stringify(body) : undefined
  })
  const data = await res.json().catch(() => ({}))
  return { status: res.status, data }
}

let failed = 0
function check(name, cond, extra) {
  console.log(`${cond ? 'PASS' : 'FAIL'}  ${name}${cond ? '' : '  :: ' + JSON.stringify(extra ?? '')}`)
  if (!cond) failed++
}

// wait for server
let tree = null
for (let i = 0; i < 20; i++) {
  const r = await api('GET', '/api/tree').catch(() => null)
  if (r && r.status === 200) { tree = r; break }
  await new Promise((res) => setTimeout(res, 300))
}
check('GET /api/tree (9 pages)', tree && Array.isArray(tree.data.items) && tree.data.items.length === 9, tree?.data)
console.log('   pages:', tree ? tree.data.items.map((i) => i.path).join(', ') : 'n/a')

let r = await api('GET', '/api/sidebar')
check('GET /api/sidebar (object)', r.status === 200 && r.data.sidebar && typeof r.data.sidebar === 'object', r.data)

r = await api('POST', '/api/doc', { path: 'guide/api-smoke.md', title: 'API smoke', description: 'temp page' })
check('POST /api/doc create', r.status === 200 && r.data.ok, r.data)

r = await api('GET', '/api/doc?path=guide/api-smoke.md')
check('GET /api/doc reads frontmatter', r.status === 200 && r.data.frontmatter.title === 'API smoke', r.data)
const mtime = r.data.mtimeMs

r = await api('GET', '/api/sidebar')
check('sidebar auto-registered new page', JSON.stringify(r.data.sidebar).includes('api-smoke'), r.data)

r = await api('PUT', '/api/doc', { path: 'guide/api-smoke.md', frontmatter: { title: 'x' }, content: 'y', expectedMtimeMs: mtime - 99999 })
check('PUT stale mtime -> 409', r.status === 409, r.data)

r = await api('PUT', '/api/doc', {
  path: 'guide/api-smoke.md',
  frontmatter: { title: 'API smoke', description: 'updated' },
  content: '\n# API smoke\n\nUpdated body.\n',
  expectedMtimeMs: mtime
})
check('PUT save ok', r.status === 200 && r.data.ok, r.data)

r = await api('POST', '/api/doc/rename', { from: 'guide/api-smoke.md', to: 'develop/api-smoke.md' })
check('POST rename', r.status === 200 && r.data.ok, r.data)

r = await api('DELETE', '/api/doc', { path: 'develop/api-smoke.md', confirm: true })
check('DELETE page', r.status === 200 && r.data.ok, r.data)

r = await api('GET', '/api/sidebar')
const s = JSON.stringify(r.data.sidebar)
check('no stale sidebar link after rename+delete', !s.includes('api-smoke'), s)

const initial = {
  '/': [
    { text: 'Guide', items: [
      { text: 'Get started', link: '/guide/quickstart' },
      { text: 'Writing guide', link: '/guide/writing' },
      { text: 'Diagrams & math', link: '/guide/diagrams' }
    ] },
    { text: 'Workbench', items: [
      { text: 'Document workbench', link: '/develop/workbench' },
      { text: 'Sidebar management', link: '/develop/sidebar' }
    ] },
    { text: 'Reference', collapsed: true, items: [
      { text: 'Site configuration', link: '/reference/site-config' },
      { text: 'Deployment', link: '/reference/deploy' },
      { text: 'Doc conventions', link: '/reference/conventions' }
    ] }
  ]
}
r = await api('PUT', '/api/sidebar', { sidebar: initial })
check('PUT /api/sidebar initial tree', r.status === 200 && r.data.ok, r.data)
r = await api('GET', '/api/sidebar')
check('sidebar JSON roundtrip', JSON.stringify(r.data.sidebar) === JSON.stringify(initial), r.data)

console.log(failed ? `\n${failed} check(s) FAILED` : '\nAll checks passed')
process.exit(failed ? 1 : 0)
