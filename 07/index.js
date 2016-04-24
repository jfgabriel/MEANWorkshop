var express = require('express');
var app = express();

console.log("1. Configurando rutas ...")
app.use('/public', express.static('public'));
app.use('/bower_components', express.static('bower_components'));

console.log("2. Iniciando servidor ...")
app.listen(3000);
