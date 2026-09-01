// E2E hot-reload smoke: modify a page via the workbench API, then restore it.
// Watch the vitepress dev job output for "hmr update" lines.
const BASE = 'http://127.0.0.1:5178'
const PATH = 'guide/quickstart.md'

async function getDoc() {
  const res = await fetch(`${BASE}/api/doc?path=${PATH}`)
  if (!res.ok) throw new Error(`GET ${res.status}`)
  return res.json()
}

async function putDoc(content) {
  const doc = await getDoc()
  const res = await fetch(`${BASE}/api/doc`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ path: PATH, frontmatter: doc.frontmatter, content, expectedMtimeMs: doc.mtimeMs })
  })
  const data = await res.json()
  console.log(`PUT -> ${res.status} ${data.error ?? 'ok'}`)
  if (!res.ok) throw new Error(data.error)
}

const doc = await getDoc()
const marker = '\n<!-- workbench-hot-reload-smoke -->\n'
if (doc.content.includes('workbench-hot-reload-smoke')) {
  console.log('marker already present, restoring first')
  await putDoc(doc.content.replace(marker, '').replace('\n<!-- workbench-hot-reload-smoke -->', ''))
}
await putDoc(doc.content + marker)
console.log('marker written; vitepress dev should log an hmr update now')
await new Promise((r) => setTimeout(r, 2500))
const restored = (await getDoc()).content
await putDoc(restored.replace(marker, ''))
console.log('content restored')
