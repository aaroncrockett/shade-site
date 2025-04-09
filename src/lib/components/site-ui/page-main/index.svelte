<script lang="ts">
	import snakeHero from '$lib/images/tattoos/snake.png?enhanced';
</script>

<section class="flex flex-col gap-4 py-4 sm:flex-row">
	<div class="w-full sm:w-1/2">
		<h1 class="bold text-3xl">New Spring Studio, Styles & Social Media!</h1>
		<section>
			<h3>current location</h3>
			<p>1234 example</p>
		</section>
	</div>
	<div class="w-full sm:w-1/2">
		<enhanced:img
			src={snakeHero}
			class="max-h-[250px] w-auto sm:max-h-[450px] lg:max-h-[600px]"
			alt="Black and gray stippled snake tattoo"
		/>
	</div>
</section>
