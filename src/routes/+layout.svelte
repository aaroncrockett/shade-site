<script>
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	import '../app.css';

	import { page } from '$app/state';

	import Logo from '$lib/components/site-ui/logo.svelte';
	import NavMainItems from '$lib/components/site-ui/nav/main-items.svelte';
	import FooterMainItems from '$lib/components/site-ui/footer/main-items.svelte';

	let { data, children } = $props();
	let { session, supabase } = $derived(data);

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});
</script>

<div class="app bg-neutral-800">
	<div class="bg-neutral-700 shadow-md">
		<header class="site-wrapper">
			<nav class="flex flex-col items-center justify-between gap-2 px-4 sm:flex-row sm:gap-4">
				<Logo />
				<ul class="md: flex flex-col gap-1 text-center sm:flex-row sm:gap-4 sm:text-left">
					<NavMainItems />
				</ul>
			</nav>
		</header>
	</div>

	<main class="site-wrapper px-5 py-4">
		{@render children()}
	</main>

	<!-- <footer class="site-wrapper px-5 py-4">
		<FooterMainItems />
	</footer> -->
</div>
