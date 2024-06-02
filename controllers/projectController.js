const Project = require('../models/projectModel');

// Obtener todos los proyectos
const getProjects = (req, res) => {
    Project.getProjects((err, projects) => {
        if (err) {
            res.status(500).send('Error fetching projects');
            return;
        }
        res.render('projects', { projects: projects });
    });
};

// Insertar un nuevo proyecto
const insertProject = (req, res) => {
    const newProject = {
        name: req.body.name,
        description: req.body.description
    };

    Project.insertProject(newProject, (err, result) => {
        if (err) {
            res.status(500).send('Error inserting project');
            return;
        }
        res.redirect('/projects');
    });
};

module.exports = {
    getProjects,
    insertProject
};
