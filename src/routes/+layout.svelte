<script>
	// import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	import { Modal } from '@skeletonlabs/skeleton-svelte';

	import '../app.css';

	import Logo from '$lib/components/site-ui/logo.svelte';
	import NavMainItems from '$lib/components/site-ui/nav/main-items.svelte';
	import FooterMainItems from '$lib/components/site-ui/footer/main-items.svelte';

	// let { data, children } = $props();
	let { children } = $props();
	// let { session, supabase } = $derived(data);

	let drawerState = $state(false);

	function drawerClose() {
		drawerState = !drawerState;
	}

	onMount(() => {
		// const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
		// 	if (newSession?.expires_at !== session?.expires_at) {
		// 		invalidate('supabase:auth');
		// 	}
		// });
		// return () => data.subscription.unsubscribe();
	});
</script>

<div class="noise"></div>
<div class="app h-full min-h-screen overflow-hidden bg-neutral-900">
	<div class="bg-neutral-800 shadow-md">
		<header class="site-wrapper">
			<nav class="flex flex-col items-center justify-between gap-2 px-4 sm:flex-row sm:gap-4">
				<Logo />
				<ul class="hidden flex-col gap-1 text-center sm:flex-row sm:gap-4 sm:text-left md:flex">
					<NavMainItems />
				</ul>
			</nav>
		</header>
	</div>
	<Modal
		open={drawerState}
		onOpenChange={(e) => (drawerState = e.open)}
		triggerBase="btn"
		contentBase="p-4 space-y-4 shadow-xl w-[480px] h-screen"
		positionerJustify="justify-start"
		positionerAlign=""
		positionerPadding=""
		transitionsPositionerIn={{ x: -480, duration: 200 }}
		transitionsPositionerOut={{ x: -480, duration: 200 }}
	>
		{#snippet trigger()}
			<button class="btn inline-block md:hidden" onclick={drawerClose}> MENU </button>{/snippet}
		{#snippet content()}
			<header class="flex justify-between">
				<h2 class="h2">Drawer Example</h2>
			</header>
			<NavMainItems />
			<footer>
				<button type="button" class="btn" onclick={drawerClose}>Close Drawer</button>
			</footer>
		{/snippet}
	</Modal>

	<main class="site-wrapper px-5 py-4">
		{@render children()}
	</main>

	<footer class=" bg-neutral-800 px-5 py-4 shadow-sm">
		<FooterMainItems />
	</footer>
</div>
