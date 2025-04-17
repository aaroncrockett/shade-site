<script lang="ts">
	import { LightboxGallery, GalleryThumbnail, GalleryImage } from 'svelte-lightbox';

	import h1ImgBg from '$lib/images/heart-bg-sm.png';
	import BgImgWrapper from '$lib/components/site-ui/background-image-wrapper.svelte';

	import imgFlashLg from '$lib/images/tattoos/flash.png?enhanced';
	import imgFlashTn from '$lib/images/tattoos/flash-sq.png?enhanced';

	const images = [
		{
			id: 0,
			thumbnail: imgFlashTn,
			full: imgFlashLg,
			title: 'FLASH!',
			description: 'Flash! Much more to come!'
		}
	];

	// Custom lightbox settings
	const custom = {
		lightboxContentProps: {
			style: 'display: flex; align-items: center; justify-content: center;'
		},
		lightboxProps: {
			style: 'max-width: 75vw; max-height: 75vh;',
			closeButton: {
				style: 'color: #666666;'
			}
		}
	};
</script>

<svelte:head>
	<title>Flash Gallery</title>
	<meta name="description" content="Shade To Shade Flash" />
</svelte:head>

<section class="page-section">
	<BgImgWrapper bgImg={h1ImgBg}>
		<h1 class="text-center">FLASH</h1>
	</BgImgWrapper>

	<div class="mx-auto grid grid-cols-3 gap-4 px-2 sm:gap-6 sm:px-4 lg:grid-cols-4">
		<LightboxGallery enableClickToClose={true} customization={custom}>
			<svelte:fragment slot="thumbnail">
				{#each images as { id, thumbnail, title, description }}
					<GalleryThumbnail {id}>
						<enhanced:img
							class="aspect-square w-full max-w-[260px] cursor-pointer rounded-sm object-cover"
							src={thumbnail}
							alt={`${title} - ${description}`}
							{title}
						/>
					</GalleryThumbnail>
				{/each}
			</svelte:fragment>

			{#each images as { id, full, title, description }}
				<GalleryImage {id} {title} {description}>
					<enhanced:img src={full} alt={title} />
				</GalleryImage>
			{/each}
		</LightboxGallery>
	</div>
</section>
