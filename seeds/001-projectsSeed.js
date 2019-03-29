
exports.seed = function(knex, Promise) {
  return knex("projects")
    .truncate()
    .then(() => {
      return knex("projects").insert([
        {
          name: "Finish Sprint",
          description: "Use Knex to create 2 tables written to the DB",
          completed: "true"
        }, //id=1
        {
          name: "Prepare for the week",
          description: "Take the time to watch mondays TK.",
          completed: "false"
        }, //2
        {
          name: "Read a book",
          description: "I should read more",
          completed: "false"
        } //3
      ]);
    });
};
