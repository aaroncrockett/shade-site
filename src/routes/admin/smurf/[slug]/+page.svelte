<script lang="ts">
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
	let { smurf } = $derived(data);
</script>

<h1 class="mb-4 text-2xl font-bold">{smurf.first_name} {smurf.last_name}</h1>
<p><strong>Email:</strong> {smurf.email}</p>
