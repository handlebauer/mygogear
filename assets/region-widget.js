import { h, render } from 'https://unpkg.com/preact@latest?module';
import { useState } from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module'
import htm from 'https://unpkg.com/htm?module';

const html = htm.bind(h);

export const MGG_REGIONS_MAP = { ca: 'mygogear.ca', us: 'mygogear.com' }
export const MGG_FLAGS_MAP = {
  ca: 'https://cdn.shopify.com/s/files/1/1636/9213/files/CA-Canada-Flag-icon.jpg?v=1661887235',
  us: 'https://cdn.shopify.com/s/files/1/1636/9213/files/US-United-States-Flag-icon.jpg?v=1661887239',
}

function RegionWidget({ savedRegion }) {
  const [region, setRegion] = useState(savedRegion)
  
  function onSumbit(event) {
    event.preventDefault()
    setRegion(event.target.value)
  }
  
  if (region === undefined) {
    return html`
      <div class="region-modal__container">
        <div class="region-modal__overlay" />
        <form class="region-modal">
          <div class="region-modal__header">
            <h3>Where are you located?</h3>
            <hr />
          </div>
          <div class="region-modal__body">
            <button class="region-modal__option">
              <img src="${MGG_FLAGS_MAP.ca}" />
              Canada
            </button>
            <button class="region-modal__option">
              <img src="${MGG_FLAGS_MAP.us}" />
              USA
            </button>
          </div>

          <i class="fa-solid fa-circle-info"></i> Note: Shipping cost is optimized by region
        </form>
      </div>
    `
  }

  return html`
    <img src="${MGG_FLAGS_MAP[region]}" />
  `
}

const savedRegion = /** @type {RegionString} */ (
  localStorage.getItem('mgg-region')
)

render(html`<${RegionWidget} region=${savedRegion} />`, document.querySelector('.site-header__region'))