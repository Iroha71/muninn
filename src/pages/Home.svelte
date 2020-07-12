<script>
import LangCard from '../components/LanguageCard.svelte'
import { languages } from '../lib/languages.js'
</script>

<main>
  <nav class="has-background-primary content">
    <h1>
      <span class="has-text-white">CO</span>SHO<span class="has-text-white">DO</span>
    </h1>
    <img src="/icons/setting.png" alt="設定">
  </nav>
  <div class="columns is-multiline">
  {#each languages as lang}
  <section class="column is-3">
    <LangCard languageName={ lang.name } languageDesc={ lang.desc } />
  </section>
  {/each}
  </div>
</main>

<style lang="scss">
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  padding: 0.75rem 1.5rem;
}
nav h1 {
  margin-bottom: 0;
}
nav img {
  height: 2rem;
}

.columns {
  padding: 2rem;
  padding: 0 1.5rem;
  max-width: 100%;
}
</style>