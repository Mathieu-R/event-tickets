import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
    protected tableName = 'tickets'

    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id')

            table.string('name').notNullable()
            table.text('description')
            table.decimal('price', 10, 2).notNullable()

            table
                .integer('event_id')
                .unsigned()
                .references('id')
                .inTable('events')
                .onDelete('CASCADE')
        })
    }

    async down() {
        this.schema.dropTable(this.tableName)
    }
}
