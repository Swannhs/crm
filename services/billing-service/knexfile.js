export default {
  client: "pg",
  connection: process.env.DB_URL || "postgres://billing:billing@localhost:5436/billing",
  migrations: {
    directory: "./migrations",
    tableName: "knex_migrations"
  }
};
