import { json, redirect } from '@sveltejs/kit';
import { PUBLIC_APP_DOMAIN } from '$env/static/public';
import { AUTH_CB_SEG } from '$lib/config';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ locals: { supabase } }) => {
	// could have multi auths in the future, but not planning to currently
	const { data, error } = await supabase.auth.signInWithOAuth({
		provider: 'google',
		options: {
			redirectTo: `${PUBLIC_APP_DOMAIN}`
		}
	});

	if (error) {
		return json({ error: error.message }, { status: 400 });
	}

	if (data.url) {
		// This will cause a real browser redirect (like in your load function)
		throw redirect(303, data.url);
	}

	return json({ error: 'No URL returned from Supabase.' }, { status: 500 });
};
