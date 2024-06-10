import { BaseSchema } from "@adonisjs/lucid/schema";

export default class extends BaseSchema {
	protected tableName = "order_items";

	async up() {
		this.schema.createTable(this.tableName, (table) => {
			table.increments("id");

			table.integer("order_id").unsigned().references("id").inTable("orders").onDelete("CASCADE");
			table.integer("ticket_id").unsigned().references("id").inTable("tickets").onDelete("CASCADE");

			table.boolean("scanned").notNullable().defaultTo(false);
		});
	}

	async down() {
		this.schema.dropTable(this.tableName);
	}
}
