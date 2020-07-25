<script>
import ToggalableCard from './TogglableCard.svelte'
export let menus
</script>

<ToggalableCard title="目次" iconName="info" isOpened={ false }>
  <span slot="content" class="content">
    <ul>
      {#each menus as menu}
        <li>{ menu }</li>
      {/each}
    </ul>
  </span>
</ToggalableCard>

