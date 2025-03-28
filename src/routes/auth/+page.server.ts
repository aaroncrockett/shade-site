import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals: { supabase } }) => {
	const { data } = await supabase.auth.signInWithOAuth({
		provider: 'google',
		options: {
			redirectTo: 'http://localhost:5173/auth/callback'
		}
	});
	if (data.url) {
		redirect(303, data.url);
	}
};
