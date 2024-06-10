import { DateTime } from "luxon";
import { BaseModel, column, hasMany } from "@adonisjs/lucid/orm";
import type { HasMany } from "@adonisjs/lucid/types/relations";

import Event from "./event.js";

export default class Owner extends BaseModel {
	@column({ isPrimary: true })
	declare id: number;

	@column()
	declare name: string;

	@column()
	declare abbreviation: string | null;

	@hasMany(() => Event)
	declare events: HasMany<typeof Event>;
}
