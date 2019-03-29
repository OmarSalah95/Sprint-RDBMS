exports.up = function(knex) {
  return knex.schema.createTable("projects", tbl => {
    tbl.increments();

    tbl.string("name", 100)
        .notNullable();

    tbl.string("description", 100)
        .notNullable();

    tbl.boolean("completed")
      .defaultTo(false)
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("projects");
};
