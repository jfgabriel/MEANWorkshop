var express = require('express');
var app = express();

console.log("1. Configurando rutas ...")

app.use('/', // IMPLEMENTAR LLAMAR A MIDDLEWARE // );

console.log("2. Iniciando servidor ...");
app.listen(3000);
