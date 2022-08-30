import { html, render } from 'https://unpkg.com/htm/preact/index.mjs?module'

export const MGG_REGIONS_MAP = { ca: 'mygogear.ca', us: 'mygogear.com' }
export const MGG_FLAGS_MAP = {
  ca: 'https://cdn.shopify.com/s/files/1/1636/9213/files/CA-Canada-Flag-icon.jpg?v=1661887235',
  us: 'https://cdn.shopify.com/s/files/1/1636/9213/files/US-United-States-Flag-icon.jpg?v=1661887239',
}

const savedRegion = /** @type {RegionString} */ (
  localStorage.getItem('mgg-region')
)

let region

if (savedRegion === null) {

}

function RegionWidget () {
  return html`
    <img src="${region}" className="site-header__region-flag" />
  `
}

render(html`<${RegionWidget} />`, document.querySelector('.site-header__region'))