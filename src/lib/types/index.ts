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
	| 'black-and-grey'
	| 'blackwork'
	| 'cartoon'
	| 'color'
	| 'delicate'
	| 'illustrative'
	| 'linocut/woodcut';

export type Subject =
	| 'abstract'
	| 'animals'
	| 'botanical'
	| 'fantasy'
	| 'insects'
	| 'pop-culture'
	| 'skulls'
	| 'symbols'
	| 'weapons';

export type Technique =
	| 'bold-line'
	| 'dot-work'
	| 'fine-line'
	| 'illustrative-line'
	| 'stipple'
	| 'whip-shading';

export type Collection = 'linocut/woodcut' | 'illustrative color' | 'illustrative black and b&g';

export interface ImageData {
	collections: Collection[];
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
