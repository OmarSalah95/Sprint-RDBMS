exports.seed = function(knex, Promise) {
  return knex("actions")
    .truncate()
    .then(function() {
      return knex("actions").insert([
        {
          project_id: 1,
          description: "Create custom DB tables using Knex.js",
          additional_notes: "see README for details",
          completed: "true"
        },
        {
          project_id: 1,
          description: "Populate the DB tables created with dummy data",
          additional_notes: "Use Knex seeding to do so.",
          completed: "true"
        },
        {
          project_id: 1,
          description: "Finish writing the few end points necessary",
          additional_notes: "MVP is basically done.",
          completed: "false"
        },
        { project_id: 2, description: "go over sprint challenge" },
        { project_id: 2, description: "go over yesterday's project" },
        { project_id: 2, description: "go Mondays Tk" },
        { project_id: 2, description: "go Tuesdays Tk" },
        {
          project_id: 3,
          description: "Enjoy spending time with Doggos",
          additional_notes: "Take them to the park the backyard gets boring"
        },
        {
          project_id: 3,
          description: "Learn to read",
          additional_notes: "I read like a rock"
        },
        {
          project_id: 3,
          description:
            "Try to gleen the hidden meaning from the book",
          additional_notes:
            "No one ever did anything without a purpose... Do you really think they wrote a book without one?"
        },
        {
          project_id: 3,
          description: "Apply to real life",
          additional_notes: "but probably not"
        }
      ]);
    });
};