/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ExtractedFormResult } from '$lib/types';

export function validateRequiredFields(
	values: Record<string, string>,
	requiredFields: string[]
): ExtractedFormResult {
	const missing = requiredFields.filter((field) => !values[field]);

	if (missing.length > 0) {
		return {
			success: false,
			error: {
				status: 400,
				body: {
					error: `Missing required fields: ${missing.join(', ')}`
				}
			}
		};
	}

	return { success: true, values };
}

export function handleDbError(
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
