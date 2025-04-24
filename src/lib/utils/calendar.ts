import {
	now,
	startOfMonth,
	endOfMonth,
	addDays,
	addMonths,
	subtractMonths,
	isSameDay,
	type DateObj
} from '../dateAdapter';

import { DEFAULT_START_HOUR, DEFAULT_END_HOUR, HOUR_SUFFIX } from '$lib/config.ts';

export function getCurrentMonth(): DateObj {
	return now();
}

export function getMonthDays(baseDate = getCurrentMonth()) {
	const start = startOfMonth(baseDate);
	const end = endOfMonth(baseDate);
	const days: { date: DateObj; isToday: boolean }[] = [];

	for (let i = 0; i < end.date(); i++) {
		const date = addDays(start, i);
		days.push({
			date,
			isToday: isSameDay(date, now())
		});
	}

	return days;
}

export function getNextMonth(date: DateObj) {
	return addMonths(date, 1);
}

export function getPrevMonth(date: DateObj) {
	return subtractMonths(date, 1);
}

/**
 * Generate available hour slots.
 * @param startHour Hour to start from (in 24h format, inclusive). Default is 12.
 * @param endHour Hour to end at (in 24h format, inclusive). Default is 20.
 */
export function getAvailableHours(
	startHour: number = DEFAULT_START_HOUR,
	endHour: number = DEFAULT_END_HOUR
): string[] {
	const hours: string[] = [];
	for (let i = startHour; i <= endHour; i++) {
		hours.push(`${i}${HOUR_SUFFIX}`);
	}
	return hours;
}
