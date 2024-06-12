import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
    protected tableName = 'events'

    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id')

            table.string('name').notNullable()
            table.text('description').nullable()
            table.string('poster_url').notNullable()
            table.timestamp('start_time', { useTz: true }).notNullable()
            table.timestamp('end_time', { useTz: true }).nullable()

            table
                .integer('venue_id')
                .unsigned()
                .references('id')
                .inTable('venues')
                .onDelete('CASCADE')
            table
                .integer('category_id')
                .unsigned()
                .references('id')
                .inTable('event_categories')
                .onDelete('CASCADE')
            table
                .integer('owner_id')
                .unsigned()
                .references('id')
                .inTable('owners')
                .onDelete('CASCADE')
            table
                .integer('creator_id')
                .unsigned()
                .references('id')
                .inTable('users')
                .onDelete('CASCADE')

            table.timestamp('created_at').notNullable().defaultTo(this.raw('CURRENT_TIMESTAMP'))
            table.timestamp('updated_at').notNullable().defaultTo(this.raw('CURRENT_TIMESTAMP'))
        })
    }

    async down() {
        this.schema.dropTable(this.tableName)
    }
}
