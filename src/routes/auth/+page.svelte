<script lang="ts">
	import { onMount } from 'svelte';
	import { PUBLIC_APP_DOMAIN } from '$env/static/public';
	import { ADMIN_SEG } from '$lib/config';

	export let data;

	onMount(async () => {
		const { data: signInData, error } = await data.supabase.auth.signInWithOAuth({
			provider: 'google',
			options: {
				redirectTo: `${PUBLIC_APP_DOMAIN}${ADMIN_SEG}`
			}
		});

		if (signInData?.url) {
			window.location.href = signInData.url;
		} else if (error) {
			console.error('Sign-in error:', error);
		}
	});
</script>
