import { DateTime } from "luxon";
import { BaseModel, column, belongsTo } from "@adonisjs/lucid/orm";
import type { BelongsTo } from "@adonisjs/lucid/types/relations";
import User from "./user.js";
import Event from "./event.js";

export default class Order extends BaseModel {
	@column({ isPrimary: true })
	declare id: number;

	@column()
	declare userId: number;
	@belongsTo(() => User)
	declare user: BelongsTo<typeof User>;

	@column()
	declare eventId: number;
	@belongsTo(() => Event)
	declare event: BelongsTo<typeof Event>;

	@column()
	declare totalPrice: number;

	@column.dateTime({ autoCreate: true })
	declare createdAt: DateTime;
}
