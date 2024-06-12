import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import EventsPresenter from '#presenters/events_presenter'
import Event from '#models/event'

@inject()
export default class HomeController {
    constructor(private presenter: EventsPresenter) {}

    async index({ inertia, request }: HttpContext) {
        const page = request.input('page', 1)
        const events = await Event.query()
            .preload('owner')
            .preload('category')
            .preload('venue')
            .paginate(page, 6)

        return inertia.render('home', { events: this.presenter.toJSON(events) })
    }
}
