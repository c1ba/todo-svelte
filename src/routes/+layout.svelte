<script>
	import './styles.css';
</script>

<div class="app">
	<header>
		<h1>TODO App</h1>
	    <h3>The nth one in the world, but my first one in Svelte</h3>
	</header>

	<main>
		<slot />
	</main>

	<footer>
		<p>The header and this part is in a layout, so it will appear on all the pages</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	header {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
