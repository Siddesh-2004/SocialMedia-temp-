import dotenv from "dotenv";
import app from "./app.js";
import db from "./db/index.js";
import { sql } from "drizzle-orm";
dotenv.config({ path: './.env' });


try {
  await db.execute(sql`select 1`);
  console.log("DB connected successfully");

  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
} catch (error) {
  console.error("DB connection failed:", error);
  process.exit(1);
}

