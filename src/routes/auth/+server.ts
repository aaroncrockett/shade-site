// import { json, redirect } from '@sveltejs/kit';
// import { dev } from '$app/environment';

// import { PUBLIC_APP_DOMAIN_LOCAL } from '$env/static/public';
// import { PUBLIC_APP_DOMAIN_PROD } from '$env/static/public';
// import type { RequestHandler } from './$types';
// import { AUTH_CB_SEG } from '$lib/config';

// export const GET: RequestHandler = async ({ locals: { supabase } }) => {
// 	// could have multi auths in the future, but not planning to currently

// 	const domain = dev ? PUBLIC_APP_DOMAIN_LOCAL : PUBLIC_APP_DOMAIN_PROD;

// 	const { data, error } = await supabase.auth.signInWithOAuth({
// 		provider: 'google',
// 		options: {
// 			redirectTo: `${domain}${AUTH_CB_SEG}`
// 		}
// 	});

// 	if (error) {
// 		return json({ error: error.message }, { status: 400 });
// 	}

// 	if (data.url) {
// 		throw redirect(303, data.url);
// 	}

// 	return json({ error: 'No URL returned from Supabase.' }, { status: 500 });
// };
