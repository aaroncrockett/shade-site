<script lang="ts">
	import type { PageProps } from './$types';

	const {
		id = '',
		label = '',
		required = false,
		base = 'md:grid md:grid-cols-[minmax(40%,auto)_1fr]  items-center lg:grid-cols-[minmax(33%,auto)_1fr]',
		gap = 'space-y-1',
		labelBase = 'block whitespace-nowrap !font-bold',
		inputBase = 'accent-primary-500',
		classes = '',
		labelColor = 'text-white',
		labelWidth = 'md:w-1/2 lg:w-1/3',
		inputWrapper = '',
		options = [],
		layout = 'row'
	}: PageProps & {
		options?: string[];
		layout?: 'row' | 'grid';
	} = $props();

	const uid = $props.id();

	const computedWrapper =
		layout === 'grid'
			? 'grid gap-2 sm:grid-cols-2 text-white'
			: 'flex flex-wrap gap-2 text-white w-full';
</script>

<div class="{base} {gap}">
	<label for={uid} class="{labelBase} {labelWidth} {classes}">
		{label}{#if required}
			<span class={labelColor}>*</span>{/if}
	</label>
	<div class={computedWrapper}>
		{#each options as option, i}
			<label for={`${uid}-${id}-${i}`} class="inline-flex items-center gap-2">
				<input
					id={`${uid}-${id}-${i}`}
					type="checkbox"
					name={id}
					value={option}
					class={inputBase}
				/>
				<span>{option}</span>
			</label>
		{/each}
	</div>
</div>
