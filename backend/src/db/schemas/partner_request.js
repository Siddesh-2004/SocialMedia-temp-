import { pgTable as table } from "drizzle-orm/pg-core";
import * as t from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import { timestamps } from "./timestamps.js";

import { usersTable } from "./users.js";

export const partnerRequestsTable = table("partner_request", {
  requestId: t.integer().primaryKey().generatedAlwaysAsIdentity(),
  userId: t.integer().notNull().references(() => usersTable.userId),
  
  title: t.varchar().notNull(),
  description: t.text().notNull(),
  skills: t.varchar().array(),
  membersRequired: t.integer().notNull(),
  images: t.varchar(),
  isCompleted: t.boolean().default(false).notNull(),
  ...timestamps
  }, (table) => [
  // Optional: Add a check so people don't ask for 0 or negative team members
  t.check('members_required_check', sql`${table.membersRequired} > 0`),
  t.check('title_check', sql`length(${table.title}) >= 5 AND length(${table.title}) <= 100`)
]);