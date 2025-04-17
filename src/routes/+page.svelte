<script lang="ts">
	import snakeHero from '$lib/images/tattoos/snake.png?enhanced';
	import snakeHeroMobile from '$lib/images/tattoos/snake-mobile.png?enhanced';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Shade to Shade Tattoo Artist." />
</svelte:head>

<section class="page-section relative z-5 md:!flex-row">
	<div class="order-2 flex w-full flex-col gap-4 pb-4 leading-12 tracking-wide md:order-1 md:w-1/2">
		<h1 class="hero-hl text-100 text-center font-light md:text-left">Booking for May!</h1>
		<h2
			class="rounded-sm bg-neutral-900/50 p-4 text-2xl leading-10 font-bold uppercase sm:text-3xl sm:leading-11"
		>
			DM Me <em>@shade.to.shade.art</em> &nbsp; on Instagram, or email shade.to.shade.art@proton.me
		</h2>
		<h4 class=" leading-5 font-[900] sm:text-lg sm:leading-8">
			I am taking consultations and booking flash appointments for May.
		</h4>

		<h4 class="leading-5 font-[900] sm:text-lg sm:leading-8">
			<em>Booking system coming soon.</em>
		</h4>
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
