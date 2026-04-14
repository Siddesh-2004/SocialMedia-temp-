import { drizzle } from 'drizzle-orm/node-postgres';
import dotenv from "dotenv";

dotenv.config();


const db = drizzle({ connection: process.env.DATABASE_URL, casing: 'snake_case' })

export default db;