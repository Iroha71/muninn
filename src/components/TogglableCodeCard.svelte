<script>
import TogglableCard from './TogglableCard.svelte'
import CodeText from './parts/CodeText.svelte'
export let title
export let code
</script>

<TogglableCard title={ title } isOpened={ true} iconName='info'>
  <span slot="content" class="content">
    <CodeText>
      { code }
    </CodeText>
  </span>
</TogglableCard>