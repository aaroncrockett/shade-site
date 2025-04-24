import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url, locals }) => {
	const access_key = url.searchParams.get('key');

	if (!access_key) {
		throw redirect(302, '/error?reason=missing-key');
	}

	const { data, error } = await locals.supabase
		.from('temp_user_form')
		.select('*')
		.eq('access_key', access_key)
		.single();

	if (error || !data) {
		throw redirect(302, '/error?reason=invalid-key');
	}

	const now = new Date();
	const expires_on = new Date(data.expires_on);

	if (expires_on < now) {
		throw redirect(302, '/error?reason=expired');
	}

	// Everything is good — pass data to the page
	return {
		access_key: data.access_key,
		expires_on: data.expires_on
	};
};
