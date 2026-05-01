import { pgTable as table } from "drizzle-orm/pg-core";
import * as t from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

import { usersTable } from "./users.js";
import { timestamps } from "./timestamps.js";

//--------NOTES-----------
//Features to be implemented going ahead in project showcase
//wholiked
//comments
//likecount

export const projectShowcaseTable = table("project_showcase", {
  projectId: t.integer().primaryKey().generatedAlwaysAsIdentity(),
  userId: t.integer().notNull().references(() => usersTable.userId),
  
  title: t.varchar().notNull(),
  description: t.text().notNull(),
  
  //Images as an array, Video as a single URL string
  images: t.varchar().array(), 
  videoLink: t.varchar(), 
  projectLink: t.varchar(),
  ...timestamps
}, (table) => [

  t.check('title_check', sql`length(${table.title}) >= 3 AND length(${table.title}) <= 100`)
]);