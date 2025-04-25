<script lang="ts">
	import SmurfRow from './SmurfRow.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let { user, smurfs } = $derived(data);
</script>

<h1>Welcome, {user?.email ?? 'Guest'}!</h1>

{#if user}
	<p>You are logged in with Google.</p>
{:else}
	<p>You are not logged in.</p>
{/if}

<h2 class="mt-6">Clients</h2>
<ul class="mt-2 space-y-2">
	{#each smurfs as smurf}
		<SmurfRow {smurf} />
	{/each}
</ul>
