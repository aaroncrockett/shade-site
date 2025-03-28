<script>
	import { redirect } from '@sveltejs/kit';

	let { data, children } = $props();
	let { supabase } = $derived(data);

	const logout = async () => {
		const { error } = await supabase.auth.signOut();
		if (error) {
			console.error(error);
			return;
		}

		window.location.href = '/';
	};
</script>

<header>
	<button onclick={logout}>Logout</button>
</header>
<main>
	{@render children()}
</main>
