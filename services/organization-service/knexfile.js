export default {
  client: "pg",
  connection: process.env.DB_URL || "postgres://organization:organization@localhost:5435/organization",
  migrations: {
    directory: "./migrations",
    tableName: "knex_migrations"
  }
};
