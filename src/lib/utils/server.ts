export function extractFormData(formData: FormData, fields: string[]): Record<string, string> {
	const values: Record<string, string> = {};

	for (const field of fields) {
		values[field] = formData.get(field)?.toString() ?? '';
	}

	return values;
}
