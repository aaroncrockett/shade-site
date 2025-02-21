import type { AppointmentData } from '$lib/types/index.ts';

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
	// Map days of the week to numbers (0: Sunday, 1: Monday, ..., 6: Saturday)
	const daysMap: Record<string, number> = {
		sun: 0,
		mon: 1,
		tue: 2,
		wed: 3,
		thu: 4,
		fri: 5,
		sat: 6
	};

	// Ensure availableDays are trimmed, lowercase and valid
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

	// Get all days of the month
	const allDaysInMonth = getAllDaysInMonth(year, month);

	// Filter the days that match the available days
	const availableDates: Date[] = allDaysInMonth.filter((date) => {
		const dayOfWeek = date.getDay(); // Get numeric day (0 for Sunday, 1 for Monday, ...)
		return availableDayNumbers.includes(dayOfWeek); // Check if the numeric day is in availableDayNumbers
	});

	return availableDates;
}
