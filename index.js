const server = require('./server.js')
const db = require('./data/dbConfig');
const port = 4001;

// Add project to DB
server.post("/api/projects", (req, res) => {
    !req.body.name || !req.body.description
        ? res.status(400).json({ message: "Please fill out the name and description for the new project."})
        : db("projects")
            .insert(req.body)
            .then(id => res.status(201).json(id))
            .catch(err => res.status(500).json({ message: `Error while attempting to save new project.\n ${err} \n` }))
});
// Add actions to Project
server.post("/api/actions", (req, res) => {
    !req.body.project_id || !req.body.description
        ? res.status(400).json({message: "Please include a project ID and description for the new req.body."})
        : db("projects")
            .where({ id: req.body.project_id })
            .then(project => {
                !project || !project.length
                    ? res.status(404).json({ message: "No project with that ID exists." })
                    : db("actions")
                        .insert(req.body)
                        .then(id => res.status(201).json(id))
                        .catch(err =>res.status(500).json({ message: `Error while attempting to save new action.\n ${err} \n` }));
            })
            // I know I need this catch but I am unsure of what the catch would be getting since I account for the project being missing with the ternary
            // this catch would be if the db call to the projects table fails if I am not mistaken
            .catch(err => res.status(500).json({message: `It seems we couldn't find that Project in our tables \n ${err} \n`}))
});
//GET project by ID
server.get("/api/projects/:id", async (req, res) => {
    try {
        const actions = await db('projects')
            .innerJoin('actions', 'actions.project_id', 'projects.id')
            .select('actions.*')
            .where('projects.id', req.params.id)
        
        const project = await db('projects')
        .where('id', req.params.id)
        
        project && project.length
            ? res.status(200).json({
                    ...project[0],
                    actions,
            })
            : res.status(404).json({ message: 'A project with that ID does not exist.' })
    } catch (err) {
        res.status(500).json({ message: `An error occurred while trying to access the project from the database. \n ${err} \n` })
    }
  });

// Server listener
server.listen(port, () => {
    console.log(`Server Is Listening at http://localhost:${port}`)
})