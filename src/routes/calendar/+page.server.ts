import { redirect, type ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = async ({ url, locals }) => {
	const accessKey = url.searchParams.get('access');

	if (!accessKey) {
		throw redirect(303, '/');
	}

	const { data, error } = await locals.supabase
		.from('calendar_keys')
		.select('key')
		.eq('key', accessKey)
		.single();

	if (error || !data) {
		throw redirect(303, '/');
	}

	return {
		accessKey
	};
};
