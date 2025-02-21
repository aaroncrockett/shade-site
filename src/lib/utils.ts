import type { AppointmentData } from '$lib/types/index.ts';
import { daysMap } from '$lib/config'; // Import from config

export function getDayOfWeek(date: Date): string {
	const daysOfWeek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
	return daysOfWeek[date.getDay()];
}

export function getAllDaysInMonth(year: number, month: number): Date[] {
	const date = new Date(year, month - 1, 1);
	const days: Date[] = [];

	while (date.getMonth() === month - 1) {
		days.push(new Date(date)); // Push the current date
		date.setDate(date.getDate() + 1); // Move to the next day
	}

	return days;
}

export function buildAvailableDates(
	appointmentData: AppointmentData,
	year: number,
	month: number
): Date[] {
	const availableDayNumbers = appointmentData.availableDays
		.map((day) => {
			const dayLower = day.trim().toLowerCase();
			if (daysMap[dayLower] === undefined) {
				console.error(`Invalid day: ${day}`);
				return -1; // Invalid day returns -1
			}
			return daysMap[dayLower];
		})
		.filter((day) => day !== -1); // Filter out any invalid days

	const allDaysInMonth = getAllDaysInMonth(year, month);

	const availableDates: Date[] = allDaysInMonth.filter((date) => {
		const dayOfWeek = date.getDay(); // Get numeric day (0 for Sunday, 1 for Monday, ...)
		return availableDayNumbers.includes(dayOfWeek);
	});

	return availableDates;
}
