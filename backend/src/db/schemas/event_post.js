import { pgTable as table } from "drizzle-orm/pg-core";
import * as t from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import { timestamps } from "./timestamps.js";

import { usersTable } from "./users.js";

export const eventPostsTable = table("event_post", {
    eventId: t.integer().primaryKey().generatedAlwaysAsIdentity(), 
    eventName: t.varchar().notNull(),
    maxTeams: t.integer(),
    participantsPerTeam: t.integer().notNull(),
    description: t.text().notNull(),
    requirements: t.text(),
    eventDate: t.timestamp().notNull(),
    regFormLink: t.varchar().notNull(), 
    contactDetails: t.text().notNull(),
    organizerId: t.integer().notNull().references(() => usersTable.userId),
    imagesBrochureLink: t.varchar(),
    ...timestamps
}, (table) => [
  t.check('eventName_check', sql`length(${table.eventName}) >= 5 AND length(${table.eventName}) <= 150`),
  t.check('description_check', sql`length(${table.description}) >= 25 AND length(${table.description}) <= 1000`),
]);
