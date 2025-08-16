<script lang="ts">
	/* @ts-nocheck */

	import { LightboxGallery, GalleryThumbnail, GalleryImage } from 'svelte-lightbox';

	import h1ImgBg from '$lib/images/heart-bg-sm.png';
	import BgImgWrapper from '$lib/components/ui/background-image-wrapper.svelte';

	import { Collections, CollectionNamesMap } from '$lib/types.ts';
	import { Subjects, SubjectNamesMap } from '$lib/types';

	import { localVars } from './page.svelte.ts';

	const { images, customLbStyles, localState } = localVars;

	const filterType: string[] = [];

	const filteredImages = $derived.by(() => {
		return images.filter((img) => {
			if (localState.tags.length === 0) return false;

			if (filterType.includes('collections')) {
				if (!img.collections?.some((tag) => localState.tags.includes(tag))) return false;
			}
			if (filterType.includes('subjects')) {
				if (!img.subjects?.some((tag) => localState.tags.includes(tag))) return false;
			}

			// if (img.styles?.some((tag) => localState.tags.includes(tag))) return true;
			// if (img.techniques?.some((tag) => localState.tags.includes(tag))) return true;
			return true;
		});
	});

	function toggleFlash(tag: (typeof Tag)[number], filterName: string) {
		const index = localState.tags.indexOf(tag);

		if (!filterType.includes(filterName)) {
			filterType.push(filterName);
		} else {
			filterType.splice(filterType.indexOf(filterName), 1);
		}

		if (index === -1) {
			localState.tags = [...localState.tags, tag];
		} else {
			localState.tags = localState.tags.filter((c) => c !== tag);
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
		<h2>Filter by Collection</h2>

		<div class="flex flex-wrap gap-2">
			{#each Collections as collection}
				<button
					type="button"
					class={`btn rounded-sm  ${
						localState.tags.includes(collection)
							? 'border-success-500 text-success-500 border-2 bg-neutral-950/50'
							: ' text-surface-100 border-2 border-neutral-800'
					}`}
					onclick={() => toggleFlash(collection, 'collections')}
				>
					{CollectionNamesMap[collection]}
				</button>
			{/each}
		</div>
	</div>

	<div>
		{#each Subjects as subject}
			<button
				type="button"
				class={`btn rounded-sm  ${
					localState.tags.includes(subject)
						? 'border-success-500 text-success-500 border-2 bg-neutral-950/50'
						: ' text-surface-100 border-2 border-neutral-800'
				}`}
				onclick={() => toggleFlash(subject as any, 'subjects')}
			>
				{SubjectNamesMap[subject]}
			</button>
		{/each}
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
