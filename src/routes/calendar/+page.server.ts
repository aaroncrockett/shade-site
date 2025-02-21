import { dev } from '$app/environment';

import fs from 'fs';
import path from 'path';

import type { AppointmentData } from '$lib/types/index.ts';

import { getDayOfWeek, getAllDaysInMonth } from '$lib/utils';

import { DIR_APPOINTMENTS } from '$lib/config';

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = false;

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	// // ** TEMP PROGRAMMING STEPS ** //

	// then the dir for the current month (2), and the next two months (it might have to go to the next year obviously)
	//
	// it should use this data to determine which days are available for appointments
	// availableDays will be each of the type of day in the list (all mondays, tuesdays, etc)
	// unless it is included in nonAvailableDates
	// then also determine which days have already been booked

	// // Handle file data
	const currentYear = new Date().getFullYear();
	// this month
	const currentMonth = new Date().getMonth() + 1;
	// next month
	// month after next

	const filePath = path.join(DIR_APPOINTMENTS, `${currentYear}`, `${currentMonth}.json`);
	const appointmentM1JSON = fs.readFileSync(filePath, 'utf-8');
	const appointmentM1Data = JSON.parse(appointmentM1JSON);

	// // Logic to extract the data.

	const availableDates: AppointmentData[] = [];

	return {
		availableDates
	};
};
