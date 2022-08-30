import { html, render } from 'https://unpkg.com/htm/preact/index.mjs?module'

function RegionWidget () {
  return html`
    <img src="https://cdn.shopify.com/s/files/1/1636/9213/files/US-United-States-Flag-icon.jpg?v=1661887239" className="site-header__region-flag" />
  `
}

render(html`<${RegionWidget} />`, document.querySelector('.site-header__region'))