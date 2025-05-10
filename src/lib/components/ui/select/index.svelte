<script lang="ts">
	import type { PageProps } from './$types';

	const {
		id = '',
		label = '',
		required = false,
		base = 'md:grid md:grid-cols-[minmax(40%,auto)_1fr] lg:grid-cols-[minmax(33%,auto)_1fr] md:gap-4 items-center',
		gap = 'space-y-1',
		labelBase = 'block whitespace-nowrap !font-bold',
		inputBase = 'placeholder:text-white placeholder:text-xs !text-white !ring-neutral-600 bg-neutral-900/30 !ring-4 py-2 px-4 rounded-sm',
		classes = '',
		labelColor = 'text-white',
		labelWidth = 'md:w-1/2 lg:w-1/3',
		inputWidth = 'w-full input',
		placeholder = '',
		options = []
	}: PageProps & {
		options?: { value: string; label: string }[];
	} = $props();

	const uid = $props.id();
</script>

<div class="{base} {gap}">
	<label for={`${uid}-${id}`} class="{labelBase} {labelWidth} {classes}">
		{label}{#if required}
			<span class={labelColor}>*</span>{/if}
	</label>
	<select id={`${uid}-${id}`} name={id} {required} class="{inputBase} {inputWidth}">
		{#if placeholder}
			<option value="" disabled selected hidden>{placeholder}</option>
		{/if}
		{#each options as opt}
			<option value={opt.value}>{opt.label}</option>
		{/each}
	</select>
</div>
