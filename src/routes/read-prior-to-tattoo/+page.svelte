<script lang="ts">
	import h1ImgBg from '$lib/images/heart-bg-sm.png';
	import BgImgWrapper from '$lib/components/ui/background-image-wrapper.svelte';

	import Aftercare from '$lib/components/ui/aftercare.svelte';

	import TattooPrep from '$lib/components/ui/tattoo-prep.svelte';
</script>

<svelte:head>
	<title>ShadeToShade Bio</title>
	<meta name="description" content="Artists Biography" />
</svelte:head>

<section class="page-section">
	<BgImgWrapper bgImg={h1ImgBg}>
		<h1 class="text-center">Read Prior To Your Tattoo</h1>
	</BgImgWrapper>

	<div class="flex flex-col gap-4 rounded-sm p-4">
		<h2>Tattoo Prep</h2>
		<TattooPrep />
	</div>
	<div class="flex flex-col gap-4 rounded-sm p-4">
		<h2>Aftercare</h2>
		<Aftercare />
	</div>
</section>
