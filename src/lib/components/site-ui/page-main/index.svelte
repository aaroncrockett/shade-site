<script lang="ts">
	import snakeHero from '$lib/images/tattoos/snake.png?enhanced';
</script>

<section class="flex flex-col gap-0 py-0 sm:flex-row sm:gap-4 sm:py-4">
	<div class="order-2 w-full sm:order-1 sm:w-1/2">
		<h1 class="hero-hl text-100">
			New <span class="!text-neutral-400"> Studio</span><span class="text-neutral-300"> ,</span>
			<span class="text-neutral-400"> Styles</span> <span class="text-neutral-300"> &</span>
			<span class="text-neutral-400"> Social Media</span>
		</h1>
		<section>
			<h3>current location</h3>
			<p>1234 example</p>
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
