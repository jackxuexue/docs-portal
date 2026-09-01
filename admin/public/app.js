/* Doc workbench frontend — vanilla JS, no build step. */
'use strict'

const $ = (sel) => document.querySelector(sel)
const state = {
  items: [],            // [{path,title,mtimeMs,size}]
  current: null,        // {path, frontmatter, content, mtimeMs, extraFm}
  sidebar: null,        // parsed managed-block JSON
  sideDirty: false
}

async function api(method, url, body) {
  const res = await fetch(url, {
    method,
    headers: body ? { 'Content-Type': 'application/json' } : undefined,
    body: body ? JSON.stringify(body) : undefined
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) {
    const err = new Error(data.error || `${res.status} ${res.statusText}`)
    err.status = res.status
    err.data = data
    throw err
  }
  return data
}

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))
const fmtTime = (ms) => (ms ? new Date(ms).toLocaleString() : '—')
const dirOf = (p) => (p.includes('/') ? p.slice(0, p.lastIndexOf('/')) : '')

function setStatus(text, cls = '') {
  const el = $('#editor-status')
  el.textContent = text
  el.className = 'status ' + cls
}

// ------------------------------------------------------------------ tree

async function loadTree() {
  const data = await api('GET', '/api/tree')
  state.items = data.items
  $('#meta').textContent = `docs root: ${data.docsRoot} · ${data.items.length} pages`
  renderTree()
}

function renderTree() {
  const tree = $('#tree')
  const byDir = new Map()
  for (const it of state.items) {
    const dir = dirOf(it.path)
    if (!byDir.has(dir)) byDir.set(dir, [])
    byDir.get(dir).push(it)
  }
  const dirs = [...byDir.keys()].sort((a, b) => a.localeCompare(b))
  let html = ''
  for (const dir of dirs) {
    if (dir) html += `<div class="dir-label">${esc(dir)}/</div>`
    for (const it of byDir.get(dir)) {
      const active = state.current && state.current.path === it.path ? ' active' : ''
      html += `<div class="tree-item${active}" data-path="${esc(it.path)}" title="${esc(it.path)}">
        <span class="t">${esc(it.title)}</span><span class="p">${esc(it.path.split('/').pop())}</span></div>`
    }
  }
  tree.innerHTML = html || '<div class="dir-label">No pages found</div>'
  tree.querySelectorAll('.tree-item').forEach((el) => {
    el.addEventListener('click', () => openDoc(el.dataset.path))
  })
}

// ------------------------------------------------------------------ editor

async function openDoc(path) {
  try {
    const doc = await api('GET', `/api/doc?path=${encodeURIComponent(path)}`)
    const fm = { ...(doc.frontmatter || {}) }
    state.current = { ...doc, extraFm: {} }
    for (const k of Object.keys(fm)) {
      if (!['title', 'description'].includes(k)) state.current.extraFm[k] = fm[k]
    }
    $('#f-path').value = doc.path
    $('#f-title').value = fm.title ?? ''
    $('#f-desc').value = fm.description ?? ''
    $('#f-content').value = doc.content
    for (const id of ['btn-save', 'btn-rename', 'btn-delete']) $('#' + id).disabled = false
    setStatus(`Loaded · modified ${fmtTime(doc.mtimeMs)}`)
    renderTree()
  } catch (err) {
    setStatus(`Load failed: ${err.message}`, 'err')
  }
}

async function saveDoc(ev) {
  ev.preventDefault()
  if (!state.current) return
  const frontmatter = { ...state.current.extraFm }
  const title = $('#f-title').value.trim()
  const description = $('#f-desc').value.trim()
  if (title) frontmatter.title = title
  if (description) frontmatter.description = description
  try {
    const r = await api('PUT', '/api/doc', {
      path: state.current.path,
      frontmatter,
      content: $('#f-content').value,
      expectedMtimeMs: state.current.mtimeMs
    })
    state.current.mtimeMs = r.mtimeMs
    state.current.frontmatter = frontmatter
    setStatus(`Saved ✓ ${fmtTime(r.mtimeMs)}`, 'ok')
    await loadTree()
  } catch (err) {
    if (err.status === 409) {
      setStatus('Conflict: file changed on disk — reloading latest. Review and save again.', 'err')
      await openDoc(state.current.path)
    } else {
      setStatus(`Save failed: ${err.message}`, 'err')
    }
  }
}

