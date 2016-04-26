var app = require("express");
var router = app.Router();
var Post = require("../models/Post");

// Devolver un solo post por Id
router.get("/posts/:_id", function(req, res) {
    // IMPLEMENTAR !!!
    // USAR Post.findOne()
});

// Devolver todos los posts
router.get("/posts", function(req, res) {
    Post.find({}, function(err, data) {
        if (err) throw (err);
        res.json(data);
    });
});

// Modifica likes, y devuelve el post modificado
router.post("/posts/:_id/likes", function(req, res) {
    Post.findOne({
        _id: req.params._id
    }, function(err, data) {
        if (err) throw (err);

        data.likes = data.likes + 1;
        data.save(function(err, dataModificado) {
            res.json(dataModificado);
        });
    });
});


module.exports = router;
