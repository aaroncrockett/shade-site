export const clientDataFields = [
	{ id: 'first_name', label: 'First Name', type: 'text', required: true, init: true },
	{ id: 'last_name', label: 'Last Name', type: 'text', required: true, init: true },
	{ id: 'email', label: 'Email', type: 'email', required: true, init: true },
	{ id: 'instagram', label: 'Instagram Handle', type: 'text', init: true },
	{ id: 'phone', label: 'Phone', type: 'tel', required: true, init: true },
	{ id: 'address', label: 'Street Address', required: true },
	{ id: 'city', label: 'City', required: true },
	{ id: 'state', label: 'State', required: true },
	{ id: 'zip', label: 'ZIP Code', required: true },
	{ id: 'dob', label: 'Date of Birth', type: 'date', required: true },
	{ id: 'dl_or_id_number', label: 'DL/ID #', required: true },
	{ id: 'dl_or_id_exp', label: 'DL/ID Expiration', type: 'date', required: true },
	{ id: 'preferred_name', label: 'Preferred Name' },
	{ id: 'pronouns', label: 'Pronouns', required: true },
	{
		id: 'preferred_contact',
		label: 'Preferred Contact',
		type: 'select',
		options: ['email', 'instagram'],
		required: true,
		init: true
	}
];

export function getClientFieldMap() {
	return clientDataFields.reduce(
		(map, field) => {
			map[field.id] = field;
			return map;
		},
		{} as Record<string, (typeof clientDataFields)[number]>
	);
}
