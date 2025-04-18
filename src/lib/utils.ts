import type { AppointmentData } from '$lib/types/index.ts';
import { daysMap, shortDaysOfWeek } from '$lib/config';

export function getDayOfWeek(date: Date): string {
	return shortDaysOfWeek[date.getDay()];
}

export function getAllDaysInMonth(year: number, month: number): Date[] {
	const date = new Date(year, month - 1, 1);
	const days: Date[] = [];

	while (date.getMonth() === month - 1) {
		days.push(new Date(date));
		date.setDate(date.getDate() + 1);
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
				return -1;
			}
			return daysMap[dayLower];
		})
		.filter((day) => day !== -1);

	const allDaysInMonth = getAllDaysInMonth(year, month);

	const availableDates: Date[] = allDaysInMonth.filter((date) => {
		// Still need to filter for filled and
		// still need to add specifically noted available dates
		const dayOfWeek = date.getDay();
		const isNotNonAvailable = !appointmentData.nonAvailableDates.includes(date.getDate());
		return availableDayNumbers.includes(dayOfWeek) && isNotNonAvailable;
	});

	return availableDates;
}
