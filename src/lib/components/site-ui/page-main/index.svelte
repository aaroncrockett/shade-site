<script lang="ts">
	import NavMainItems from '$lib/components/site-ui/nav/main-items.svelte';
	import snakeHero from '$lib/images/tattoos/snake.png?enhanced';
	import h1ImgBg from '$lib/images/heart-bg-sm.png'; // no ?enhanced!
</script>

<section
	class="flex flex-col gap-0 py-0 md:flex-row md:gap-4 md:py-4"
	style={`background-image: url(${h1ImgBg}); background-repeat: repeat; background-position: center; background-size: 150px 150px;`}
>
	<div class="order-2 flex w-full flex-col gap-6 p-4 md:order-1 md:w-1/2">
		<h1 class="hero-hl text-100">
			I'm on a little break rn.

			<!-- <br class="hidden md:inline-block" />
			<span class="text-neutral-400"> Social Media</span>
			<span class="text-neutral-300"> & <br class="hidden md:inline-block" /></span>
			<span class="text-neutral-400"
				><span class="text-neutral-300">(</span>Web<span class="text-neutral-300">)</span> Site</span
			> -->
		</h1>
		<h2>
			Anytime, Feel Free To DM Me <em>@shade.to.shade.art</em> &nbsp; on BlueSky/Instagram , or
			email shade.to.shade.art@proton.me -- to setup appointments for May.
			<br />
			<span>COMING IN MAY... I'll be tattooing @ </span>
			<span class="text-neutral-400">
				<span class="text-neutral-300"> </span>Black Dahlia Tattoo Co<span class="text-neutral-300"
					>.</span
				>
			</span>
		</h2>
	</div>
	<div class="order-1 w-full md:order-2 md:w-1/2">
		<enhanced:img
			src={snakeHero}
			class="hero-img mx-auto max-h-[350px] w-auto md:max-h-[450px] lg:max-h-[600px]"
			alt="Black and gray stippled snake tattoo"
		/>
	</div>
</section>

<style>
	.hero-img {
		clip-path: inset(10% 0);
	}

	@media (min-width: 768px) {
		.hero-img {
			clip-path: inset(0);
		}
	}
</style>
