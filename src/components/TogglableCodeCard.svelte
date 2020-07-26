<script>
import TogglableCard from './TogglableCard.svelte'
import CodeText from './parts/CodeText.svelte'
export let title
export let code
export let fileName
if (!fileName) {
  fileName = ''
}
</script>

<TogglableCard title={ title } isOpened={ true} iconName='info'>
  <span slot="content" class="content">
    <CodeText fileName={ fileName }>
      { code }
    </CodeText>
  </span>
</TogglableCard>