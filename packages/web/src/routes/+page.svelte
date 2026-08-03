<script lang="ts">
	import About from '$lib/components/About/About.svelte';
	import OtherSupply from '$lib/components/Articles/OtherSupply/OtherSupply.svelte';
</script>

<div class="app">
	<main>
		<section id="about">
			<About></About>
		</section>
		<section id="article">
			<OtherSupply></OtherSupply>
		</section>
	</main>
	<!-- <footer></footer> -->
</div>

<style>
	div.app {
		min-height: 100dvh;
		display: grid;
		grid-template-columns: var(--page-grid);
		column-gap: var(--page-grid-gap);
	}
	main {
		height: 100%;
		grid-column: full;
		display: grid;
		grid-template-columns: subgrid;
	}

	section#about,
	section#article {
		min-height: 100dvh;
		grid-column: full;
	}
</style>
