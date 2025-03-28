<script lang="ts">
	import { onMount } from 'svelte';

	export let data;

	onMount(async () => {
		const { data: signInData, error } = await data.supabase.auth.signInWithOAuth({
			provider: 'google',
			options: {
				redirectTo: 'http://localhost:5173/auth/callback'
			}
		});

		if (signInData?.url) {
			window.location.href = signInData.url;
		} else if (error) {
			console.error('Sign-in error:', error);
		}
	});
</script>
