<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>Calendar</title>
	<meta name="description" content="Calendar of available time slots." />
</svelte:head>

<div>
	<h1>Available time slots.</h1>
</div>
