<script lang="ts">
	/* @ts-nocheck */

	import { LightboxGallery, GalleryThumbnail, GalleryImage } from 'svelte-lightbox';

	import h1ImgBg from '$lib/images/heart-bg-sm.png';
	import BgImgWrapper from '$lib/components/site-ui/background-image-wrapper.svelte';

	import { Collections } from '$lib/types';

	import { localVars } from './page.svelte.ts';

	const { images, customLbStyles, localState } = localVars;

	const filteredImages = $derived.by(() => {
		return images.filter((img) => {
			// Only show images if at least one collection is selected
			if (localState.collections.length === 0) return false;

			const matchesCollection = img.collections.some((collection) =>
				localState.collections.includes(collection)
			);

			const matchesPrice =
				!localState.priceFilter ||
				(localState.priceFilter === 'under200' && img.price <= 200) ||
				(localState.priceFilter === 'over200' && img.price > 200);

			return matchesCollection && matchesPrice;
		});
	});

	function toggleCollection(collection: (typeof Collections)[number]) {
		const index = localState.collections.indexOf(collection);
		if (index === -1) {
			localState.collections = [...localState.collections, collection];
		} else {
			localState.collections = localState.collections.filter((c) => c !== collection);
		}
	}
</script>

<svelte:head>
	<title>Flash Gallery</title>
	<meta name="description" content="Shade To Shade Flash" />
</svelte:head>

<section class="page-section">
	<BgImgWrapper bgImg={h1ImgBg}>
		<h1 class="text-center">Flash!</h1>
	</BgImgWrapper>

	<div>
		<h2 class=" ">Filter by Collection</h2>
		<div class="flex flex-wrap gap-2">
			{#each Collections as collection}
				<button
					type="button"
					class={`btn   ${
						localState.collections.includes(collection)
							? 'bg-neutral-200 text-black'
							: 'bg-neutral-900 text-white'
					}`}
					onclick={() => toggleCollection(collection)}
				>
					{collection}
				</button>
			{/each}
		</div>
	</div>

	<div>
		<h2 class="">Filter by Price</h2>
		<div class="flex gap-2">
			<label class="flex items-center">
				<input
					type="radio"
					name="priceFilter"
					class="mr-2"
					checked={localState.priceFilter === null}
					onclick={() => (localState.priceFilter = null)}
				/>
				<span>All Prices</span>
			</label>

			<label class="flex items-center">
				<input
					type="radio"
					name="priceFilter"
					class="mr-2"
					checked={localState.priceFilter === 'under200'}
					onclick={() => (localState.priceFilter = 'under200')}
				/>
				<span>Under $200</span>
			</label>

			<label class="flex items-center">
				<input
					type="radio"
					name="priceFilter"
					class="mr-2"
					checked={localState.priceFilter === 'over200'}
					onclick={() => (localState.priceFilter = 'over200')}
				/>
				<span>Over $200</span>
			</label>
		</div>
	</div>

	<div
		class="noise-gallery-bg flash-gallery-grid grid auto-rows-auto gap-4 rounded-sm p-1 shadow-sm sm:p-3 md:p-6"
	>
		<LightboxGallery enableClickToClose={true} customization={customLbStyles}>
			<svelte:fragment slot="thumbnail">
				{#each filteredImages as { id, thumbnail, title, description, rotation }}
					<GalleryThumbnail {id}>
						<div>
							<enhanced:img
								class={`cursor-pointer rounded-sm p-2 transition-transform duration-300 ease-in-out lg:p-4 ${rotation}`}
								src={thumbnail}
								alt={`${title} - ${description}`}
								{title}
							/>
						</div>
					</GalleryThumbnail>
				{/each}
			</svelte:fragment>

			{#each filteredImages as { id, full, title, description }}
				<GalleryImage {id} {title} {description}>
					<enhanced:img class="rounded-sm bg-slate-50 p-2 sm:p-4" src={full} alt={title} />
				</GalleryImage>
			{/each}
		</LightboxGallery>
	</div>
</section>
