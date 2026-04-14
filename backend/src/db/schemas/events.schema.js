import { pgTable as table } from "drizzle-orm/pg-core";
import * as t from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import { timestamps } from "./timestamps.schema.js";
import { usersTable } from "./users.schema.js";

export const eventPostsTable = table(
  "events",
  {
    eventId: t.integer().primaryKey().generatedAlwaysAsIdentity(),
    eventName: t.varchar().notNull(),
    maxTeams: t.integer(),
    participantsPerTeam: t.integer(),
    description: t.text().notNull(),
    requirements: t.text(),
    eventDateAndTime: t.timestamp().notNull(),
    regFormLink: t.varchar(255),
    contactDetails: t.text().notNull(),
    LocationDetails: t.text(),
    organizerId: t
      .integer()
      .notNull()
      .references(() => usersTable.userId),
    brochureImageLink: t.varchar(255),
    ...timestamps,
  },
  (table) => [
    t.check(
      "eventName_check",
      sql`length(${table.eventName}) >= 2 AND length(${table.eventName}) <= 50`,
    ),
    t.check(
      "description_check",
      sql`length(${table.description}) >= 10 AND length(${table.description}) <= 1000`,
    ),
  ],
);