async function renameDoc() {
  if (!state.current) return
  const from = state.current.path
  const to = prompt('New path (relative to docs/, e.g. guide/renamed-page.md):', from)
  if (!to || to === from) return
  try {
    const r = await api('POST', '/api/doc/rename', { from, to })
    setStatus(`Renamed → ${r.to} (sidebar updated)`, 'ok')
    state.current = null
    $('#f-path').value = ''
    $('#f-content').value = ''
    for (const id of ['btn-save', 'btn-rename', 'btn-delete']) $('#' + id).disabled = true
    setStatus(`Renamed → ${r.to}. Open it from the tree.`, 'ok')
    await loadTree()
    await loadSidebar()
  } catch (err) {
    setStatus(`Rename failed: ${err.message}`, 'err')
  }
}

async function deleteDoc() {
  if (!state.current) return
  const p = state.current.path
  if (!confirm(`Delete ${p}?\n\nThe page is removed from the sidebar too. This cannot be undone (use git for history).`)) return
  try {
    await api('DELETE', '/api/doc', { path: p, confirm: true })
    setStatus(`Deleted ${p}`, 'ok')
    state.current = null
    $('#f-path').value = ''
    $('#f-title').value = ''
    $('#f-desc').value = ''
    $('#f-content').value = ''
    for (const id of ['btn-save', 'btn-rename', 'btn-delete']) $('#' + id).disabled = true
    await loadTree()
    await loadSidebar()
  } catch (err) {
    setStatus(`Delete failed: ${err.message}`, 'err')
  }
}

async function newPage() {
  const p = prompt('New page path (relative to docs/, e.g. guide/my-page.md):')
  if (!p) return
  const title = p.split('/').pop().replace(/\.md$/i, '').replace(/-/g, ' ')
  try {
    await api('POST', '/api/doc', {
      path: p,
      title: title.charAt(0).toUpperCase() + title.slice(1),
      description: ''
    })
    await loadTree()
    await loadSidebar()
    await openDoc(p.replace(/\\/g, '/'))
    setStatus('Page created and registered in sidebar ✓', 'ok')
  } catch (err) {
    setStatus(`Create failed: ${err.message}`, 'err')
  }
}

// ------------------------------------------------------------------ sidebar editor

async function loadSidebar() {
  const data = await api('GET', '/api/sidebar')
  state.sidebar = data.sidebar
  state.sideDirty = false
  renderSidebar()
}

function defaultKey(sb) {
  return Object.keys(sb)[0] || '/'
}

function renderSidebar() {
  const root = $('#side-tree')
  const sb = state.sidebar
  const key = defaultKey(sb)
  const groups = Array.isArray(sb[key]) ? sb[key] : []
  let html = ''
  groups.forEach((g, gi) => {
    html += `<div class="group${!g.items || g.items.length === 0 ? ' empty' : ''}" data-gi="${gi}" draggable="false">
      <div class="group-head" draggable="true" data-gi="${gi}">
        <span class="drag-hint" title="Drag to reorder group">⠿</span>
        <input class="g-title" data-gi="${gi}" value="${esc(g.text ?? '')}" placeholder="Group title">
        <label class="chk" title="Collapsed by default on the site"><input type="checkbox" data-gi="${gi}" class="g-collapsed" ${g.collapsed ? 'checked' : ''}>collapsed</label>
        <button type="button" class="g-del" data-gi="${gi}" title="Remove group">✕</button>
      </div>
      <div class="group-items" data-gi="${gi}">`
    for (const it of g.items ?? []) {
      html += `<div class="side-page" draggable="true" data-gi="${gi}" data-link="${esc(it.link ?? '')}">
        <span class="drag-hint">⠿</span><span>${esc(it.text ?? '')}</span>
        <span class="link">${esc(it.link ?? '')}</span>
        <button type="button" class="p-del" title="Remove from sidebar">✕</button></div>`
    }
    html += '</div></div>'
  })
  root.innerHTML = html || '<p class="hint">No groups — add one.</p>'
  bindSidebarEvents()
}

