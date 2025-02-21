import { dev } from '$app/environment';
import fs from 'fs';
import path from 'path';
import type { AppointmentData } from '$lib/types/index.ts';
import { DIR_APPOINTMENTS } from '$lib/config';
import { buildAvailableDates } from '$lib/utils'; // Import the function

export const csr = dev;
export const prerender = false;

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const currentYear = new Date().getFullYear();
	const currentMonth = new Date().getMonth() + 1;
	const filePath = path.join(DIR_APPOINTMENTS, `${currentYear}`, `${currentMonth}.json`);
	const appointmentM1JSON = fs.readFileSync(filePath, 'utf-8');
	const appointmentM1Data: AppointmentData = JSON.parse(appointmentM1JSON);

	// Call the function to build available dates
	const availableDates = buildAvailableDates(appointmentM1Data, currentYear, currentMonth);

	return {
		availableDates
	};
};
