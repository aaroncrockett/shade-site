import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';

export type DateObj = Dayjs;

export const now = (): Dayjs => dayjs();
export const startOfMonth = (date: DateObj): Dayjs => date.startOf('month');
export const endOfMonth = (date: DateObj): Dayjs => date.endOf('month');
export const addDays = (date: DateObj, amount: number): Dayjs => date.add(amount, 'day');
export const addMonths = (date: DateObj, amount: number): Dayjs => date.add(amount, 'month');
export const subtractMonths = (date: DateObj, amount: number): Dayjs =>
	date.subtract(amount, 'month');
export const isSameDay = (a: DateObj, b: DateObj): boolean => a.isSame(b, 'day');