function markSideDirty() {
  state.sideDirty = true
}

function collectSidebar() {
  const root = $('#side-tree')
  const key = defaultKey(state.sidebar)
  const groups = []
  root.querySelectorAll(':scope > .group').forEach((gel) => {
    const title = gel.querySelector('.g-title').value
    const collapsed = gel.querySelector('.g-collapsed').checked
    const items = []
    gel.querySelectorAll('.side-page').forEach((pel) => {
      items.push({ text: pel.querySelector('span:nth-child(2)').textContent, link: pel.dataset.link })
    })
    groups.push(collapsed ? { text: title, collapsed: true, items } : { text: title, items })
  })
  state.sidebar = { [key]: groups }
}

function bindSidebarEvents() {
  const root = $('#side-tree')
  let drag = null

  root.querySelectorAll('.g-title').forEach((inp) => {
    inp.addEventListener('input', () => { markSideDirty(); collectSidebar(); renderPreservingFocus(inp) })
    inp.addEventListener('keydown', (e) => { if (e.key === 'Enter') inp.blur() })
  })
  root.querySelectorAll('.g-collapsed').forEach((chk) => {
    chk.addEventListener('change', () => { markSideDirty(); collectSidebar(); renderSidebar() })
  })
  root.querySelectorAll('.g-del').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (!confirm('Remove this group (and its items) from the sidebar?')) return
      collectSidebar()
      const key = defaultKey(state.sidebar)
      state.sidebar[key] = state.sidebar[key].filter((_, i) => i !== Number(btn.dataset.gi))
      markSideDirty()
      renderSidebar()
    })
  })
  root.querySelectorAll('.p-del').forEach((btn) => {
    btn.addEventListener('click', () => {
      const pel = btn.closest('.side-page')
      if (!confirm(`Remove "${pel.querySelector('span:nth-child(2)').textContent}" from the sidebar? The page file itself is kept.`)) return
      collectSidebar()
      const key = defaultKey(state.sidebar)
      const gi = Number(pel.dataset.gi)
      state.sidebar[key][gi].items = state.sidebar[key][gi].items.filter((it) => it.link !== pel.dataset.link)
      markSideDirty()
      renderSidebar()
    })
  })

  root.querySelectorAll('.group-head').forEach((head) => {
    head.addEventListener('dragstart', (e) => {
      drag = { type: 'group', gi: Number(head.dataset.gi) }
      head.closest('.group').classList.add('dragging')
      e.dataTransfer.effectAllowed = 'move'
      e.dataTransfer.setData('text/plain', 'group')
    })
    head.addEventListener('dragend', () => {
      root.querySelectorAll('.dragging,.drag-over').forEach((el) => el.classList.remove('dragging', 'drag-over'))
      drag = null
    })
    head.addEventListener('dragover', (e) => {
      if (drag && drag.type === 'group') { e.preventDefault(); head.classList.add('drag-over') }
    })
    head.addEventListener('dragleave', () => head.classList.remove('drag-over'))
    head.addEventListener('drop', (e) => {
      e.preventDefault()
      if (!drag || drag.type !== 'group') return
      collectSidebar()
      const key = defaultKey(state.sidebar)
      const groups = state.sidebar[key]
      const moved = groups.splice(drag.gi, 1)[0]
      groups.splice(Number(head.dataset.gi), 0, moved)
      markSideDirty()
      renderSidebar()
    })
  })

  root.querySelectorAll('.side-page').forEach((pel) => {
    pel.addEventListener('dragstart', (e) => {
      drag = { type: 'page', gi: Number(pel.dataset.gi), link: pel.dataset.link }
      pel.classList.add('dragging')
      e.dataTransfer.effectAllowed = 'move'
      e.dataTransfer.setData('text/plain', 'page')
    })
    pel.addEventListener('dragend', () => {
      root.querySelectorAll('.dragging,.drag-over').forEach((el) => el.classList.remove('dragging', 'drag-over'))
      drag = null
    })
    pel.addEventListener('dragover', (e) => {
      if (drag && drag.type === 'page') { e.preventDefault(); pel.classList.add('drag-over') }
    })
    pel.addEventListener('dragleave', () => pel.classList.remove('drag-over'))
    pel.addEventListener('drop', (e) => {
      e.preventDefault()
      e.stopPropagation()
      if (!drag || drag.type !== 'page') return
      collectSidebar()
      const key = defaultKey(state.sidebar)
      const groups = state.sidebar[key]
      let moved = null
      for (const g of groups) {
        const i = g.items.findIndex((it) => it.link === drag.link)
        if (i >= 0) { moved = g.items.splice(i, 1)[0]; break }
      }
      if (!moved) return
      const targetGroup = groups[Number(pel.dataset.gi)]
      const idx = targetGroup.items.findIndex((it) => it.link === pel.dataset.link)
      targetGroup.items.splice(idx < 0 ? targetGroup.items.length : idx, 0, moved)
      markSideDirty()
      renderSidebar()
    })
  })

  root.querySelectorAll('.group-items').forEach((box) => {
    box.addEventListener('dragover', (e) => {
      if (drag && drag.type === 'page') { e.preventDefault(); box.classList.add('drag-over') }
    })
    box.addEventListener('dragleave', () => box.classList.remove('drag-over'))
    box.addEventListener('drop', (e) => {
      e.preventDefault()
      if (!drag || drag.type !== 'page') return
      collectSidebar()
      const key = defaultKey(state.sidebar)
      const groups = state.sidebar[key]
      let moved = null
      for (const g of groups) {
        const i = g.items.findIndex((it) => it.link === drag.link)
        if (i >= 0) { moved = g.items.splice(i, 1)[0]; break }
      }
      if (!moved) return
      groups[Number(box.dataset.gi)].items.push(moved)
      markSideDirty()
      renderSidebar()
    })
  })
}

