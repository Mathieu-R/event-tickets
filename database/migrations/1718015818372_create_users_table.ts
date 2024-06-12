import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
    protected tableName = 'users'

    async up() {
        this.schema.createTable(this.tableName, (table) => {
            // increments columns are by default primary_key
            table.increments('id')

            table.string('firstname').notNullable()
            table.string('lastname').notNullable()
            table.string('email', 254).notNullable().unique()
            table.string('password').notNullable()
            table.boolean('is_admin').notNullable().defaultTo(false)

            table.timestamp('created_at').notNullable().defaultTo(this.raw('CURRENT_TIMESTAMP'))
            table.timestamp('updated_at').notNullable().defaultTo(this.raw('CURRENT_TIMESTAMP'))
        })
    }

    async down() {
        this.schema.dropTable(this.tableName)
    }
}
