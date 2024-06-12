import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
    protected tableName = 'owners'

    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id')

            table.string('name').notNullable()
            table.string('abbreviation', 20).nullable()
        })
    }

    async down() {
        this.schema.dropTable(this.tableName)
    }
}
