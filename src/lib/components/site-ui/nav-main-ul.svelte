<script lang="ts">
	import { page } from '$app/state';
</script>

<ul>
	<li aria-current={page.url.pathname === '/bio' ? 'page' : undefined}>
		<a href="/bio">Bio</a>
	</li>
	<li aria-current={page.url.pathname === '/tattoos' ? 'page' : undefined}>
		<a href="/tattoos">Tattoos</a>
	</li>
</ul>
