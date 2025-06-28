<script lang="ts">
	import imgMe from '$lib/images/aaron.png?enhanced';
	import h1ImgBg from '$lib/images/heart-bg-sm.png';
	import BgImgWrapper from '$lib/components/ui/background-image-wrapper.svelte';
</script>

<svelte:head>
	<title>ShadeToShade Bio</title>
	<meta name="description" content="Artists Biography" />
</svelte:head>

<section class="page-section">
	<BgImgWrapper bgImg={h1ImgBg}>
		<h1 class="text-center">My Bio, yo.</h1>
	</BgImgWrapper>

	<div
		class="mx-auto flex max-w-[900px] flex-col gap-4 rounded-sm bg-neutral-700 p-4 md:flex-row md:gap-6"
	>
		<div>
			<enhanced:img
				src={imgMe}
				alt="Image of the artist"
				class="mx-auto h-auto w-full max-w-[250px] rounded-sm md:w-[400px]"
			/>
		</div>
		<div class=" flex flex-col gap-4">
			<p>
				I love tattooing and creating art that people are excited about. I want people to feel
				welcome, so don't hesitate to ask any questions.
			</p>
			<p>
				I've been drawing and interested in art since I was a child. In addition to tattooing, I
				have worked as a web designer (and developer). I got an MFA in Painting in 2011, and still
				make art on the side. I also designed and developed this web application.
			</p>
			<p>
				I love hiking, jogging, and exploring the endless food carts and restaurants around
				Portland. In the summer I love going to Rooster Rock and Sauvie Island with my husband and
				friends, and occasionally a night out to bars and events. I’ve got a wide range of interests
				that include TV/film, music, Buddhism.
			</p>
			<p>
				I live in SE Portland with my husband Nick and our dog Jasper (AKA Jasper Johns, AKA Jasper
				James St. James Johns Snow).
			</p>
		</div>
	</div>
</section>
