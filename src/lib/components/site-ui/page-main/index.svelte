<script lang="ts">
	import snakeHero from '$lib/images/tattoos/snake.png?enhanced';
</script>

<section class="flex flex-col gap-0 py-0 sm:flex-row sm:gap-4 sm:py-4">
	<div class="order-2 flex w-full flex-col gap-6 sm:order-1 sm:w-1/2">
		<h1 class="hero-hl text-100">
			Coming Soon! <br /> <span class="!text-neutral-400"> Tattooing</span>
			<span class="text-neutral-400">
				<span class="text-neutral-300"> @ </span>Black Dahlia Tattoo Co<span
					class="text-neutral-300">.</span
				> In May</span
			>
			<!-- <br class="hidden sm:inline-block" />
			<span class="text-neutral-400"> Social Media</span>
			<span class="text-neutral-300"> & <br class="hidden sm:inline-block" /></span>
			<span class="text-neutral-400"
				><span class="text-neutral-300">(</span>Web<span class="text-neutral-300">)</span> Site</span
			> -->
		</h1>
		<section class="flex flex-col gap-4">
			<p>I am currently creating this site, so bare with me while the features are sparse.</p>
			<!-- <p class="text-3xl">Scroll down to seem my tattoos :D</p> -->
		</section>
	</div>
	<div class="order-1 w-full sm:order-2 sm:w-1/2">
		<enhanced:img
			src={snakeHero}
			class="hero-img mx-auto max-h-[350px] w-auto sm:max-h-[450px] lg:max-h-[600px]"
			alt="Black and gray stippled snake tattoo"
		/>
	</div>
</section>

<style>
	.hero-img {
		clip-path: inset(10% 0);
	}

	@media (min-width: 640px) {
		.hero-img {
			clip-path: inset(0);
		}
	}
</style>
