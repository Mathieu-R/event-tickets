import { DateTime } from "luxon";

export function convertToFullDateTime(dateString: string, timeString: string | undefined): DateTime | undefined {
	if (timeString === undefined) {
		return timeString;
	}

	const date = DateTime.fromFormat(dateString, "dd/MM/yy");
	const time = DateTime.fromFormat(timeString, "HH:mm");

	// combine the date and time
	const datetimeObject = date.set({ hour: time.hour, minute: time.minute });
	return datetimeObject;
}
