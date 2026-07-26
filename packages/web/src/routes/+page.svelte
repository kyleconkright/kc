<script lang="ts">
	import Logo from '$lib/components/Logo.svelte';
	import { gsap, SplitText } from '$lib/gsap';
	let heading: HTMLHeadingElement;
	let about: HTMLParagraphElement;

	$effect(() => {
		const heroText = SplitText.create(heading, { type: 'chars' });
		gsap.from(heroText.chars, {
			x: 10,
			autoAlpha: 0,
			rotation: 'random(-30, 30)',
			ease: 'back.out',
			stagger: {
				each: 0.05
			}
		});
	});
</script>

<main>
	<nav>
		<span>linkedin</span>
		<span>github</span>
	</nav>
	<section class="content">
		<header>
			<h1 bind:this={heading}>Hello, my name is Kyle.</h1>
			<p bind:this={about}>
				I am a software engineer based in Los Angeles. Good interfaces are the result of a lot of
				small decisions, and I like making them.
			</p>
			<div class="logo" style="color: var(--blue)">
				<Logo></Logo>
			</div>
		</header>
		<footer></footer>
	</section>
	<section class="poster">
		<!-- <BookCover></BookCover> -->
		<!-- <Cover></Cover> -->
	</section>
	<section class="other-supply">
		<h1>The New Arrivals Bin, Rebuilt</h1>
	</section>
</main>

<style>
	main {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
	section {
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
	}
</style>
