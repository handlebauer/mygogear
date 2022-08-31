import { h, render } from "https://unpkg.com/preact@latest?module";
import { useState } from "https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module";
import htm from "https://unpkg.com/htm?module";

const html = htm.bind(h);

const MGG_REGIONS_MAP = { ca: "mygogear.ca", us: "mygogear.com" };
const MGG_FLAGS_MAP = {
  ca: "https://cdn.shopify.com/s/files/1/1636/9213/files/CA-Canada-Flag-icon.jpg?v=1661887235",
  us: "https://cdn.shopify.com/s/files/1/1636/9213/files/US-United-States-Flag-icon.jpg?v=1661887239",
};
const STORAGE_KEY = "mgg_region";

function RegionWidget({ savedRegion }) {
  const [region, setRegion] = useState(savedRegion);

  if (region) {
    if (MGG_REGIONS_MAP[region] === window.location.hostname) {
      return html`
        <img src="${MGG_FLAGS_MAP[region]}" />
      `
    } 

    window.location.replace(`https://${MGG_REGIONS_MAP[region]}`)
    return
  }

  function handleClick(value) {
    setRegion(value);
    localStorage.setItem(STORAGE_KEY, value);
  }

  return html`
    <div class="region-modal__container">
      <div class="region-modal__overlay" />
      <dialogue class="region-modal">
        <div class="region-modal__header">
          <h3>Where are you located?</h3>
          <hr />
        </div>
        <div class="region-modal__body">
          <button
            class="region-modal__option"
            onClick="${() => handleClick("ca")}"
          >
            <img src="${MGG_FLAGS_MAP.ca}" />
            Canada
          </button>
          <button
            class="region-modal__option"
            onClick=${() => handleClick("us")}
          >
            <img src="${MGG_FLAGS_MAP.us}" />
            USA
          </button>
        </div>
        <div class="footer">
          <i class="fa-solid fa-circle-exclamation fa-lg"></i>
          Shipping cost is optimized by region
        </div>
      </dialogue>
    </div>
  `;
}

const savedRegion = localStorage.getItem("mgg-region");

render(
  html`<${RegionWidget} region=${savedRegion} />`,
  document.querySelector(".site-header__region")
);
