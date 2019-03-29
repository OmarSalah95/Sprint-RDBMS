exports.up = function(knex) {
    return knex.schema.createTable("actions", tbl => {
      tbl.increments();

      tbl
        .integer("project_id")
        .references("projects.id")
        .notNullable();

      tbl.string("description", 500)
      .notNullable();

      tbl.string("additional_notes", 200);
      
      tbl.string("completed")
        .defaultTo("false")
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("actions");
  };