<script>
import { Tabs, Tab } from 'svelma'
import Menu from './Menu.svelte'
import ActionButton from '../components/parts/ActionButton.svelte'
export let menus
</script>

<main>
  <Tabs>
    <Tab label="Main Contents">
      <Menu menus={ menus } />
      <slot name="content"></slot>
    </Tab>
    <Tab label="ライブラリ">
      <slot name="library">
        <em>情報なし</em>
      </slot>
    </Tab>
  </Tabs>
  <ActionButton color={ '#9999f9' } />
</main>

<style>
main {
  padding: 2rem;
}
</style>