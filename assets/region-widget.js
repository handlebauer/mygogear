import { h, render } from 'https://unpkg.com/preact@latest?module';
import { useState } from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module'
import htm from 'https://unpkg.com/htm?module';

const html = htm.bind(h);

export const MGG_REGIONS_MAP = { ca: 'mygogear.ca', us: 'mygogear.com' }
export const MGG_FLAGS_MAP = {
  ca: 'https://cdn.shopify.com/s/files/1/1636/9213/files/CA-Canada-Flag-icon.jpg?v=1661887235',
  us: 'https://cdn.shopify.com/s/files/1/1636/9213/files/US-United-States-Flag-icon.jpg?v=1661887239',
}

function IconImportant() {
  return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 20c5.514 0 10-4.486 10-10S15.514 0 10 0 0 4.486 0 10s4.486 10 10 10zm1-6a1 1 0 11-2 0v-4a1 1 0 112 0v4zm-1-9a1 1 0 100 2 1 1 0 000-2z" fill="#5C5F62"/></svg>`
}

function RegionWidget({ savedRegion }) {
  const [region, setRegion] = useState(savedRegion)
  
  function handleClick(value) {
    setRegion(value)
  }
  
  if (region === undefined) {
    return html`
      <div class="region-modal__container">
        <div class="region-modal__overlay" />
        <dialogue class="region-modal">
          <div class="region-modal__header">
            <h3>Where are you located?</h3>
            <hr />
          </div>
          <div class="region-modal__body">
            <button class="region-modal__option" onClick="${() => handleClick('ca')}">
              <img src="${MGG_FLAGS_MAP.ca}" />
              Canada
            </button>
            <button class="region-modal__option" onClick=${() => handleClick('us')}>
              <img src="${MGG_FLAGS_MAP.us}" />
              USA
            </button>
          </div>

          <p>Note: shipping cost is optimized by region</p>
        </dialogue>
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