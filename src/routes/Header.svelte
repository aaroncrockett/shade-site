<script lang="ts">
	import { page } from '$app/state';

	import Logo from '$lib/components/site-ui/logo.svelte';
	import NavMainUl from '$lib/components/site-ui/nav-main-ul.svelte';
</script>

<header class="bg-neutral-700 p-3">
	<nav>
		<Logo />
		<NavMainUl />
	</nav>
</header>
