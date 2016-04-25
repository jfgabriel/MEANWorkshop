var path = require('path');
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser      = require("body-parser");
var requireDir = require('require-dir');

console.log("1. Preparar conexión a la base de datos ...")
mongoose.connect('mongodb://localhost/mundo');

console.log("2. Configurando middleware ...")
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

console.log("3. Configurando rutas estáticas ...")
app.use('/public', express.static('public'));
app.use('/bower_components', express.static('bower_components'));

console.log("4. Configurando API ...")
// app.use('/api', express.static('public'));
var routes = requireDir('./api/');
for (var route in routes)
    app.use('/api/', routes[route]);

// Para cualquier otra ruta, devuelve el archivo principal de la aplicación de Angular
app.get('*', function(req, res, next) {
    res.sendFile(path.join(__dirname, '', 'public/app.html'));
});

console.log("5. Iniciando servidor ...")
app.listen(3000);
