<script lang="ts">
	import { page } from '$app/state';
</script>

<li aria-current={page.url.pathname === '/gallery' ? 'page' : undefined}>
	<a class="text-white" href="/gallery">Gallery</a>
</li>
<li aria-current={page.url.pathname === '/bio' ? 'page' : undefined}>
	<a class="text-white" href="/bio">Bio</a>
</li>
