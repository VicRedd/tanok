const sql = require('../database');

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

module.exports = {
    getProjects
};
