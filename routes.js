const express = require("express");
const createNewPost = require("./functions");
const router = express.Router();
const Post = require("./db/posts.js")
    // getting new post
router.post("/", function(req, res) {
    createNewPost(req.body.postContent, req.body.postCreatedBy)
        .then(function(post) {
            res.send("Post Created Successfully")
        })
        .catch(function(error) {
            res.send("Error creating post")
        })
})

//getting all posts from database
router.get("/", function(req, res) {
    Post.find().then(function(posts) {
        res.send(posts);
    }).catch(function(error) {
        res.send("Error getting posts:" + error);
    })
})



module.exports = router;