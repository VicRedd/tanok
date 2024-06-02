const sql = require('../database');

// Obtener todos los proyectos
const getProjects = (callback) => {
    const query = 'SELECT * FROM projects';
    sql.query(query, (err, result) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            callback(err, null);
            return;
        }
        callback(null, result.recordset);
    });
};

// Insertar un nuevo proyecto
const insertProject = (project, callback) => {
    const query = 'INSERT INTO projects (name, description) VALUES (@name, @description)';
    const request = new sql.Request();
    request.input('name', sql.VarChar, project.name);
    request.input('description', sql.VarChar, project.description);
    request.query(query, (err, result) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            callback(err, null);
            return;
        }
        callback(null, result);
    });
};

module.exports = {
    getProjects,
    insertProject
};
