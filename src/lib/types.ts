/* eslint-disable @typescript-eslint/no-explicit-any */

// Db related

export type ExtractedFormResult =
	| { success: true; values: Record<string, string | null> }
	| { success: false; error: { status: number; body: { error: string } } };

// User related

export interface TempUserForm {
	id: string;
	access_key: string;
	expires_at: string;
	revoked: boolean;
	created_at: string;
}

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

// --- STYLE ---

export const Styles = [
	'black-and-grey',
	'blackwork',
	'cartoon',
	'color',
	'delicate',
	'illustrative',
	'linocut/woodcut'
] as const;

export type Style = (typeof Styles)[number];

export const StyleNamesMap = {
	'black-and-grey': 'Black and Grey',
	blackwork: 'Blackwork',
	cartoon: 'Cartoon',
	color: 'Color',
	delicate: 'Delicate',
	illustrative: 'Illustrative',
	'linocut/woodcut': 'Linocut / Woodcut'
} as const;

// --- SUBJECT ---

export const Subjects = [
	'animals',
	'botanical',
	'fantasy',
	'insects',
	'video-games',
	'skulls',
	'symbols'
] as const;

export type Subject = (typeof Subjects)[number];

export const SubjectNamesMap = {
	animals: 'Animals',
	botanical: 'Botanical',
	fantasy: 'Fantasy',
	insects: 'Insects',
	'video-games': 'Video Games',
	skulls: 'Skulls',
	symbols: 'Symbols'
} as const;

// --- TECHNIQUE ---

export const Techniques = ['bold-line', 'fine-line', 'illustrative-line', 'stipple'] as const;

export type Technique = (typeof Techniques)[number];

export const TechniqueNamesMap = {
	'bold-line': 'Bold Line',
	'fine-line': 'Fine Line',
	'illustrative-line': 'Illustrative Line',
	stipple: 'Stipple'
} as const;

export const Collections = ['linocut/woodcut', 'illustrative-b-g', 'new'] as const;

export const CollectionNamesMap = {
	'linocut/woodcut': 'Linocut / Woodcut',
	'illustrative-b-g': 'Illustrative Black & Grey',
	new: '💥 New Flash 💥'
} as const;

export type Collection = (typeof Collections)[number];

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
