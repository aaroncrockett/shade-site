<script lang="ts">
	export let onItemClick: () => void = () => {};
	import { page } from '$app/state';
</script>

<li
	class="main-nav-li list-none md:hidden"
	aria-current={page.url.pathname === '/' ? 'page' : undefined}
>
	<a class="text-white" href="/" onclick={onItemClick}>Home</a>
</li>

<li
	class="main-nav-li list-none"
	aria-current={page.url.pathname === '/tattoos' ? 'page' : undefined}
>
	<a class="text-white" href="/tatoos" onclick={onItemClick}>Tat Gallery</a>
</li>
<li
	class="main-nav-li list-none"
	aria-current={page.url.pathname === '/flash' ? 'page' : undefined}
>
	<a class="text-white" href="/flash" onclick={onItemClick}>Flash Gallery</a>
</li>
<li class="main-nav-li list-none" aria-current={page.url.pathname === '/bio' ? 'page' : undefined}>
	<a class="text-white" href="/bio" onclick={onItemClick}>Bio</a>
</li>
<li
	class="main-nav-li list-none"
	aria-current={page.url.pathname === '/get-a-tattoo' ? 'page' : undefined}
>
	<a class="text-white" href="/get-a-tattoo" onclick={onItemClick}>Get A Tat</a>
</li>
