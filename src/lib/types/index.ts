// Define the structure for the "appointments" within "bookedDates"
export interface Appointment {
	type: string;
	start: string;
	end: string;
	clientId: string;
	contactedVia: string;
	transactionId: string;
	notes: string;
}

// Define the structure for each "bookedDate" entry
export interface BookedDate {
	date: string;
	full: boolean;
	appointments: Appointment[];
}

// Define the structure for "availableHours"
export interface AvailableHours {
	start: string;
	end: string;
	breaks: string[];
}

// Define the overall structure of the appointment data
export interface AppointmentData {
	availableDays: string[]; // List of available days (e.g., ["thu", "fri"])
	availableHours: AvailableHours;
	availableDates: AvailableDate[]; // Array of available dates with start and end time
	nonAvailableDates: string[]; // List of dates that are non-available
	bookedDates: BookedDate[]; // Array of booked dates with full status and appointments
}

// Define the structure for available dates
export interface AvailableDate {
	date: string;
	start: string;
	end: string;
}
