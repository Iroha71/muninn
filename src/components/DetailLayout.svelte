<script>
import { Tabs, Tab } from 'svelma'
</script>

<main>
  <Tabs>
    <Tab label="Main Contents">
      <slot name="content"></slot>
    </Tab>
    <Tab label="ライブラリ">
      <slot name="library">
        <!-- <em>情報なし</em> -->
      </slot>
    </Tab>
  </Tabs>
  <slot></slot>
</main>

<style>
main {
  padding: 2rem;
}
</style>