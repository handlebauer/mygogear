import { html, render } from 'https://unpkg.com/htm/preact/index.mjs?module'

function RegionWidget () {
  return html`<p>Testing</p>`
}

render(html`<${RegionWidget} />`, document.querySelector('.site-header__region'))