<script lang="ts">
	import { page } from '$app/state';
</script>

<header>
	<nav>
		<ul>
			<li aria-current={page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={page.url.pathname === '/bio' ? 'page' : undefined}>
				<a href="/bio">Bio</a>
			</li>
			<li aria-current={page.url.pathname === '/tattoos' ? 'page' : undefined}>
				<a href="/tattoos">Tattoos</a>
			</li>
		</ul>
	</nav>
</header>
