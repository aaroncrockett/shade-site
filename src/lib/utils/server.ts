export function extractFormData(
	formData: FormData,
	fields: string[]
): Record<string, string | null> {
	const values: Record<string, string | null> = {};

	for (const field of fields) {
		const value = formData.get(field)?.toString().trim() ?? '';
		values[field] = value === '' ? null : value;
	}

	return values;
}
