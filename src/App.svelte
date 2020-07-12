<script>
	import Router from 'svelte-spa-router'
	import Home from './pages/Home.svelte'
	import Svelte from './pages/Svelte.svelte'

	const routes = {
		'/': Home,
		'/svelte': Svelte,
		'*': Home
	}
</script>

<main>
	<Router routes={ routes }></Router>
</main>