<script lang="ts">
	import imgMe from '$lib/images/aaron.png?enhanced';
	import h1ImgBg from '$lib/images/heart-bg-sm.png';
	import BgImgWrapper from '$lib/components/site-ui/background-image-wrapper.svelte';
</script>

<svelte:head>
	<title>ShadeToShade Bio</title>
	<meta name="description" content="Artists Biography" />
</svelte:head>

<section class="page-section">
	<BgImgWrapper bgImg={h1ImgBg}>
		<h1 class="text-center">My Bio, yo.</h1>
	</BgImgWrapper>

	<div class="flex flex-col gap-4 rounded-sm bg-neutral-700 p-4 md:flex-row md:gap-6">
		<div>
			<enhanced:img
				src={imgMe}
				alt="Image of the artist"
				class="mx-auto h-auto w-full max-w-[250px] rounded-sm md:w-[400px]"
			/>
		</div>
		<div class="repeated-heart-bg flex flex-col gap-4">
			<p>
				When it comes to tattooing, I try to strike a balance: I take the work seriously, but I also
				believe it’s important to have fun. I’m not a fan of condescending attitudes or inflated
				egos — there’s too much of that in the tattoo industry. At the same time, I stay deeply
				committed to my craft and approach it with focus and intention.
			</p>
			<p>
				I love hiking, jogging, being outdoors, and exploring the endless food carts and restaurants
				around Portland. I’ve got a wide range of interests that include TV/film, music, Buddhism,
				and video games — when I can find the time.
			</p>
			<p>I live in SE Portland with my husband Nick and our dog Jasper.</p>
			<p>
				When it comes to tattooing, I try to strike a balance: I take the work seriously, but I also
				believe it’s important to have fun. I’m not a fan of condescending attitudes or inflated
				egos — there’s too much of that in the tattoo industry. At the same time, I stay deeply
				committed to my craft and approach it with focus and intention.
			</p>
		</div>
	</div>
</section>
