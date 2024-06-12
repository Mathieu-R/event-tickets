import { BaseSeeder } from '@adonisjs/lucid/seeders'

import data from '../../data/data.json' with { type: 'json' }
import { convertToFullDateTime } from '../../utils/index.js'
import User from '#models/user'
import Owner from '#models/owner'
import Venue from '#models/venue'
import Ticket from '#models/ticket'
import Event from '#models/event'
import EventCategory from '#models/event_category'

export default class extends BaseSeeder {
    async run() {
        const admin: User = await User.firstOrCreate(
            {
                email: 'john@doe.com',
            },
            {
                firstname: 'John',
                lastname: 'Doe',
                password: 'admin',
                isAdmin: true,
            }
        )
        // Write your database queries inside the run method
        for (const event of data) {
            const owner = await Owner.firstOrCreate(
                { name: event.owner.name },
                { abbreviation: event.owner.abbreviation }
            )

            const venue = await Venue.firstOrCreate(
                { name: event.venue.name },
                {
                    streetNumber: event.venue.street_number,
                    streetName: event.venue.street_name,
                    city: event.venue.city,
                    postalCode: event.venue.postal_code,
                    country: event.venue.country,
                    lat: event.venue.lat,
                    lng: event.venue.lng,
                    capacity: event.venue.capacity,
                }
            )

            const category = await EventCategory.firstOrCreate({ name: event.category })

            const createdEvent = await Event.create({
                name: event.title,
                description: event.description,
                posterUrl: event.poster_url,
                startTime: convertToFullDateTime(event.date, event.start_time),
                endTime: convertToFullDateTime(event.date, event.end_time),
                venueId: venue.id,
                categoryId: category.id,
                ownerId: owner.id,
                creatorId: admin.id,
            })

            await Ticket.createMany(
                event.tickets.map((ticket) => ({ ...ticket, eventId: createdEvent.id }))
            )
        }
    }
}
