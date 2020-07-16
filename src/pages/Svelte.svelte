<script>
/* コンポーネント */
import DetailLayout from '../components/DetailLayout.svelte'
import ActionButton from '../components/parts/ActionButton.svelte'
import CodeText from '../components/parts/CodeText.svelte'
import TogglableCard from '../components/TogglableCard.svelte'
import { Collapse } from 'svelma'
import { getLanguage } from '../lib/languages.js'
/* スクリプト */
const lang = getLanguage('svelte')
</script>

<DetailLayout>
  <span slot="content">
    <TogglableCard title="導入" iconName="info">
    <span slot="content">
      <CodeText>npx degit sveltejs/template [[アプリ名]]</CodeText>
    </span>
    </TogglableCard>
    <TogglableCard title="変数" iconName="info">
      <span slot="content" class="content">
        <CodeText>
        </CodeText>
      </span>
    </TogglableCard>
  </span>
  <ActionButton color={ lang.color } />
</DetailLayout>