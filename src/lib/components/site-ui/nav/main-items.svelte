<script lang="ts">
	export let onItemClick: () => void = () => {};
	import { page } from '$app/stores';
</script>

<li aria-current={$page.url.pathname === '/gallery' ? 'page' : undefined}>
	<a class="text-white" href="/gallery" on:click={onItemClick}>Gallery</a>
</li>
<li aria-current={$page.url.pathname === '/bio' ? 'page' : undefined}>
	<a class="text-white" href="/bio" on:click={onItemClick}>Bio</a>
</li>
<li aria-current={$page.url.pathname === '/get-a-tattoo' ? 'page' : undefined}>
	<a class="text-white" href="/get-a-tattoo" on:click={onItemClick}>Get A Tattoo</a>
</li>
