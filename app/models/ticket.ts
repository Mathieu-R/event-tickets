import Event from './event.js'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Ticket extends BaseModel {
    @column({ isPrimary: true })
    declare id: number

    @column()
    declare name: string

    @column()
    declare description: string | null

    @column()
    declare price: number

    @column()
    declare eventId: number
    @belongsTo(() => Event)
    declare event: BelongsTo<typeof Event>
}
