<script lang="ts">
	import snakeHero from '$lib/images/tattoos/snake.png?enhanced';
	import snakeHeroMobile from '$lib/images/tattoos/snake-mobile.png?enhanced';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Shade to Shade Tattoo Artist." />
</svelte:head>

<section class="page-section relative z-5 md:!flex-row">
	<div class="order-2 flex w-full flex-col gap-4 pb-4 leading-12 md:order-1 md:w-1/2">
		<h1 class="hero-hl text-100 text-center md:text-left">Booking for May!</h1>
		<h2 class="leading-11">
			DM Me <em>@shade.to.shade.art</em> &nbsp; on Instagram, or email shade.to.shade.art@proton.me
		</h2>
		<h3 class="text-lg leading-7 font-bold sm:text-2xl sm:leading-9">
			I am taking consultations and booking flash appointments for May.
			<br />
			<span class="inline-block pt-4 leading-8"
				>In May -- tattooing @

				<span class="acumin text-neutral-100"> Black Dahlia Tattoo Co. </span> <br />
			</span>
			<span class="pt- inline-block leading-8"><em>Booking system coming soon.</em></span>
		</h3>
	</div>
	<div class="order-1 w-full gap-4 pt-4 md:order-2 md:w-1/2">
		<enhanced:img
			src={snakeHeroMobile}
			alt="Black and gray stippled snake tattoo (mobile)"
			class="mx-auto block max-h-[300px] w-auto rounded-sm md:hidden"
		/>
		<enhanced:img
			src={snakeHero}
			alt="Black and gray stippled snake tattoo"
			class="mx-auto hidden max-h-[450px] w-auto rounded-sm md:block lg:max-h-[600px]"
		/>
	</div>
</section>
