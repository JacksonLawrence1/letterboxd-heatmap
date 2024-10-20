export enum DaysOfWeek {
	Monday, // MONDAY IS THE FIRST DAY OF THE WEEK
	Tuesday,
	Wednesday,
	Thursday,
	Friday,
	Saturday,
	Sunday
}

export interface Calendar {
	daysInYear: number;
	weekDayStartOfYear: DaysOfWeek;
}

function isLeapYear(year: number) {
	return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function getDaysInYear(year: number): number {
	return isLeapYear(year) ? 366 : 365;
}

function getStartingDayOfWeek(year: number): DaysOfWeek {
	const startingDay = new Date(year, 0, 1).getDay();
	return startingDay === 0 ? DaysOfWeek.Sunday : (startingDay - 1) as DaysOfWeek;
}

export function getDaysOfWeek(): string[] {
	return Object.keys(DaysOfWeek).filter(key => isNaN(Number(key)));
}

export default function createCalendar(year: number): Calendar {
	return {
		daysInYear: getDaysInYear(year),
		weekDayStartOfYear: getStartingDayOfWeek(year),
	};
}
