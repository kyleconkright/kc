<script lang="ts">
	import { gsap, SplitText } from '$lib/gsap';

	let wrapper: HTMLElement;
	let title: HTMLHeadingElement;

	$effect(() => {
		const split = SplitText.create(title, { type: 'chars, words' });

		const tween = gsap.from(split.chars, {
			yPercent: 'random(-500, -100)',
			rotation: 'random(-20, 20)',
			color: () => `hsl(${gsap.utils.random(0, 360)} 80% 60%)`,
			ease: 'back.out(1.2)',
			stagger: 0.05,
			scrollTrigger: {
				trigger: wrapper,
				start: 'top 60%',
				end: 'top 0%',
				scrub: 1
			}
		});

		gsap.to(split.chars, {
			fontWeight: 'random(300,700)'
		});

		return () => {
			tween.scrollTrigger?.kill();
			tween.kill();
			split?.revert();
		};
	});
</script>

<article bind:this={wrapper} class="interview">
	<ul class="meta">
		<li>An Abridged Conversation</li>
		<li>other.supply</li>
	</ul>

	<header class="interview__header">
		<h2 bind:this={title} class="interview__headline">The Case for Browsing.</h2>
	</header>
	<h3 class="interview__deck">
		On record collecting, the joy of discovery, and resisting the algorithm.
	</h3>
	<div class="interview__body">
		<div class="qa">
			<p class="qa__q">Let's start with the obvious one. Why build this?</p>
			<p class="qa__a">
				Because I kept missing things. There are maybe a dozen shops I care about, and every one of
				them has its own site, its own new-arrivals page, its own email list I've stopped reading.
				Checking all of them takes half an hour and I'd usually find out about something two weeks
				after it sold out.
			</p>
		</div>

		<div class="qa">
			<p class="qa__q">So it's a time problem.</p>
			<p class="qa__a">
				That's how it started. It turned into something else pretty quickly. The thing I actually
				missed wasn't efficiency, it was browsing. There's a specific feeling in a shop where you're
				flipping through a bin with no particular goal and something stops you. You weren't looking
				for it. You didn't know it existed. That's the whole experience, and no search box on earth
				can give it to you, because search requires you to already know what you want.
			</p>
		</div>

		<blockquote class="pullquote">
			<p>Search requires you to already know what you want.</p>
		</blockquote>

		<div class="qa">
			<p class="qa__q">How do you rebuild that online?</p>
			<p class="qa__a">
				Mostly by taking things away. The instinct with a site like this is to add filters, sorting,
				recommendations, a whole apparatus. I went the other direction. It's a wall of what came in
				recently, and you scroll. No algorithm deciding what you'd like. No personalization. The
				randomness is the feature.
			</p>
		</div>

		<figure class="interview__figure">
			<img src="/images/placeholder-grid.jpg" alt="" />
			<figcaption>
				The main view. Everything that arrived this week, in the order it arrived.
			</figcaption>
		</figure>

		<div class="qa">
			<p class="qa__q">What's the hardest part technically?</p>
			<p class="qa__a">
				Every shop structures its data differently, and none of them are trying to be read by a
				machine. Pressing information especially. One store lists a reissue as a reissue, another
				one just says the album name and year and you have no idea what you're actually looking at.
				Getting that consistent enough to be useful took longer than everything else combined.
			</p>
		</div>

		<div class="qa">
			<p class="qa__q">You collect mostly nineties hip hop. Did that shape the design?</p>
			<p class="qa__a">
				Probably more than I realized at the time. That era has a very particular visual language
				and I think some of it leaked in. But I tried not to make it a nineties hip hop site. I
				wanted someone into jazz reissues or Brazilian records or whatever to open it and feel like
				it was built for them too.
			</p>
		</div>

		<figure class="interview__figure">
			<img src="/images/placeholder-sleeve.jpg" alt="" />
			<figcaption>Placeholder.</figcaption>
		</figure>

		<div class="qa">
			<p class="qa__q">
				You were a tour manager before you were an engineer. Does that show up in how you work?
			</p>
			<p class="qa__a">
				Constantly. Tour managing is a job where nobody notices you unless something goes badly.
				Everything you do well is invisible. You develop a very high tolerance for details that
				don't announce themselves, and you learn that the difference between a good night and a bad
				one is usually about forty small things nobody will ever notice.
			</p>
			<p class="qa__a">
				That's basically front end work. The difference between a good night and a bad one is about
				forty small things nobody will ever notice.
			</p>
		</div>

		<blockquote class="pullquote">
			<p>
				The difference between a good night and a bad one is about forty small things nobody will
				ever notice.
			</p>
		</blockquote>

		<div class="qa">
			<p class="qa__q">What's next for it?</p>
			<p class="qa__a">
				I have a long list and I'm suspicious of most of it. The failure mode for a project like
				this is that you keep adding until it becomes the thing you were trying to avoid. Right now
				I'm mostly interested in adding more shops and leaving the rest alone.
			</p>
		</div>

		<div class="qa">
			<p class="qa__q">Last one. What's the best thing you've found through your own site?</p>
			<p class="qa__a">
				An original press of something I'd been half looking for since college, sitting in a shop in
				Portland I'd never heard of. Twelve dollars. I would never have found it any other way, and
				that's the entire argument for the thing.
			</p>
		</div>
	</div>
</article>

<style lang="css">
	@import './OtherSupply.css';
</style>
