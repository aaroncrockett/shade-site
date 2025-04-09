<script lang="ts">
	import { LightboxGallery, GalleryThumbnail, GalleryImage } from 'svelte-lightbox';

	import imgLg1 from '$lib/images/tattoos/snake.png?enhanced';
	import imgTn1 from '$lib/images/tattoos/snake-sq.png?enhanced';

	const images = [
		{
			id: 0,
			thumbnail: imgTn1,
			full: imgLg1,
			title: 'Snake',
			description: 'Black and grey, stipple shaded.'
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
	<title>Gallery</title>
	<meta name="description" content="Shade To Shade gallery of tattoos" />
</svelte:head>

<div class="text-column">
	<h1>Tattoos by Shade To Shade</h1>
</div>

<LightboxGallery enableClickToClose={true} customization={custom}>
	<svelte:fragment slot="thumbnail">
		<div class="s2s-custom-lb flex flex-wrap gap-4">
			{#each images as { id, thumbnail, title, description }}
				<GalleryThumbnail {id}>
					<enhanced:img
						class="h-[150px] w-[150px] cursor-pointer rounded object-cover md:h-[250px] md:w-[250px] lg:h-[300px] lg:w-[300px]"
						src={thumbnail}
						alt={`${title} - ${description}`}
						{title}
					/>
				</GalleryThumbnail>
			{/each}
		</div>
	</svelte:fragment>

	{#each images as { id, full, title, description }}
		<GalleryImage {id} {title} {description}>
			<enhanced:img src={full} alt={title} />
		</GalleryImage>
	{/each}
</LightboxGallery>
