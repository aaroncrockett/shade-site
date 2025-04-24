<script>
	import { logout } from '$lib/services/client';

	let { data, children } = $props();
	let { db } = $derived(data);

	const handleLogout = () => logout(db);
</script>

<header>
	<button onclick={handleLogout}>Logout</button>
</header>
<main>
	{@render children()}
</main>
