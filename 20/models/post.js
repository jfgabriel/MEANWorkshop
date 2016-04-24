var mongoose = require("mongoose");

var schema = new mongoose.Schema({
    titulo: String,
    descripcion: String,
    texto: String,
    imagen: String,
    likes: Number,
    comentarios: [{
        texto: String,
        autor: String,
    }]
});

module.exports = mongoose.model("Post", schema);
