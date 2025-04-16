<script lang="ts">
	export let onItemClick: () => void = () => {};
	import { page } from '$app/stores';
</script>

<li class="list-none" aria-current={$page.url.pathname === '/tattoos' ? 'page' : undefined}>
	<a class="text-white" href="/tatoos" on:click={onItemClick}>Tat Gallery</a>
</li>
<li class="list-none" aria-current={$page.url.pathname === '/flash' ? 'page' : undefined}>
	<a class="text-white" href="/flash" on:click={onItemClick}>Flash Gallery</a>
</li>
<li class="list-none" aria-current={$page.url.pathname === '/bio' ? 'page' : undefined}>
	<a class="text-white" href="/bio" on:click={onItemClick}>Bio</a>
</li>
<li class="list-none" aria-current={$page.url.pathname === '/get-a-tattoo' ? 'page' : undefined}>
	<a class="text-white" href="/get-a-tattoo" on:click={onItemClick}>Get A Tat</a>
</li>
