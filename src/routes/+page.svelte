<script lang="ts">
	import hero from '$lib/images/fml-biz.webp?enhanced';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="FML - Tattoo" />
</svelte:head>

<section class="page-section relative z-10">
	<div class="w-full gap-4 pt-4 md:w-1/2">
		<enhanced:img
			src={hero}
			alt="Black and gray stippled snake tattoo"
			class="mx-auto max-h-[450px] w-auto rounded-sm md:block lg:max-h-[600px]"
		/>
	</div>
	<h1>This website is being built RN. For bookings or questions:</h1>
	<h2>email me at fml.tattoo.pdx@gmail.com</h2>
	<h2>or DM me on instagram @fml_tattoo or @aaron_does_tattoos</h2>
	<p class="text-xl">Currently this website has a tattoo image gallery and flash image gallery.</p>
	<p class="text-xl">
		More is coming soon. Including a nicely designed webpage, about me section, images of my studio,
		and more.
	</p>

	<!-- <div class="order-2 flex w-full flex-col gap-4 pb-4 leading-12 tracking-wide md:order-1 md:w-1/2">
		<h1 class="hero-hl text-100 text-center font-light md:text-left">Booking for May!</h1>
		<h2
			class=" rounded-sm  p-4 text-lg leading-8 font-bold uppercase sm:text-xl sm:leading-10"
		>
			DM Me <em>@shade.to.shade.art</em> &nbsp; on Instagram, or email
			<span>shade.to.shade.art</span> @ <span>proton.me</span>
		</h2>
		<h4 class=" leading-5 font-[900] sm:text-lg sm:leading-8">
			I am taking consultations and booking flash appointments for May.
		</h4>

		<h4 class="leading-5 font-[900] sm:text-lg sm:leading-8">
			<em>Booking system coming soon.</em>
		</h4>
	</div> -->
</section>
