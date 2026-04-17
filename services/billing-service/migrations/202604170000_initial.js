export const up = async (knex) => {
  await knex.schema.createTable("invoices", (table) => {
    table.uuid("id").primary();
    table.uuid("org_id").notNullable().index();
    table.uuid("contact_id").nullable().index();
    table.string("created_by_user_id").notNullable().index();
    table.integer("amount_cents").notNullable();
    table.string("currency", 3).defaultTo("USD");
    table.string("status", 20).defaultTo("pending"); // pending, paid, void
    table.jsonb("metadata").defaultTo("{}");
    table.timestamps(true, true);
  });
};

export const down = async (knex) => {
  await knex.schema.dropTableIfExists("invoices");
};
