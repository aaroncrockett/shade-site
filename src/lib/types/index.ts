/* eslint-disable @typescript-eslint/no-explicit-any */
// Booking/Calendar
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

export interface AppointmentData {
	availableDays: DayOfWeek[];
	availableHours: AvailableHours;
	availableDates: AvailableDate[];
	nonAvailableDates: number[];
	bookedDates: BookedDate[];
}

export interface AvailableDate {
	date: string;
	start: string;
	end: string;
}

export interface AvailableHours {
	start: number;
	end: number;
	breaks: number[];
}

export interface BookedDate {
	date: number;
	full: boolean;
	appointments: Appointment[];
}

export type DayOfWeek = 'sun' | 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat';

// Tattoos and Flash

export type Style =
	| 'cartoon'
	| 'blackwork'
	| 'black-and-grey'
	| 'color'
	| 'linocut/woodcut'
	| 'delicate'
	| 'illustrative';

export type Subject =
	| 'animals'
	| 'insects'
	| 'abstract'
	| 'pop-culture'
	| 'symbols'
	| 'botanical'
	| 'weapons'
	| 'fantasy'
	| 'skulls';

export type Technique =
	| 'whip-shading'
	| 'stipple'
	| 'bold-line'
	| 'fine-line'
	| 'illustrative-line'
	| 'dot-work'
	| 'watercolor';

export interface ImageData {
	Date: string;
	description: string;
	full: any;
	id: number;
	price: number;
	styles: Style[];
	subjects: Subject[];
	techniques: Technique[];
	thumbnail: any;
	title: string;
}
