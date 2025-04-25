<script lang="ts">
	import type { PageProps } from './$types';

	let { data, form }: PageProps = $props();
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
		<div class="flex flex-row items-center rounded p-3">
			<strong>{smurf.first_name} {smurf.last_name}</strong> — {smurf.email}
			{#if smurf.locked_after}
				<p class="text-sm text-gray-600">
					Locked until {new Date(smurf.locked_after).toLocaleString()}
				</p>
			{/if}
			{#if user}
				{#if !smurf.locked_after || new Date(smurf.locked_after) < new Date()}
					<!-- Unlock button (if locked_after is null or in the past) -->
					<form method="POST" action="?/unlock">
						<input type="hidden" name="email" value={smurf.email} />
						<button type="submit" class="btn bg-secondary-500">Unlock</button>
					</form>
				{:else}
					<!-- Lock button (if locked_after is in the future) -->
					<form method="POST" action="?/lock">
						<input type="hidden" name="email" value={smurf.email} />
						<button type="submit" class="btn">Lock</button>
					</form>
				{/if}
			{/if}
		</div>
	{/each}
</ul>
