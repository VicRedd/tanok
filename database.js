const sql = require('mssql');

const config = {
    user: 'adminred',
    password: 'Digitales100%',
    server: 'serverred.database.windows.net', // Cambia esto con tu servidor
    database: 'DBTanok',
    options: {
        encrypt: true // Usa el cifrado para conexiones seguras
    }
};

sql.connect(config, (err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the SQL Server database.');
});

module.exports = sql;
