var app = require("express");
var router = app.Router();
var Post = require("../models/post");

// Devolver todos los posts
router.get("/posts", function(req, res) {
    Post.find(function(err, data) {
        if (err) throw (err);

        res.json(data);
    });
});

// Crea un post
router.post("/posts", function(req, res) {
    var post = new Post(req.body);
    post.save(function(err, data) {
        if (err) throw err;

        res.json(data);
    });
});

module.exports = router;
