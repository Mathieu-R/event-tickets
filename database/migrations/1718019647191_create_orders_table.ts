import { BaseSchema } from "@adonisjs/lucid/schema";

export default class extends BaseSchema {
	protected tableName = "orders";

	async up() {
		this.schema.createTable(this.tableName, (table) => {
			table.increments("id");

			table.integer("user_id").unsigned().references("id").inTable("users").onDelete("CASCADE");
			table.integer("event_id").unsigned().references("id").inTable("events").onDelete("CASCADE");

			table.integer("total_price").notNullable().checkPositive();

			table.timestamp("created_at").defaultTo(this.raw("CURRENT_TIMESTAMP"));
		});
	}

	async down() {
		this.schema.dropTable(this.tableName);
	}
}
