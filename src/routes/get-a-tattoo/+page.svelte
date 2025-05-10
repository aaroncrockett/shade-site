<script lang="ts">
	import { Accordion } from '@skeletonlabs/skeleton-svelte';

	import s2sImg from '$lib/images/shade-to-shade-heart-text.png?enhanced';
	import h1ImgBg from '$lib/images/heart-bg-sm.png';
	import BgImgWrapper from '$lib/components/ui/background-image-wrapper.svelte';
	import Aftercare from '$lib/components/ui/aftercare.svelte';
	import CustomTattoo from '$lib/components/ui/custom-tattoo.svelte';
	import TattooPrep from '$lib/components/ui/tattoo-prep.svelte';

	let accordionValue: string[] = $state([]);
	let customTattooRef: HTMLElement | null = null;

	const accordionSectionData = [
		{ id: 'custom', hl: 'Custom Tattoo' },
		{ id: 'prep', hl: 'Tattoo Prep' },
		{ id: 'aftercare', hl: 'Aftercare' }
	];

	function toggleAccordion(item: string, scrollToEl?: HTMLElement | null) {
		if (accordionValue.includes(item)) {
			if (!scrollToEl) {
				accordionValue = accordionValue.filter((value) => value !== item);
			} else {
				scrollToEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		} else {
			accordionValue = [...accordionValue, item];
			if (scrollToEl) {
				scrollToEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		}
	}
</script>

<svelte:head>
	<title>Get a Tattoo!</title>
	<meta name="description" content="Info on getting a Tattoo from Shade To Shade" />
</svelte:head>

<section class="page-section">
	<BgImgWrapper bgImg={h1ImgBg}>
		<h1 class="text-center">Steps for getting a tattoo.</h1>
	</BgImgWrapper>

	<div class="flex flex-col gap-6 md:grid md:grid-cols-[1fr_2fr] xl:grid-cols-[1fr_2fr_2fr]">
		<div class="col-start-1 mx-auto flex flex-col">
			<enhanced:img
				src={s2sImg}
				alt="Heart graphic."
				class="mx-auto h-auto w-full max-w-[200px] rounded-sm"
			/>
		</div>

		<div class="flex flex-col space-y-2">
			<h2>General Info.</h2>

			<div class="flex flex-col space-y-2">
				<p>
					If interested in getting a tattoo, or if you have any questions, DM on Instagram or send
					me an email.
				</p>

				<div class="rounded-md bg-neutral-900/80 p-4">
					<p>@shade-to-shade-art</p>
					<p>email: shade.to.shade.art@proton.me</p>
				</div>

				<p><a href="/flash">Flash:</a> $25 deposit, to book the appointment.</p>

				<p>
					Customer Supplied designs: $25 deposit to book the appointment if little or no custom
					drawing is needed. We can determine this in a free phone or DM consultation. Otherwise we
					will have to do a <span
						role="button"
						tabindex="0"
						class="!text-secondary-500 cursor-pointer"
						onclick={() => toggleAccordion('custom', customTattooRef)}
						onkeydown={(e) => {
							if (e.key === 'Enter' || e.key === ' ') {
								e.preventDefault();
								toggleAccordion('custom', customTattooRef);
							}
						}}
					>
						custom tattoo
					</span>.
				</p>
				<ul class="ml-4 rounded-sm bg-neutral-800/80 p-4">
					<li>
						I won't copy another tattoo artist's original work! If the design is super common, then
						I don't have a problem using it as is. Otherwise I will have to redesign the piece with
						my own spin, and we will have to do a
						<span
							role="button"
							tabindex="0"
							class="!text-secondary-500 cursor-pointer"
							onclick={() => toggleAccordion('custom', customTattooRef)}
							onkeydown={(e) => {
								if (e.key === 'Enter' || e.key === ' ') {
									e.preventDefault();
									toggleAccordion('custom', customTattooRef);
								}
							}}
						>
							custom tattoo
						</span>.
					</li>
				</ul>

				<p>Deposits will be applied to the final cost.</p>
				<p>
					Final payment is due in cash at your appointment before tattooing. Tips are always
					appreciated and can be given at the end of the session.
				</p>
			</div>
		</div>

		<Accordion
			classes="ol-start-2 col-start-2 xl:col-start-3"
			spaceY="2"
			value={accordionValue}
			onValueChange={(e) => (value = e.value)}
		>
			<div bind:this={customTattooRef}></div>
			<Accordion.Item
				value="custom"
				controlBase="accordion-control-base"
				controlHover="accordion-control-hover"
				controlRounded="rounded-sm"
				controlClasses="accordion-control-classes"
			>
				{#snippet control()}
					<button
						type="button"
						onclick={() => toggleAccordion(accordionSectionData[0].id)}
						aria-expanded={accordionValue.includes(accordionSectionData[0].id)}
						class="acumin w-full text-2xl md:text-3xl"
					>
						{accordionSectionData[0].hl}
					</button>
				{/snippet}

				{#snippet panel()}
					<CustomTattoo />
				{/snippet}
			</Accordion.Item>

			<Accordion.Item
				value="prep"
				controlBase="p-4 w-full bg-neutral-800 flex flex-row "
				controlHover="hover:bg-neutral-700 hover:text-white"
				controlRounded="rounded-sm"
				controlClasses="transition-colors duration-300"
			>
				{#snippet control()}
					<button
						type="button"
						onclick={() => toggleAccordion(accordionSectionData[1].id)}
						aria-expanded={accordionValue.includes(accordionSectionData[1].id)}
						class="acumin w-full text-2xl md:text-3xl"
					>
						{accordionSectionData[1].hl}
					</button>
				{/snippet}

				{#snippet panel()}
					<TattooPrep />
				{/snippet}
			</Accordion.Item>
			<Accordion.Item
				value="aftercare"
				controlBase="p-4 w-full bg-neutral-800 flex flex-row "
				controlHover="hover:bg-neutral-700 hover:text-white"
				controlRounded="rounded-sm"
				controlClasses="transition-colors duration-300"
			>
				{#snippet control()}
					<button
						type="button"
						onclick={() => toggleAccordion(accordionSectionData[2].id)}
						aria-expanded={accordionValue.includes(accordionSectionData[2].id)}
						class="acumin w-full text-2xl md:text-3xl"
					>
						{accordionSectionData[2].hl}
					</button>
				{/snippet}

				{#snippet panel()}
					<Aftercare />
				{/snippet}
			</Accordion.Item>
		</Accordion>
	</div>
</section>
