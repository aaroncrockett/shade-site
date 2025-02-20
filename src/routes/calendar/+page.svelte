<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const { filledDates } = data;
</script>

<svelte:head>
	<title>Calendar</title>
	<meta name="description" content="Calendar of available time slots." />
</svelte:head>

<div>
	<h1>Available time slots.</h1>
</div>
<ul>
	{#each filledDates as date}
		<li>
			{date}
		</li>
	{/each}
</ul>
<h1>{data.filledDates}</h1>
