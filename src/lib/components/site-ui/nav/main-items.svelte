<script lang="ts">
	import { page } from '$app/state';
</script>

<li aria-current={page.url.pathname === '/bio' ? 'page' : undefined}>
	<a class="text-white" href="/bio">Bio</a>
</li>
<li aria-current={page.url.pathname === '/tattoos' ? 'page' : undefined}>
	<a class="text-white" href="/tattoos">Tattoos</a>
</li>
