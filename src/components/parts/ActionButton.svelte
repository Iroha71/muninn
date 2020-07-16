<script>
export let color;
const backgroundColor = 'background:' + color
</script>

<main>
  <button style={ backgroundColor }>
    <img src="/icons/info.png" alt="アクションアイコン">
  </button>
</main>

<style>
button {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  width: 5rem;
  height: 5rem;
  padding: 1rem;
  border-radius: 50%;
  opacity: 0.5;
  transition: .3s;
}
button img {
  width: 4rem;
}
button:hover {
  opacity: 1;
}
</style>