import Event from '#models/event'

// DTO for events
export default class EventPresenter {
    toJSON(event: Event) {
        return {
            id: event.id,
            title: event.name,
            description: event.description,
            posterUrl: event.posterUrl,
            startingAt: event.startTime,
            endingAt: event.endTime,
            venue: {
                name: event.venue.name,
                address: `${event.venue.streetNumber}, ${event.venue.streetName}, ${event.venue.postalCode}, ${event.venue.city}`,
                lat: event.venue.lat,
                lng: event.venue.lng,
            },
            category: event.category.name,
            owner: {
                name: event.owner.name,
                abbreviation: event.owner.abbreviation,
            },
            tickets: event.tickets.map(({ name, description, price }) => ({
                name,
                description,
                price,
            })),
        }
    }
}
