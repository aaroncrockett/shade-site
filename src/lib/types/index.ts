export type AppointmentType = 'consult' | 'flash' | 'tat';

export interface Appointment {
	type: AppointmentType;

	start: number;
	end: number;
	clientId: string;
	contactedVia: string;
	transactionId: string;
	notes: string;
}

// Define the structure for each "bookedDate" entry
export interface BookedDate {
	date: number;
	full: boolean;
	appointments: Appointment[];
}

// Define the structure for "availableHours"
export interface AvailableHours {
	start: number;
	end: number;
	breaks: number[];
}

export type DayOfWeek = 'sun' | 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat';

export interface AppointmentData {
	availableDays: DayOfWeek[]; // List of available days (e.g., ["thu", "fri"])
	availableHours: AvailableHours;
	availableDates: AvailableDate[]; // Array of available dates with start and end time
	nonAvailableDates: string[]; // List of dates that are non-available
	bookedDates: BookedDate[]; // Array of booked dates with full status and appointments
}

export interface AvailableDate {
	date: string;
	start: string;
	end: string;
}
