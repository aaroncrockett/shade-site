import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { validateRequiredFields, handleDbError } from '$lib/services/server.ts';
import { extractFormData } from '$lib/utils/server.ts';

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const formData = await request.formData();

		const required = ['first_name', 'last_name', 'email', 'phone'];
		const optional = ['instagram'];
		const allFields = [...required, ...optional];

		const values = extractFormData(formData, allFields);

		const validation = validateRequiredFields(values, required);
		if (!validation.success) {
			return fail(validation.error.status, validation.error.body);
		}

		const { error } = await locals.db.from('users').insert(values);

		if (error) {
			const dbError = handleDbError(error, {
				email: 'This email is already registered',
				phone: 'This phone number is already registered'
			});

			return fail(dbError.status, dbError.body);
		}

		return { success: true };
	}
};
