<script lang="ts">
	import { gsap } from '$lib/gsap';

	let poster: SVGSVGElement;

	$effect(() => {
		const paths = poster.querySelectorAll('path');

		gsap.from(paths, {
			scaleX: 0,
			svgOrigin: '120 60',
			duration: 0.7,
			ease: 'back.out(1.1)',
			stagger: { each: 0.08, from: 'start' }
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
	<path filter="url(#grain)" d="M 10 5 l 110 -5 l 0 120 l -110 10 Z" fill="beige"></path>
	<path filter="url(#grain)" d="M 20 10 l 100 -10 l 0 120 l -100 20 Z" fill="black"> </path>
	<path filter="url(#grain)" d="M 30 15 l 90 -15 l 0 120 l -90 30 Z" fill="tomato"></path>
	<g>
		<a href="https://other.supply" aria-label="Records">
			<path filter="url(#grain)" d="M 40 20 l 80 -20 l 0 120 l -80 40 Z" fill="teal"></path>
			<text
				x="50"
				y="40"
				font-size="7"
				fill="white"
				font-family="ClashDisplay-Variable"
				font-weight="600"
			>
				OTHER SUPPLY
			</text>
		</a>
	</g>
</svg>

<style>
	svg {
		padding: 2rem;
		width: 100%;
		max-height: 100vh;
	}
</style>
