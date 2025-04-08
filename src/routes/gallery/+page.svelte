<script lang="ts">
	import { LightboxGallery, GalleryThumbnail, GalleryImage } from 'svelte-lightbox';

	import imgEx from '$lib/images/tattoos/ex/img-ex.png?enhanced';
	import imgEx1 from '$lib/images/tattoos/ex/img-ex-1.png?enhanced';
	import imgEx2 from '$lib/images/tattoos/ex/img-ex-2.png?enhanced';
	import imgExT from '$lib/images/tattoos/ex/img-ex-t.png?enhanced';
	import imgExT1 from '$lib/images/tattoos/ex/img-ex-t-1.png?enhanced';
	import imgExT2 from '$lib/images/tattoos/ex/img-ex-t-2.png?enhanced';

	const thumbnails = [
		{ id: 0, src: imgExT, alt: 'Tattoo 1 thumbnail', title: 'Tattoo 1' },
		{ id: 1, src: imgExT1, alt: 'Tattoo 2 thumbnail', title: 'Tattoo 2' },
		{ id: 2, src: imgExT2, alt: 'Tattoo 3 thumbnail', title: 'Tattoo 3' }
	];

	const fullImages = [
		{ id: 0, src: imgEx, title: 'Tattoo 1', description: 'Description for Tattoo 1' },
		{ id: 1, src: imgEx1, title: 'Tattoo 2', description: 'Description for Tattoo 2' },
		{ id: 2, src: imgEx2, title: 'Tattoo 3', description: 'Description for Tattoo 3' }
	];

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
			{#each thumbnails as { id, src, alt }}
				<GalleryThumbnail {id}>
					<enhanced:img
						class="h-[150px] w-[150px] cursor-pointer rounded object-cover md:h-[250px] md:w-[250px] lg:h-[300px] lg:w-[300px]"
						{src}
						{alt}
					/>
				</GalleryThumbnail>
			{/each}
		</div>
	</svelte:fragment>

	{#each fullImages as { id, src, title, description }}
		<GalleryImage {id} {title} {description}>
			<enhanced:img {src} alt={title} />
		</GalleryImage>
	{/each}
</LightboxGallery>
