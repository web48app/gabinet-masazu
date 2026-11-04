import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.dirname(fileURLToPath(import.meta.url))
const dist = path.join(root, 'dist')
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8')
const { render } = await import(path.join(root, 'dist-ssr', 'entry-server.js'))

const routes = ['/', '/o-mnie', '/cennik', '/kontakt', '/404']

for (const url of routes) {
  const { html, head, htmlAttrs } = render(url)
  let page = template.replace('<!--app-head-->', head).replace('<!--app-html-->', html)
  if (htmlAttrs) page = page.replace(/<html[^>]*>/, `<html ${htmlAttrs}>`)
  const file = url === '/' ? 'index.html' : url === '/404' ? '404.html' : `${url.slice(1)}.html`
  fs.writeFileSync(path.join(dist, file), page)
  console.log('prerendered', url, '->', file)
}
fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true })
