import path from 'path';

// dates

export const shortDaysOfWeek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

export const daysMap: Record<string, number> = {
	sun: 0,
	mon: 1,
	tue: 2,
	wed: 3,
	thu: 4,
	fri: 5,
	sat: 6
};

export const DEFAULT_START_HOUR = 12;
export const DEFAULT_END_HOUR = 20;
export const HOUR_SUFFIX = ':00';

// paths

export const AUTH_CB_SEG = '/auth/callback';
export const ADMIN_SEG = '/admin';

// export const DIR_APPOINTMENTS = path.resolve('src/lib/data/appointments');
