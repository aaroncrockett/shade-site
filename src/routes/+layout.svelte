<script>
	import { onMount } from 'svelte';
	import { Modal } from '@skeletonlabs/skeleton-svelte';

	import '../app.css';

	import Logo from '$lib/components/site-ui/logo.svelte';
	import NavMainItems from '$lib/components/site-ui/nav/main-items.svelte';
	import FooterMainItems from '$lib/components/site-ui/footer/main-items.svelte';

	let { children } = $props();

	let drawerState = $state(false);

	function drawerClose() {
		drawerState = !drawerState;
	}
</script>

<div class="noise"></div>
<div class="app h-full min-h-screen overflow-hidden bg-neutral-900">
	<div class="bg-neutral-800/30 shadow-md">
		<header class="site-wrapper">
			<nav class="flex flex-col items-center justify-between gap-2 px-4 sm:flex-row sm:gap-4">
				<Logo />
				<Modal
					open={drawerState}
					onOpenChange={(e) => (drawerState = e.open)}
					triggerBase="btn preset-outlined-surface-500 text-neutral-200 md:hidden"
					contentBase="card bg-surface-900 p-4 space-y-4 shadow-xl w-2/3 h-full"
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
							<NavMainItems onItemClick={drawerClose} />

							<footer>
								<button
									type="button"
									class="btn preset-outlined-surface-500 absolute right-0 bottom-0 text-white"
									onclick={drawerClose}>X</button
								>
							</footer>
						</div>
					{/snippet}
				</Modal>

				<!-- Main nav items, desktop only -->
				<ul class="hidden flex-col gap-1 text-center sm:flex-row sm:gap-4 sm:text-left md:flex">
					<NavMainItems />
				</ul>
			</nav>
		</header>
	</div>

	<main class="site-wrapper">
		{@render children()}
	</main>

	<footer class=" px-5 shadow-sm">
		<FooterMainItems />
	</footer>
</div>
