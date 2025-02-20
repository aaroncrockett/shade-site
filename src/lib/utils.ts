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
