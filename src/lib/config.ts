// dates

export const shortDaysOfWeek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

export const daysMap: Record<string, number> = {
	sun: 0,
	mon: 1,
	tue: 2,
	wed: 3,
	thu: 4,
	fri: 5,
	sat: 6
};

export const DEFAULT_START_HOUR = 12;
export const DEFAULT_END_HOUR = 20;
export const HOUR_SUFFIX = ':00';

// paths

export const AUTH_CB_SEG = '/auth/callback';
export const ADMIN_SEG = '/admin';

// export const DIR_APPOINTMENTS = path.resolve('src/lib/data/appointments');

export const CLIENT_DATA_FIELDS = [
	{ id: 'first_name', label: 'First Name', type: 'text', required: true, init: true },
	{ id: 'last_name', label: 'Last Name', type: 'text', required: true, init: true },
	{
		id: 'email',
		label: 'Email',
		type: 'email',
		required: true,
		init: true,
		placeholder: 'example@example.com'
	},
	{ id: 'instagram', label: 'Instagram Handle', type: 'text', init: true },
	{
		id: 'phone',
		label: 'Phone',
		type: 'tel',
		required: true,
		init: true,
		pattern: '^\\(?\\d{3}\\)?[-\\s]?\\d{3}[-\\s]?\\d{4}$',
		inputmode: 'tel',
		placeholder: ' (xxx)-xxx-xxxx) or xxx-xxx-xxxx'
	},
	{ id: 'address', label: 'Street Address' },
	{ id: 'city', label: 'City' },
	{ id: 'state', label: 'State' },
	{
		id: 'zip',
		label: 'ZIP Code',
		type: 'text',

		pattern: '[0-9]{5}',
		inputmode: 'numeric',
		placeholder: 'Enter a 5-digit ZIP code'
	},
	{ id: 'dob', label: 'Date of Birth', type: 'date' },
	{ id: 'dl_or_id_number', label: 'DL/ID #' },
	{ id: 'dl_or_id_exp', label: 'DL/ID Expiration', type: 'date' },
	{ id: 'preferred_name', label: 'Preferred Name', init: true },
	{
		id: 'pronouns',
		label: 'Pronouns',

		init: true,
		type: 'checkbox',
		options: ['he/him', 'she/her', 'they/them']
	},
	{
		id: 'preferred_contact',
		label: 'Preferred Contact',
		type: 'select',
		options: ['email', 'instagram'],
		required: true,
		init: true
	},
	{
		id: 'medications',
		label: 'Medications',
		type: 'multi-input'
	}
];

export function getClientFieldMap() {
	return CLIENT_DATA_FIELDS.reduce(
		(map, field) => {
			map[field.id] = field;
			return map;
		},
		{} as Record<string, (typeof CLIENT_DATA_FIELDS)[number]>
	);
}

export const MEDICAL_CONDITIONS = [
	'Cold sores',
	'Communicable disease',
	'Diabetic',
	'Eczema/Psoriasis)',
	'Fainting spells',
	'Heart condition',
	'Hemophilia',
	'Hepatitis',
	'HIV/AIDS',
	'Moles/birthmarks in the tattoo area',
	'Pregnant/nursing'
];
export const ACKNOWLEDGEMENTS = [
	'I certify that I am at least 18 years old.',
	'I acknowledge the choice to receive a tattoo is my own, and I realize this is a permanent change to my body.',
	'I have looked over my design, and checked the spelling (if applicable) and give full consent to the application of this tattoo.',
	'I acknowledge that the design is either my own idea or selection. I understand and accept full responsibility for its meaning and interpretation, including any potential associations with gangs or other offensive or controversial symbols. I release the artist from all liability regarding how this design is perceived by others. I also acknowledge that any design created by the artist, including flash, carries no intended meaning or significance beyond its visual appearance.',
	'I acknowledge that any text, characters, or symbols used in the tattoo design — including those in languages or writing systems I may not fully understand — were chosen by me. I accept full responsibility for their meaning, accuracy, spelling, and interpretation. I release the artist from any liability related to the content, translation, or perception of any written elements in the design.',
	'I acknowledge the artist has taken every precaution to ensure that I am tattooed in a safe and sterile environment.',
	'I hereby release Aaron Crockett (or Shade to Shade Tattoo) from any and all actions, causes of action, claims, demands, or liabilities, whether in law or equity, that I or my heirs may have now or in the future, arising from or related in any way to receiving this tattoo. I acknowledge that the tattoo inks, dyes, and pigments have not been approved by the FDA, and the health consequences of using these products are unknown.',
	'I received written and spoken instructions on the care of my tattoo.',
	'I agree to follow all instructions concerning the care of my tattoo, and that any touch-ups needed because of my own negligence will be done at my own expense.',
	'I have been fully informed of the risks of tattooing, including but not limited to infection, scarring, difficulties detecting future melanoma, and allergic reactions to the tattoo pigments and antibiotics. Having been fully informed of the risk associated with getting a tattoo, I still wish to proceed with the tattoo procedure and I assume any and all risks that arise.'
];
