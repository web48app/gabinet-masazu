import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { HelmetProvider, type HelmetServerState } from 'react-helmet-async'
import App from './App'

export function render(url: string) {
  const ctx: { helmet?: HelmetServerState } = {}
  const html = renderToString(
    <StrictMode>
      <HelmetProvider context={ctx}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    </StrictMode>,
  )
  const h = ctx.helmet!
  const head = [h.title.toString(), h.priority.toString(), h.meta.toString(), h.link.toString(), h.script.toString()].join('\n')
  return { html, head, htmlAttrs: h.htmlAttributes.toString() }
}
