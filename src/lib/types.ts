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
	'black-and-grey-style',
	'blackwork-style',
	'cartoon-style',
	'color-style',
	'delicate-style',
	'illustrative-style',
	'linocut/woodcut-style'
] as const;

export type Style = (typeof Styles)[number];

export const StyleNamesMap = {
	'black-and-grey-style': 'Black and Grey',
	'blackwork-style': 'Blackwork',
	'cartoon-style': 'Cartoon',
	'color-style': 'Color',
	'delicate-style': 'Delicate',
	'illustrative-style': 'Illustrative',
	'linocut/woodcut-style': 'Linocut / Woodcut'
} as const;

// --- SUBJECT ---

export const Subjects = [
	'animals-subject',
	'botanical-subject',
	'fantasy-subject',
	'insects-subject',
	'video-games-subject',
	'skulls-subject',
	'symbols-subject'
] as const;

export type Subject = (typeof Subjects)[number];

export const SubjectNamesMap = {
	'animals-subject': 'Animals',
	'botanical-subject': 'Botanical',
	'fantasy-subject': 'Fantasy',
	'insects-subject': 'Insects',
	'video-games-subject': 'Video Games',
	'skulls-subject': 'Skulls',
	'symbols-subject': 'Symbols'
} as const;

// --- TECHNIQUE ---

export const Techniques = [
	'bold-line-technique',
	'fine-line-technique',
	'illustrative-line-technique',
	'stipple-technique'
] as const;

export type Technique = (typeof Techniques)[number];

export const TechniqueNamesMap = {
	'bold-line-technique': 'Bold Line',
	'fine-line-technique': 'Fine Line',
	'illustrative-line-technque': 'Illustrative Line',
	'stipple-technique': 'Stipple'
} as const;

export const Collections = [
	'linocut/woodcut-collection',
	'illustrative-b-g-collection',
	'new-collection'
] as const;

export const CollectionNamesMap = {
	'linocut/woodcut-collection': 'Linocut / Woodcut',
	'illustrative-b-g-collection': 'Illustrative Black & Grey',
	'new-collection': '💥 New Flash 💥'
} as const;

export type Collection = (typeof Collections)[number];

export const AllTags = [...Styles, ...Subjects, ...Techniques, ...Collections] as const;

export type Tag = (typeof AllTags)[number];

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
