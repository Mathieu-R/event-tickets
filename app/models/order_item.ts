import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Order from './order.js'
import Ticket from './ticket.js'

export default class OrderItem extends BaseModel {
    @column({ isPrimary: true })
    declare id: number

    @column()
    declare orderId: number
    @belongsTo(() => Order)
    declare order: BelongsTo<typeof Order>

    @column()
    declare ticketId: number
    @belongsTo(() => Ticket)
    declare ticket: BelongsTo<typeof Ticket>

    @column()
    declare scanned: boolean
}
