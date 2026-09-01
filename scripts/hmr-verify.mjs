// Definitive hmr check: add a marker via the workbench, then fetch the page
// module from the vitepress dev server and assert the marker is served.
const ADMIN = 'http://127.0.0.1:5178'
const DEV = 'http://localhost:5173'
const PATH = 'guide/quickstart.md'

async function getDoc() {
  const res = await fetch(`${ADMIN}/api/doc?path=${PATH}`)
  return res.json()
}
async function putDoc(content) {
  const doc = await getDoc()
  const res = await fetch(`${ADMIN}/api/doc`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ path: PATH, frontmatter: doc.frontmatter, content, expectedMtimeMs: doc.mtimeMs })
  })
  if (!res.ok) throw new Error(`PUT ${res.status}`)
}
async function devModule() {
  const res = await fetch(`${DEV}/guide/quickstart.md`)
  return res.text()
}

const doc = await getDoc()
const marker = 'WORKBENCH-HMR-CHECK-7Q2'
await putDoc(doc.content + `\n<!-- ${marker} -->\n`)
await new Promise((r) => setTimeout(r, 1500))
const served = await devModule()
console.log('dev module contains marker:', served.includes(marker))
await putDoc((await getDoc()).content.replace(`\n<!-- ${marker} -->\n`, ''))
const after = await devModule()
console.log('after restore, marker gone:', !after.includes(marker))
