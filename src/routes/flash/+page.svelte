<script lang="ts">
	import { LightboxGallery, GalleryThumbnail, GalleryImage } from 'svelte-lightbox';

	import h1ImgBg from '$lib/images/heart-bg-sm.png';
	import BgImgWrapper from '$lib/components/site-ui/background-image-wrapper.svelte';

	// Correct import — matching the name from your data file
	import { flashImgData as images } from '$lib/data/images/flash';

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
		<h1 class="text-center">Flash!</h1>
	</BgImgWrapper>
	<section class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
		<!-- Column -->
		<div class="grid gap-4">
			<img class="bg-surface-500 rounded-container" src="https://picsum.photos/220/320?random=1" />
			<img class="bg-surface-500 rounded-container" src="https://picsum.photos/220/120?random=2" />
			<img class="bg-surface-500 rounded-container" src="https://picsum.photos/220/280?random=3" />
		</div>
		<!-- Column -->
		<div class="grid gap-4">
			<img class="bg-surface-500 rounded-container" src="https://picsum.photos/220/300?random=4" />
			<img class="bg-surface-500 rounded-container" src="https://picsum.photos/220/280?random=5" />
			<img class="bg-surface-500 rounded-container" src="https://picsum.photos/220/140?random=6" />
		</div>
		<!-- Column -->
		<div class="grid gap-4">
			<img class="bg-surface-500 rounded-container" src="https://picsum.photos/220/380?random=7" />
			<img class="bg-surface-500 rounded-container" src="https://picsum.photos/300/320?random=8" />
			<img class="bg-surface-500 rounded-container" src="https://picsum.photos/220/140?random=9" />
		</div>
		<!-- Column -->
		<div class="grid gap-4">
			<img class="bg-surface-500 rounded-container" src="https://picsum.photos/220/320?random=10" />
			<img class="bg-surface-500 rounded-container" src="https://picsum.photos/220/140?random=11" />
			<img class="bg-surface-500 rounded-container" src="https://picsum.photos/220/280?random=12" />
		</div>
	</section>

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
