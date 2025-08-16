<script>
	import { Modal } from '@skeletonlabs/skeleton-svelte';
	import mothBg from '$lib/images/flash/moth.png';

	import { page } from '$app/state';

	import '../app.css';

	import Logo from '$lib/components/ui/logo.svelte';
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
<div class="app h-full min-h-screen overflow-hidden bg-neutral-950/85">
	<div class="bg-neutral-900/90 shadow-md">
		<!-- <header class="site-wrapper">
			<nav class="flex flex-col items-center justify-between gap-2 px-4 sm:flex-row sm:gap-4">
				<Logo />
				<Modal
					open={drawerState}
					onOpenChange={(e) => (drawerState = e.open)}
					triggerBase="btn preset-outlined-surface-500 text-neutral-200 md:hidden"
					contentBase="card bg-surface-900 p-4 space-y-4 shadow-xl w-3/4 h-full"
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
								<button
									type="button"
									class="btn preset-outlined-surface-500 absolute top-0 right-0 text-white"
									onclick={drawerClose}>X</button
								>
							</footer>
						</div>
					{/snippet}
				</Modal>

				<ul class="hidden flex-col gap-1 text-center sm:flex-row sm:gap-4 sm:text-left md:flex">
					<NavMainItems />
				</ul>
			</nav>
		</header> -->
	</div>
	{#if page.url.pathname === '/'}
		<div
			class="page-section absolute z-0 h-screen w-full bg-[length:190px_auto] [background-position:-50px_5%] bg-repeat opacity-70 md:!flex-row md:bg-[length:350px_auto] md:[background-position:-80px_5%] md:bg-repeat md:opacity-50 lg:bg-[length:450px_auto]"
			style={`background-image:url(${mothBg}); `}
		></div>
	{/if}

	<main class="site-wrapper relative z-5">
		{@render children()}
	</main>

	<!-- <footer class="relative z-5 h-auto w-full bg-neutral-900/60 px-5 shadow-sm">
		<FooterMainItems />
	</footer> -->
</div>
