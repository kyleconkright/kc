<script lang="ts">
	import { gsap } from '$lib/gsap';
	import { onMount } from 'svelte';

	let logo: SVGSVGElement;

	onMount(() => {
		const ctx = gsap.context(() => {
			const pieces = gsap.utils.toArray<SVGPathElement>('.piece');
			const timeline = gsap.timeline();

			pieces.forEach((piece, index) => {
				const finalPath = piece.getAttribute('d');
				const startPath = piece.dataset.start;

				if (!finalPath || !startPath) return;

				piece.setAttribute('d', startPath);

				timeline.to(
					piece,
					{
						morphSVG: finalPath,
						duration: 0.5,
						ease: 'back.out(1.7)'
					},
					index * 0.35
				);
			});
		}, logo);

		return () => ctx.revert();
	});
</script>

<svg bind:this={logo} viewBox="0 0 1290 1290" role="img" aria-labelledby="kc-logo-title">
	<title id="kc-logo-title">KC logo</title>

	<path class="piece square" data-start="M610 670H840V900H610Z" d="M0 0H1290V1290H0Z" />

	<path
		class="piece triangle-one"
		data-start="M70 900L300 900L70 670Z"
		d="M91 645L641 95H91V645Z"
	/>
	<path
		class="piece triangle-two"
		data-start="M300 900L500 900L300 670Z"
		d="M91 1195H641L91 645V1195Z"
	/>

	<!-- <path
		class="piece triangle-two"
		data-start="M140 470L570 470L570 900Z"
	/> -->

	<path
		class="piece half-circle"
		data-start="M900 900A230 230 0 0 1 1130 670V900Z"
		d="M1198 95C890.377 95 641 341.243 641 645C641 948.757 890.377 1195 1198 1195V95Z"
	/>
</svg>

<style>
	svg {
		display: block;
		width: 100%;
		max-width: 80px;
		height: auto;
		overflow: visible;
	}

	.piece:not(.square) {
		fill: var(--swans-down);
	}
	.piece.square {
		fill: currentColor;
	}
</style>
