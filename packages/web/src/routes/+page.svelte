<script lang="ts">
	import About from '$lib/components/About/About.svelte';
	import OtherSupply from '$lib/components/Articles/OtherSupply/OtherSupply.svelte';
</script>

<div class="app">
	<main>
		<section id="intro">
			<div id="about">
				<About></About>
			</div>
			<div class="empty"></div>
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

	section#intro,
	section#article {
		min-height: 100dvh;
		grid-column: full;
	}

	section#intro {
		display: grid;
		grid-template-columns: subgrid;
	}

	div#about {
		grid-column: content-start / 8;
	}

	div.empty {
		background: white;
		grid-column: 8 / -1;
	}

	/* section {
		display: grid;
		align-items: center;
	}

	section.content {
		grid-template-columns: [full-start] 0.5fr [content-start left-start] 1fr [left-end] 1fr [right-start] 1fr [right-end content-end] 0.5fr [full-end];
		grid-template-rows: [full-start] 1rem [header-start] 1rem [header-end content-start] 1fr [content-end footer-start] 1rem [footer-end] 1rem [full-end];
		grid-gap: 1rem;
		background: var(--grain), var(--almost-white);
	}

	header {
		grid-area: content;
		display: grid;
		grid-template-columns: subgrid;
		gap: inherit;
	}

	nav {
		font-weight: 700;
		grid-area: header / content;
		display: grid;
		grid-template-columns: subgrid;
	}

	footer {
		grid-area: footer / content;
	}

	h1 {
		grid-column: content;
		font-size: 2.5rem;
	}

	p,
	.logo {
		grid-column: left / right-start;
	}

	.poster {
		background: var(--almost-white);
		min-height: 100vh;
	} */
</style>
