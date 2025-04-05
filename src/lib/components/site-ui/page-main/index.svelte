<script lang="ts">
	import snakeHero from '$lib/images/tattoos/snake.png?enhanced';
</script>

<section class="flex flex-col gap-4 sm:flex-row">
	<div class="w-full sm:w-1/2">
		<h1>Shade To Shade Homepage</h1>
	</div>
	<div class="w-full sm:w-1/2">
		<enhanced:img
			src={snakeHero}
			class="max-h-[250px] w-auto sm:max-h-[450px] lg:max-h-[600px]"
			alt="Black and gray stippled snake tattoo"
		/>
	</div>
</section>
