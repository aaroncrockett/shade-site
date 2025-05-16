import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params, locals }) => {
	const slug = params.slug;

	if (!slug) {
		throw error(400, { message: 'Missing slug in URL' });
	}

	const { data, error: fetchError } = await locals.db
		.from('smurfs')
		.select('*')
		.eq('phone', slug)
		.single();

	if (fetchError || !data) {
		console.error('Client not found:', fetchError?.message);
		throw error(404, { message: 'Client not found' });
	}

	return {
		client: data
	};
};
