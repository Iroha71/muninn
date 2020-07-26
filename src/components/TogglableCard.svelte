<script>
export let isOpened
const toggleContent = () => {
  isOpened = !isOpened
}
export let title;
export let iconName;
const ICON_PATH = '/icons/' + iconName + '.png'
</script>

<div class="card">
  <header class="card-header" on:click={ toggleContent }> 
    <p class="card-header-title">
      <img src={ ICON_PATH } alt="カードアイコン">
      { title }
    </p>
    {#if isOpened}
      <p class="controll-info">クリックして閉じる</p>
    {:else}
      <p class="controll-info">クリックして開く</p>
    {/if}
  </header>
  {#if isOpened}
    <section class="card-content">
      <slot name="content" />
    </section>
  {/if}
</div>

<style>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
header img {
  height: 2rem;
  width: 2rem;
  margin-right: 1rem;
}
.controll-info {
  padding: 0.75rem 1rem;
}
.card {
  margin-bottom: 0.75rem;
}
</style>