<script lang="ts">
	import { page } from '$app/state';
</script>

<header>
	<nav>
		<ul>
			<li aria-current={page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
			<li aria-current={page.url.pathname === '/calendar' ? 'page' : undefined}>
				<a href="/calendar">Calendar</a>
			</li>
		</ul>
	</nav>
</header>
