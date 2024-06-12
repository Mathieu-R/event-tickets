import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Event from './event.js'

export default class Venue extends BaseModel {
    @column({ isPrimary: true })
    declare id: number

    @column()
    declare name: string

    @column()
    declare streetNumber: number

    @column()
    declare streetName: string

    @column()
    declare city: string

    @column()
    declare postalCode: string

    @column()
    declare country: string

    @column()
    declare lat: number | null

    @column()
    declare lng: number | null

    @column()
    declare capacity: number

    @hasMany(() => Event)
    declare events: HasMany<typeof Event>
}
