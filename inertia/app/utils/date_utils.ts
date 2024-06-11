import { DateTime } from "luxon";

export function formatDate(dateISOString: string): string {
	return DateTime.fromISO(dateISOString).toFormat("ccc, LLL dd yyyy");
}

export function formatTime(dateISOString: string): string {
	return DateTime.fromISO(dateISOString).toFormat("HH:mm");
}
