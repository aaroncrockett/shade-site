<script lang="ts">
	export let onItemClick: () => void = () => {};
	import { page } from '$app/state';
</script>

<li
	class="main-nav-li list-none md:hidden"
	aria-current={page.url.pathname === '/' ? 'page' : undefined}
>
	<a class="font-bold" href="/" onclick={onItemClick}>Home</a>
</li>

<li
	class="main-nav-li list-none"
	aria-current={page.url.pathname === '/tattoos' ? 'page' : undefined}
>
	<a class="font-bold" href="/tattoos" onclick={onItemClick}>Tat Gallery</a>
</li>
<li
	class="main-nav-li list-none"
	aria-current={page.url.pathname === '/flash' ? 'page' : undefined}
>
	<a class="font-bold" href="/flash" onclick={onItemClick}>Flash Gallery</a>
</li>
