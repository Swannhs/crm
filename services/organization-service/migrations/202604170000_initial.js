export const up = async (knex) => {
  await knex.schema.createTable("organizations", (table) => {
    table.uuid("id").primary();
    table.string("name").notNullable();
    table.string("slug").unique().nullable();
    table.jsonb("metadata").defaultTo("{}");
    table.timestamps(true, true);
  });

  await knex.schema.createTable("locations", (table) => {
    table.uuid("id").primary();
    table.uuid("organization_id").notNullable().references("id").inTable("organizations").onDelete("CASCADE");
    table.string("name").notNullable();
    table.string("email").nullable();
    table.string("phone").nullable();
    table.string("street").nullable();
    table.string("city").nullable();
    table.string("state").nullable();
    table.string("zip_code").nullable();
    table.string("country").nullable();
    
    // Business specific
    table.string("unit_type").nullable(); // Full Service, QSR, Mall
    table.string("status").nullable();
    table.boolean("is_compliance").defaultTo(false);
    
    table.jsonb("metadata").defaultTo("{}");
    table.timestamps(true, true);
    
    table.index(["organization_id"]);
  });
};

export const down = async (knex) => {
  await knex.schema.dropTableIfExists("locations");
  await knex.schema.dropTableIfExists("organizations");
};
