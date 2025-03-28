import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { AUTH_CB_SEG } from '$lib/config';

import { PUBLIC_APP_DOMAIN } from '$env/static/public';

export const load: PageServerLoad = async ({ locals: { supabase } }) => {
	const { data } = await supabase.auth.signInWithOAuth({
		provider: 'google',
		options: {
			redirectTo: `${PUBLIC_APP_DOMAIN}${AUTH_CB_SEG}`
		}
	});
	if (data.url) {
		redirect(303, data.url);
	}
};
