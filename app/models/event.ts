import { DateTime } from 'luxon'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, belongsTo, hasMany } from '@adonisjs/lucid/orm'

import Venue from './venue.js'
import EventCategory from './event_category.js'
import Owner from './owner.js'
import User from './user.js'
import Ticket from './ticket.js'

export default class Event extends BaseModel {
    @column({ isPrimary: true })
    declare id: number

    @column()
    declare name: string

    @column()
    declare description: string | null

    @column()
    declare posterUrl: string

    @column()
    declare startTime: DateTime

    @column()
    declare endTime: DateTime | null

    @column()
    declare venueId: number
    @belongsTo(() => Venue)
    declare venue: BelongsTo<typeof Venue>

    @column()
    declare categoryId: number
    @belongsTo(() => EventCategory, { foreignKey: 'categoryId' })
    declare category: BelongsTo<typeof EventCategory>

    @column()
    declare ownerId: number
    @belongsTo(() => Owner)
    declare owner: BelongsTo<typeof Owner>

    @column()
    declare creatorId: number
    @belongsTo(() => User)
    declare creator: BelongsTo<typeof User>

    @column()
    @column.dateTime({ autoCreate: true })
    declare createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    declare updatedAt: DateTime

    @hasMany(() => Ticket)
    declare tickets: HasMany<typeof Ticket>
}
