import { dev } from '$app/environment';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = false;

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	// have node find the file in $lib/data/appointments/2025 (current year)
	// then the dir for the current month (2), and the next two months (it might have to go to the next year obviously)
	//
	// it should use this data to determine which days are available for appointments
	// availableDays will be each of the type of day in the list (all mondays, tuesdays, etc)
	// unless it is included in nonAvailableDates
	// then also determine which days have already been booked
	// {
	//     "availableDays": ["thu, fri", "sat", "sun"],
	//     "nonAvailableDates": [""],
	//     "bookedDates": [
	//         {
	//             "date": "17",
	//             "type": "consult",
	//             "start": "11",
	//             "end": "12",
	//             "contactId": ""
	//         },
	//         { "date": "18", "type": "tat", "start": "12", "end": "5", "contactId": "" },
	//         {
	//             "date": "19",
	//             "type": "consult",
	//             "start": "11",
	//             "end": "12",
	//             "contactId": ""
	//         }
	//     ]
	// }

	const currentYear = new Date().getFullYear();
	console.log(currentYear);

	const filePath = path.resolve('src/lib/data/appointments/2025/2.json');

	const fileContents = fs.readFileSync(filePath, 'utf-8');
	console.log(fileContents);
	return {
		post: {
			title: `Title for `,
			content: `Content for `
		}
	};
};
