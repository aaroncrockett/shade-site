import type { PageServerLoad } from './$types';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { extractFormData } from '$lib/utils/server.ts';

export const load: PageServerLoad = async ({ locals }) => {
	const { data: smurfs, error } = await locals.db.from('smurfs').select('*');

	if (error) {
		console.error('Failed to fetch smurfs:', error.message);
		return { smurfs: [] };
	}

	return { smurfs };
};

export const actions: Actions = {
	unlock: async ({ request, locals }) => {
		const formData = await request.formData();
		const smurfEmail = formData.get('email')?.toString();

		if (!smurfEmail) {
			return fail(400, { error: 'Smurf email is required' });
		}

		const locked_after = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();

		const { error } = await locals.db
			.from('smurfs')
			.update({ locked_after })
			.eq('email', smurfEmail);

		if (error) {
			console.error('Failed to unlock smurf:', error.message);
			return fail(500, { error: 'Could not unlock smurf' });
		}

		return { success: true };
	},

	lock: async ({ request, locals }) => {
		const formData = await request.formData();
		const smurfEmail = formData.get('email')?.toString();

		if (!smurfEmail) {
			return fail(400, { error: 'Smurf email is required' });
		}

		const { error } = await locals.db
			.from('smurfs')
			.update({ locked_after: null })
			.eq('email', smurfEmail);

		if (error) {
			console.error('Failed to lock smurf:', error.message);
			return fail(500, { error: 'Could not lock smurf' });
		}

		return { success: true };
	},
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
