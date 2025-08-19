<script lang="ts">
	import { LightboxGallery, GalleryThumbnail, GalleryImage } from 'svelte-lightbox';

	import { tattoos } from '../../tattoos';

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
	<title>Gallery</title>
	<meta name="description" content="Shade To Shade gallery of tattoos" />
</svelte:head>

<section class="page-section">
	<div class="mx-auto grid grid-cols-3 gap-1 px-2 sm:gap-2 sm:px-4 md:gap-4 lg:grid-cols-4">
		<LightboxGallery enableClickToClose={true} customization={custom}>
			<svelte:fragment slot="thumbnail">
				{#each tattoos as { id, thumbnail, title, description }}
					<GalleryThumbnail {id}>
						<enhanced:img
							class="aspect-square w-full max-w-[220px] cursor-pointer rounded-sm object-cover sm:max-w-[260]"
							src={thumbnail}
							alt={`${title} - ${description}`}
							{title}
						/>
					</GalleryThumbnail>
				{/each}
			</svelte:fragment>

			{#each tattoos as { id, full, title, description }}
				<GalleryImage {id} {title} {description}>
					<enhanced:img src={full} alt={title} />
				</GalleryImage>
			{/each}
		</LightboxGallery>
	</div>
</section>
