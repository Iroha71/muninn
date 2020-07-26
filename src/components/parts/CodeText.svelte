<script>
export let fileName
</script>

<span>
  {#if fileName}
    <p class="has-text-info">{ fileName }</p>
  {/if}
  <pre><slot /></pre>
</span>

<style>
pre {
  padding: 0.25rem;
  background: #353535;
  color: white;
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>