import { h, render } from "https://unpkg.com/preact@latest?module";
import { useState } from "https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module";
import htm from "https://unpkg.com/htm?module";

const html = htm.bind(h);

const MGG_REGIONS_MAP = {
  ca: "my-go-gear-ca.myshopify.com",
  us: "mygogear.com",
};
const MGG_FLAGS_MAP = {
  ca: "https://cdn.shopify.com/s/files/1/1636/9213/files/ca-flag.jpg?v=1661907861",
  us: "https://cdn.shopify.com/s/files/1/1636/9213/files/us-flag.jpg?v=1661907748",
};
const STORAGE_KEY = "mgg_region";

function RegionWidget() {
  const queryParamsRegion = new URLSearchParams(location.search).get("region");
  if (queryParamsRegion) {
    localStorage.setItem(STORAGE_KEY, queryParamsRegion);
  }

  const [region, setRegion] = useState(localStorage.getItem(STORAGE_KEY));

  if (region) {
    if (MGG_REGIONS_MAP[region] === window.location.hostname) {
      return html` <img src="${MGG_FLAGS_MAP[region]}" /> `;
    }

    // TODO: Change this to location.replace() when ready
    window.location.href = `https://${MGG_REGIONS_MAP[region]}/?region=${region}`;
    return;
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
          <i class="fa-solid fa-location-arrow fa-lg"></i>
          Shipping costs are optimized by region
        </div>
      </dialogue>
    </div>
  `;
}

render(
  html`<${RegionWidget} />`,
  document.querySelector(".site-header__region")
);
