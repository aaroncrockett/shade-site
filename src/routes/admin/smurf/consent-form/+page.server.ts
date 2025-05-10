import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ url, locals }) => {
	const phone = url.searchParams.get('phone');

	if (!phone) {
		throw error(400, { message: 'Missing phone number in URL' });
	}

	const { data, error: fetchError } = await locals.db
		.from('smurfs')
		.select('*')
		.eq('phone', phone)
		.single();

	if (fetchError || !data) {
		console.error('Client not found:', fetchError?.message);
		throw error(404, { message: 'Client not found' });
	}

	return {
		client: data
	};
};
