import { pgTable as table } from "drizzle-orm/pg-core";
import * as t from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import { timestamps } from "./timestamps.js";
export const usersTable = table("users", {
  userId: t.integer().primaryKey().generatedAlwaysAsIdentity(),
  email: t.varchar().notNull().unique(),
  fullName: t.varchar().notNull(),
  userName: t.varchar().notNull().unique(),
  password: t.varchar().notNull(),
  interests: t.varchar().array(),
  githubRepoLink: t.varchar(),
  portfolioLink:t.varchar(),
  profilePhotLink:t.varchar(),
  ...timestamps
},(table)=>[
    t.check('fullName_check', sql`length(${table.fullName}) >= 2 AND length(${table.fullName}) <= 100`),
    t.check('userName_check', sql`length(${table.userName}) >= 2 AND length(${table.userName}) <= 100`),
    t.check('password_check', sql`length(${table.password}) >= 6 AND length(${table.password}) <= 100`)
]);