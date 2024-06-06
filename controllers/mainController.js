const Project = require('../models/exampleModel');

const getProjects = (req, res) => {
    Project.getProjects((err, projects) => {
        if (err) {
            res.status(500).send('Error fetching projects');
            return;
        }
        res.json(projects);
    });
};

module.exports = {
    getProjects
};

const Project = require('../models/exampleModel');

const getProjects = (req, res) => {
    Project.getProjects((err, projects) => {
        if (err) {
            res.status(500).send('Error fetching projects');
            return;
        }
        res.json(projects);
    });
};

module.exports = {
    getProjects
};
