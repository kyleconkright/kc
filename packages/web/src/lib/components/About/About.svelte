<script lang="ts">
	import Logo from '$lib/components/Logo.svelte';
</script>

<div class="content">
	<ul>
		<li>
			<span>linkedin</span>
		</li>
		<li>
			<span>github</span>
		</li>
		<li>
			<span>product hunt</span>
		</li>
	</ul>
	<div class="hello">
		<h1>Hello, my name is Kyle.</h1>
		<p>
			I am a software engineer based in Los Angeles. Good interfaces are the result of a lot of
			small decisions, and I like making them.
		</p>
		<div class="logo" style="color: var(--blue)">
			<Logo></Logo>
		</div>
	</div>
</div>

<style>
	div.content {
		height: 100%;
		display: grid;
		grid-template-columns: repeat(6, 1fr);
	}

	ul,
	div.content > div.hello {
		grid-area: 1 / 1 / -1 / -1;
		display: grid;
		grid-template-columns: subgrid;
	}

	ul {
		padding-block: 1rem;
		font-family: 'ClashDisplay-Variable';
		font-weight: 600;
	}

	ul li {
		grid-column: span / 3;
	}

	div.content div.hello {
		place-content: center;
		row-gap: 1rem;
	}

	h1 {
		grid-column: 1 / -1;
	}
	p {
		grid-column: 1 / 5;
	}
	div.logo {
		grid-column-start: 1;
	}
</style>
