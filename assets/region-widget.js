import { html, render } from 'https://unpkg.com/htm/preact/index.mjs?module'

export const MGG_REGIONS_MAP = { ca: 'mygogear.ca', us: 'mygogear.com' }
export const MGG_FLAGS_MAP = {
  ca: 'https://cdn.shopify.com/s/files/1/1636/9213/files/CA-Canada-Flag-icon.jpg?v=1661887235',
  us: 'https://cdn.shopify.com/s/files/1/1636/9213/files/US-United-States-Flag-icon.jpg?v=1661887239',
}

function Modal() {

}

function RegionWidget({ region }) {
  console.log(region)
  
  if (region === null) {
    return html`
      
    `
  }

  return html`
    <img src="${MGG_FLAGS_MAP[region]}" className="site-header__region-flag" />
  `
}

const savedRegion = /** @type {RegionString} */ (
  localStorage.getItem('mgg-region')
)

render(html`<${RegionWidget} region=${savedRegion} />`, document.querySelector('.site-header__region'))