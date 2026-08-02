<nav>
	<span>linkedin</span>
	<span>github</span>
</nav>

<style>
	nav {
		grid-column: 1 / 8;
		display: grid;
		grid-template-columns: subgrid;
	}
	nav > :first-of-type {
		grid-column-start: content-start;
	}
</style>
