/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ExtractedFormResult } from '$lib/types';

export function validateRequiredFields(
	values: Record<string, string | null>,
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
