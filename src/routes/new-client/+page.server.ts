import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { validateRequiredFields } from '$lib/services/server.ts';
import { extractFormData } from '$lib/utils/server.ts';
import { CLIENT_DATA_FIELDS } from '$lib/config';

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
function normalizeData(fields: string[], values: Record<string, any>): Record<string, any> {
	const normalized = { ...values };

	for (const field of fields) {
		const value = normalized[field];

		if (!value) continue;

		switch (field) {
			case 'phone': {
				const digits = value.replace(/\D/g, '');
				if (digits.length === 10) {
					normalized[field] = `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
				}
				break;
			}

			case 'pronouns': {
				if (Array.isArray(value)) {
					normalized[field] = value.join(', ');
				}
				break;
			}
		}
	}

	return normalized;
}

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const formData = await request.formData();
		const botError = detectBotSubmission(formData);

		console.log(formData);

		if (botError) return fail(400, { error: botError });

		const required = CLIENT_DATA_FIELDS.filter((f) => f.required).map((f) => f.id);

		const values = extractFormData(
			formData,
			CLIENT_DATA_FIELDS.map((field) => field.id)
		);
		const normalizedValues = normalizeData(['pronouns', 'phone'], values);
		const validation = validateRequiredFields(normalizedValues, required);

		if (!validation.success) {
			return fail(validation.error.status, validation.error.body);
		}

		const { error } = await locals.db.from('smurfs').insert(normalizedValues);

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
