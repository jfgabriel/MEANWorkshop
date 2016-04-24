var path = require('path');
var express = require('express');
var app = express();

console.log("1. Configurando rutas ...")
app.use('/public', express.static('public'));
app.use('/bower_components', express.static('bower_components'));

// Para cualquier otra ruta, devuelve el archivo principal de la aplicación de Angular
app.get('*', function(req, res, next) {
    res.sendFile(path.join(__dirname, '', 'public/app.html'));
});


console.log("2. Iniciando servidor ...")
app.listen(3000);