function renderPreservingFocus(input) {
  const pos = input.selectionStart
  renderSidebar()
  const next = $('#side-tree').querySelector(`.g-title[data-gi="${input.dataset.gi}"]`)
  if (next) { next.focus(); next.setSelectionRange(pos, pos) }
}

async function saveSidebar() {
  collectSidebar()
  try {
    await api('PUT', '/api/sidebar', { sidebar: state.sidebar })
    state.sideDirty = false
    setStatus('Sidebar saved ✓ (config.mts managed block rewritten)', 'ok')
  } catch (err) {
    setStatus(`Sidebar save failed: ${err.message}`, 'err')
  }
}

// ------------------------------------------------------------------ boot

$('#doc-form').addEventListener('submit', saveDoc)
$('#btn-rename').addEventListener('click', renameDoc)
$('#btn-delete').addEventListener('click', deleteDoc)
$('#btn-new').addEventListener('click', newPage)
$('#btn-refresh').addEventListener('click', () => loadTree().catch((e) => setStatus(e.message, 'err')))
$('#btn-group-add').addEventListener('click', () => {
  collectSidebar()
  const key = defaultKey(state.sidebar)
  state.sidebar[key] = state.sidebar[key] || []
  state.sidebar[key].push({ text: 'New group', items: [] })
  markSideDirty()
  renderSidebar()
})
$('#btn-side-save').addEventListener('click', saveSidebar)
window.addEventListener('beforeunload', (e) => {
  if (state.sideDirty) e.preventDefault()
})

loadTree().catch((e) => setStatus(e.message, 'err'))
loadSidebar().catch((e) => setStatus(`Sidebar: ${e.message}`, 'err'))
