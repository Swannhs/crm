import knex from "knex";

const dbUrl = process.env.DB_URL;

if (!dbUrl) {
  throw new Error("DB_URL environment variable is required");
}

export const db = knex({
  client: "pg",
  connection: dbUrl,
  pool: {
    min: 2,
    max: 10
  }
});
