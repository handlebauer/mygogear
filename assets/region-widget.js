<script type="module">
  import { html, render } from 'https://unpkg.com/htm/preact/index.mjs?module'

  function App () {
    return html`<p>Testing</p>`
  }

  render(html`<${App} />`, document.querySelector('.site-header__region'))
</script>