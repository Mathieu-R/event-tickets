import Event from "#models/event";
import type { ModelPaginatorContract } from "@adonisjs/lucid/types/model";

// DTO for events
export default class EventsPresenter {
	toJSON(events: ModelPaginatorContract<Event>) {
		const meta = events.getMeta();
		console.log(meta);
		console.log(events.all().map((event) => event.name));
		return {
			meta: {
				firstPage: meta.firstPage,
				firstPageUrl: meta.firstPageUrl,
				lastPage: meta.lastPage,
				lastPageUrl: meta.lastPageUrl,
				nextPageUrl: meta.nextPageUrl,
				previousPageUrl: meta.previousPageUrl,
				total: meta.total
			},
			data: events.all().map((event) => ({
				id: event.id,
				title: event.name,
				posterUrl: event.posterUrl,
				// better to format date in the front-end as browsers can infer user local timezone
				startingAt: event.startTime,
				endingAt: event.endTime,
				venue: {
					name: event.venue.name,
					address: `${event.venue.streetNumber}, ${event.venue.streetName}, ${event.venue.postalCode}, ${event.venue.city}`,
					lat: event.venue.lat,
					lng: event.venue.lng
				},
				category: event.category.name,
				owner: {
					name: event.owner.name,
					abbreviation: event.owner.abbreviation
				}
			}))
		};
	}
}
