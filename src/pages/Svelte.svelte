<script>
/* コンポーネント */
import DetailLayout from '../components/DetailLayout.svelte'
import { getLanguage, getNamesOnly } from '../lib/languages.js'
import Svelte from '../lib/svelte.js'
import { libs } from '../lib/svelte.js'
import TogglableCodeCard from '../components/TogglableCodeCard.svelte'
/* スクリプト */
const lang = getLanguage('svelte')
</script>

<DetailLayout menus={ getNamesOnly(Svelte.datas) }>
  <span slot="content">
    {#each Svelte.datas as svlt}
      <TogglableCodeCard title={ svlt.title } code={ svlt.content } />
    {/each}
  </span>
  <span slot="library">
    {#each libs as library}
      <TogglableCodeCard title={ library.title } code={ library.content } />
    {/each}
  </span>
</DetailLayout>