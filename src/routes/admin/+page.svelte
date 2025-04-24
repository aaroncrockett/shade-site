<script lang="ts">
	import type { PageProps } from './$types';

	let { data, form }: PageProps = $props();
	let { user } = $derived(data);
</script>

<h1>Welcome, {user?.email ?? 'Guest'}!</h1>

{#if user}
	<p>You are logged in with Google.</p>

	<h2>Create a New Temp User Form</h2>
	<form method="POST">
		<button class="btn bg-secondary-500" type="submit">Create Form</button>
	</form>

	{#if form?.success}
		<p class="mt-4 font-medium text-green-600">Share this link with your client:</p>
		<pre class="mt-2 rounded bg-gray-100 p-3 text-sm">{form.link}</pre>
	{/if}
{:else}
	<p>You are not logged in.</p>
{/if}
