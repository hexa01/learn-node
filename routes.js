const express = require("express");
const createNewPost = require("./functions");
const router = express.Router();

// getting JSON data from request body
router.post("/", function(req, res) {
    createNewPost(req.body.postContent, req.body.postCreatedBy)
        .then(function(post) {
            res.send("Post Created Successfully")
        })
        .catch(function(error) {
            res.send("Error creating post")
        })


})



module.exports = router;