import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

function emailFromSlug(slug: string): string {
	return slug.replace('-', '@') + '.com';
}

export const load: PageServerLoad = async ({ params, locals }) => {
	const email = emailFromSlug(params.slug);

	const { data: smurf, error: dbError } = await locals.db
		.from('smurfs')
		.select('*')
		.eq('email', email)
		.single();

	if (dbError || !smurf) {
		console.error('Smurf not found:', dbError?.message);
		throw error(404, 'Smurf not found');
	}

	return { smurf };
};
