import type { PageServerLoad } from './$types';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { extractFormData } from '$lib/utils/server.ts';

export const load: PageServerLoad = async ({ locals }) => {
	const { data: smurfs, error } = await locals.db
		.from('smurfs')
		.select('*')
		.order('created_at', { ascending: false });

	if (error) {
		console.error('Failed to fetch smurfs:', error.message);
		return { smurfs: [] };
	}

	return { smurfs };
};

export const actions: Actions = {
	edit: async ({ request, locals }) => {
		const formData = await request.formData();

		// Fields for the edit operation
		const fields = ['first_name', 'last_name', 'email'];
		const values = extractFormData(formData, fields);

		const { first_name, last_name, email } = values;

		const { error } = await locals.db
			.from('smurfs')
			.update({ first_name, last_name, email })
			.eq('email', email);

		if (error) {
			console.error('Error with editing', error.message);
			return fail(500, { error: 'Error with editing' });
		}

		return { success: true };
	}
};
