<script>
	import { Modal } from '@skeletonlabs/skeleton-svelte';

	import { page } from '$app/state';
	import logo from '$lib/images/fml-logo-plain.webp?enhanced';

	import '../app.css';

	import NavMainItems from '$lib/components/ui/nav/main-items.svelte';
	import FooterMainItems from '$lib/components/ui/footer/main-items.svelte';

	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	let { data, children } = $props();
	// @ts-ignore
	let { session, db } = $derived(data);

	let drawerState = $state(false);

	function drawerClose() {
		drawerState = !drawerState;
	}

	onMount(() => {
		// @ts-ignore
		const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});
</script>

<div class="noise"></div>
<div class="app h-full min-h-screen overflow-hidden">
	<div class=" shadow-md">
		<header class="site-wrapper">
			<nav class="flex flex-col items-center justify-between gap-2 px-4 sm:flex-row sm:gap-4">
				<a href="/">
					<enhanced:img
						src={logo}
						alt="Black and gray stippled snake tattoo"
						class="block w-[180px]"
					/></a
				>

				<Modal
					open={drawerState}
					onOpenChange={(e) => (drawerState = e.open)}
					triggerBase="btn md:hidden"
					contentBase="card  p-4 space-y-4 shadow-xl w-3/4 h-full"
					positionerClasses="h-screen"
					positionerJustify="justify-start"
					transitionsPositionerIn={{ x: -480, duration: 200 }}
					transitionsPositionerOut={{ x: -480, duration: 200 }}
				>
					{#snippet trigger()}
						<div class="flex w-full justify-center">MENU</div>
					{/snippet}

					{#snippet content()}
						<div class="relative h-full w-full">
							<ul class="flex flex-col gap-2">
								<NavMainItems onItemClick={drawerClose} />
							</ul>

							<footer>
								<button type="button" class="btn absolute top-0 right-0" onclick={drawerClose}
									>X</button
								>
							</footer>
						</div>
					{/snippet}
				</Modal>

				<ul class="hidden flex-col gap-1 text-center sm:flex-row sm:gap-4 sm:text-left md:flex">
					<NavMainItems />
				</ul>
			</nav>
		</header>
	</div>

	<main class="site-wrapper relative z-5">
		{@render children()}
	</main>

	<footer class="relative z-5 h-auto w-full px-5 shadow-sm">
		<FooterMainItems />
	</footer>
</div>
