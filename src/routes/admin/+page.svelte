<script lang="ts">
	import type { PageProps } from './$types';

	let { data, form }: PageProps = $props();
	let { user } = $derived(data);
</script>

<h1>Welcome, {user?.email ?? 'Guest'}!</h1>

{#if user}
	<p>You are logged in with Google.</p>
{:else}
	<p>You are not logged in.</p>
{/if}
