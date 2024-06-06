const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const projectController = require('./controllers/projectController');

const app = express();

// Configurar el motor de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para parsear el cuerpo de las solicitudes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Definir la ruta para /projects
app.get('/projects', projectController.getProjects);
app.post('/projects', projectController.insertProject);

// Definir la ruta para la vista principal
app.get('/', (req, res) => {
    res.render('index');
});

// Definir la ruta para la página "about"
app.get('/about', (req, res) => {
    res.render('about');
});

// Definir la ruta para la página "contact"
app.get('/contact', (req, res) => {
    res.render('contact');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const projectController = require('./controllers/projectController');

const app = express();

// Configurar el motor de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para parsear el cuerpo de las solicitudes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Definir la ruta para /projects
app.get('/projects', projectController.getProjects);
app.post('/projects', projectController.insertProject);

// Definir la ruta para la vista principal
app.get('/', (req, res) => {
    res.render('index');
});

// Definir la ruta para la página "about"
app.get('/about', (req, res) => {
    res.render('about');
});

// Definir la ruta para la página "contact"
app.get('/contact', (req, res) => {
    res.render('contact');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
