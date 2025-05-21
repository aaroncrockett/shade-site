<script lang="ts">
	/* @ts-nocheck */

	import { LightboxGallery, GalleryThumbnail, GalleryImage } from 'svelte-lightbox';

	import h1ImgBg from '$lib/images/heart-bg-sm.png';
	import BgImgWrapper from '$lib/components/ui/background-image-wrapper.svelte';

	import { Collections, CollectionNamesMap } from '$lib/types.ts';
	import { Subjects, SubjectNamesMap } from '$lib/types';

	// If Subjects is a readonly tuple, convert it to an array for use in .includes and .map

	import { localVars } from './page.svelte.ts';

	const { images, customLbStyles, localState } = localVars;

	const filteredImages = $derived.by(() => {
		return images.filter((img) => {
			// Only show images if at least one collection is selected
			if (localState.collections.length === 0) return false;

			const matchesCollection = img.collections.some((collection) =>
				localState.collections.includes(collection)
			);

			return matchesCollection;
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
	function toggleSubject(subject: typeof Subjects) {
		const index = localState.subjects.indexOf(subject);
		if (index === -1) {
			localState.subjects = [...localState.subjects, subject];
		} else {
			localState.subjects = localState.subjects.filter((c) => c !== subject);
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
						localState.collections.includes(collection)
							? 'border-success-500 text-success-500 border-2 bg-neutral-950/50'
							: ' text-surface-100 border-2 border-neutral-800'
					}`}
					onclick={() => toggleCollection(collection)}
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
					localState.subjects.includes(subject)
						? 'border-success-500 text-success-500 border-2 bg-neutral-950/50'
						: ' text-surface-100 border-2 border-neutral-800'
				}`}
				onclick={() => toggleSubject(subject as any)}
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
