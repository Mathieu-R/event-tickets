// import type { HttpContext } from '@adonisjs/core/http'

import type { HttpContext } from '@adonisjs/core/http'
import Event from '#models/event'
import EventPresenter from '#presenters/event_presenter'
import { inject } from '@adonisjs/core'

@inject()
export default class EventController {
    constructor(private presenter: EventPresenter) {}

    async index({ inertia, request }: HttpContext) {
        const event = await Event.query()
            .where('id', request.param('id'))
            .preload('venue')
            .preload('owner')
            .preload('category')
            .preload('tickets')
            .firstOrFail()
        return inertia.render('event', { event: this.presenter.toJSON(event) })
    }
}
