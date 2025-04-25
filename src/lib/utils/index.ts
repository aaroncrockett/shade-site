export function generateTimeSlots(startHour: number, endHour: number): string[] {
	const timeSlots: string[] = []; // Initialize an empty array to hold the time slots

	for (let hour = startHour; hour <= endHour; hour++) {
		for (let minute = 0; minute < 60; minute += 15) {
			// Convert to 12-hour format and determine AM/PM
			const hour12 = hour % 12 || 12; // Convert 0-23 to 1-12, where 0 becomes 12
			const amPm = hour < 12 ? 'AM' : 'PM'; // AM for 00:00-11:59, PM for 12:00-23:59

			// Format minutes with leading zero
			const minuteString = minute < 10 ? '0' + minute : minute.toString();

			// Construct the time string in the format: "HH:MM AM/PM"
			const time = `${hour12}:${minuteString} ${amPm}`;

			timeSlots.push(time); // Add the generated time to the array
		}
	}

	return timeSlots;
}
