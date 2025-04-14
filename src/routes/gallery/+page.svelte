<script lang="ts">
	import { LightboxGallery, GalleryThumbnail, GalleryImage } from 'svelte-lightbox';

	import h1ImgBg from '$lib/images/heart-bg-sm.png';

	import imgFlashLg from '$lib/images/tattoos/flash.png?enhanced';
	import imgFlashTn from '$lib/images/tattoos/flash-sq.png?enhanced';
	import imgSnakeLg from '$lib/images/tattoos/snake.png?enhanced';
	import imgSnakeTn from '$lib/images/tattoos/snake-sq.png?enhanced';
	import imgDocLg from '$lib/images/tattoos/p-doc.png?enhanced';
	import imgDocTn from '$lib/images/tattoos/p-doc-sq.png?enhanced';
	import imgDragonLg from '$lib/images/tattoos/dragon-tbd.png?enhanced';
	import imgDragonTn from '$lib/images/tattoos/dragon-tbd-sq.png?enhanced';
	import imgSkullLg from '$lib/images/tattoos/skull.png?enhanced';
	import imgSkullTn from '$lib/images/tattoos/skull-sq.png?enhanced';
	import imgFlowerLg from '$lib/images/tattoos/flower.png?enhanced';
	import imgFlowerTn from '$lib/images/tattoos/flower-sq.png?enhanced';
	import imgAcornLg from '$lib/images/tattoos/acorn.png?enhanced';
	import imgAcornTn from '$lib/images/tattoos/acorn-sq.png?enhanced';

	const images = [
		{
			id: 0,
			thumbnail: imgFlashTn,
			full: imgFlashLg,
			title: 'FLASH!',
			description: 'Flash! Much more to come!'
		},
		{
			id: 1,
			thumbnail: imgSnakeTn,
			full: imgSnakeLg,
			title: 'Snake',
			description: 'Black and grey, stipple shaded snake.'
		},
		{
			id: 2,
			thumbnail: imgDocTn,
			full: imgDocLg,
			title: 'Plague Doctor',
			description: 'Black work P Doc.'
		},
		{
			id: 3,
			thumbnail: imgDragonTn,
			full: imgDragonLg,
			title: 'Dragon',
			description: 'Black and grey, stipple shaded dragon.'
		},
		{
			id: 4,
			thumbnail: imgSkullTn,
			full: imgSkullLg,
			title: 'Skull',
			description: 'Blackwork skull.'
		},
		{
			id: 5,
			thumbnail: imgFlowerTn,
			full: imgFlowerLg,
			title: 'Flower',
			description: 'Black and grey, stipple shaded flower.'
		},
		{
			id: 6,
			thumbnail: imgAcornTn,
			full: imgAcornLg,
			title: 'Acorn',
			description: 'Outlined and stipple shaded acorn.'
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

<div class="flex flex-col gap-4">
	<div class="text-column">
		<h1
			style={`background-image: url(${h1ImgBg}); background-repeat: repeat; background-position: center; background-size: 150px 150px;`}
			class="p-4 text-center"
		>
			TATTOOS
		</h1>
	</div>

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
</div>
