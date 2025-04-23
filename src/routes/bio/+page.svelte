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

	<div class="flex flex-col gap-4 rounded-sm bg-neutral-700 p-4 md:flex-row md:gap-6">
		<div>
			<enhanced:img
				src={imgMe}
				alt="Image of the artist"
				class="mx-auto h-auto w-full max-w-[250px] rounded-sm md:w-[400px]"
			/>
		</div>
		<div class=" flex flex-col gap-4">
			<p>
				I've been drawing and interested in art since I was a child. In addition to tattooing, I
				have worked as a web designer (and developer). I taught 2D design to college students when I
				was a graduate student in Painting, as well. My undergrad was in Drawing and Graphic Design.
				In my spare time I work on my own art. I also designed and developed this web application.
			</p>
			<p>
				I love hiking, jogging, being outdoors, and exploring the endless food carts and restaurants
				around Portland. I’ve got a wide range of interests that include TV/film, music, Buddhism,
				and video games — when I can find the time.
			</p>
			<p>I live in SE Portland with my husband Nick and our dog Jasper.</p>
			<p>
				Tattooing is something I care deeply about, and I bring a lot of focus and intention to
				every piece I do. That said, I think it’s just as important to keep the vibe relaxed and
				fun. I don’t have much patience for ego or gatekeeping — I’d rather create a space where
				people feel welcome.
			</p>
		</div>
	</div>
</section>
