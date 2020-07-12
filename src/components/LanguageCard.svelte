<script>
import { push } from 'svelte-spa-router'
import 'bulma/css/bulma.css'
export let languageName
export let languageDesc
import { Collapse } from 'svelma'

const iconPath = '/images/languageLogos/' + `${ languageName }.png`
</script>

<main>
  <div class="card" on:click={ () => push(`/${ languageName }`) }>
    <div class="card-image">
      <figure class="image is-square">
        <img src={ iconPath } alt="">
      </figure>
    </div>
    <header class="card-header">
      <p class="card-header-title has-text-centered">{ languageName }</p>
    </header>
    <article class="card-content">
      { languageDesc }
    </article>
    <footer class="card-footer">
      <Collapse open={ false } class="topic-area">
        <button class="button is-primary" slot="trigger">TOPIC</button>
        <div class="notification">
          <div class="content">
            test
          </div>
        </div>
      </Collapse>
    </footer>
  </div>
</main>

<style>
footer {
  padding: 0.75rem 1rem;
}
footer div {
  margin: auto;
}
</style>