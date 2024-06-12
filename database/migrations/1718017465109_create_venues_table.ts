import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
    protected tableName = 'venues'

    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id')

            table.string('name').unique().notNullable()
            table.string('street_number').notNullable()
            table.string('street_name').notNullable()
            table.string('city').notNullable()
            table.string('postal_code', 20).notNullable()
            table.string('country').notNullable()
            table.float('lat').nullable()
            table.float('lng').nullable()
            table.integer('capacity').checkPositive()
        })
    }

    async down() {
        this.schema.dropTable(this.tableName)
    }
}
