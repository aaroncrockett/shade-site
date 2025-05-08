import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { validateRequiredFields } from '$lib/services/server.ts';
import { extractFormData } from '$lib/utils/server.ts';

function handleDbError(
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	error: any,
	constraintMap: Record<string, string>
): { status: number; body: { error: string } } {
	if (error.code === '23505') {
		const constraint = error.constraint ?? '';
		let message = 'Duplicate entry';

		for (const key in constraintMap) {
			if (constraint.includes(key)) {
				message = constraintMap[key];
				break;
			}
		}

		return {
			status: 400,
			body: { error: message }
		};
	}

	console.error('Insert error:', error.message);
	return {
		status: 500,
		body: { error: error.message }
	};
}

function detectBotSubmission(formData: FormData): string | null {
	const honeypot = formData.get('twitter');
	if (honeypot) {
		return 'Ugh. Are you a bot?';
	}

	const logoAnswer = formData.get('logo_answer')?.toString().trim().toLowerCase();

	if (logoAnswer !== 'heart') {
		return 'Ugh. Are you a bot? Incorrect answer to the logo question.';
	}

	return null;
}

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const formData = await request.formData();
		const botError = detectBotSubmission(formData);

		if (botError) return fail(400, { error: botError });

		const required = ['first_name', 'last_name', 'email', 'preferred_contact', 'telephone'];

		const optional = [
			'instagram',
			'address',
			'city',
			'state',
			'zip',
			'dob',
			'dl_or_id_number',
			'dl_or_id_exp',
			'preferred_name',
			'pronouns'
		];
		const allFields = [...required, ...optional];

		const values = extractFormData(formData, allFields);

		const validation = validateRequiredFields(values, required);

		if (!validation.success) {
			return fail(validation.error.status, validation.error.body);
		}

		const { error } = await locals.db.from('smurfs').insert(values);

		if (error) {
			const dbError = handleDbError(error, {
				email: 'This email is already registered',
				telephone: 'This phone number is already registered'
			});

			return fail(dbError.status, dbError.body);
		}

		return { success: true };
	}
};
