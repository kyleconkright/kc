<script lang="ts">
	import { gsap } from '$lib/gsap';

	let poster: SVGSVGElement;

	$effect(() => {
		const pages = poster.querySelectorAll('.page');

		gsap.set(pages, {
			svgOrigin: '120 60',
			skewY: (i) => -(2.6 + i * 3.8)
		});

		gsap.from(pages, {
			skewY: 0,
			svgOrigin: '120 60',
			duration: 0.9,
			ease: 'power3.out',
			stagger: 0.09
		});
	});
</script>

<svg bind:this={poster} viewBox="0 0 120 160">
	<defs>
		<filter id="grain">
			<feTurbulence type="fractalNoise" baseFrequency="6" numOctaves="1" result="n" />
			<feColorMatrix in="n" type="saturate" values="0" result="g" />
			<feBlend in="SourceGraphic" in2="g" mode="multiply" result="b" />
			<feComposite in="b" in2="SourceGraphic" operator="in" />
		</filter>
	</defs>
	<g class="page"
		><rect x="10" y="0" width="110" height="120" fill="beige" filter="url(#grain)" /></g
	>
	<g class="page"
		><rect x="20" y="0" width="100" height="120" fill="black" filter="url(#grain)" /></g
	>
	<g class="page"
		><rect x="30" y="0" width="90" height="120" fill="tomato" filter="url(#grain)" /></g
	>
	<g class="page">
		<a href="https://other.supply" aria-label="Other Supply">
			<rect x="40" y="0" width="80" height="120" fill="teal" filter="url(#grain)" />
			<text
				x="80"
				y="45"
				text-anchor="middle"
				font-size="5"
				font-family="Archivo-Variable"
				font-weight="100"
				fill="white">SELECTED WORKS</text
			>
		</a>
	</g>
</svg>

<style>
	svg {
		max-height: 100svh;
		padding: 2rem;
		width: 100%;
	}
</style>
