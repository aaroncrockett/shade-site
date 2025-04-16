<script lang="ts">
	import snakeHero from '$lib/images/tattoos/snake.png?enhanced';
	import h1ImgBg from '$lib/images/heart-bg-sm.png';
</script>

<section
	class="flex flex-col gap-0 rounded-sm py-4 md:flex-row md:gap-4"
	style={`
		background-image: linear-gradient(rgba(23, 23, 23, 0.7), rgba(23, 23, 23, 0.7)), url(${h1ImgBg});
		background-repeat: repeat;
		background-position: center;
		background-size: 150px 150px;
	`}
>
	<div class="order-2 flex w-full flex-col gap-2 p-4 leading-12 md:order-1 md:w-1/2">
		<h1 class="hero-hl text-100">Booking for May!</h1>
		<h2 class="leading-11">
			DM Me <em>@shade.to.shade.art</em> &nbsp; on Instagram, or email shade.to.shade.art@proton.me
		</h2>
		<h3 class="text-2xl leading-9 font-bold">
			I am taking consultations and booking Flash appointments, but on breaking from tattooing until
			May.
			<br />
			<span class="inline-block pt-4 leading-8"
				>In May I'll be @

				<span class="acumin text-neutral-100"> Black Dahlia Tattoo Co. </span> <br />
			</span>
			<span class="pt- inline-block leading-8"><em>Booking system coming soon.</em></span>
		</h3>
	</div>
	<div class="order-1 w-full md:order-2 md:w-1/2">
		<enhanced:img
			src={snakeHero}
			class="hero-img mx-auto mt-4 max-h-[350px] w-auto rounded-sm md:max-h-[450px] lg:max-h-[600px]"
			alt="Black and gray stippled snake tattoo"
		/>
	</div>
</section>
