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

//delete a post
router.delete("/:postId", function(req, res) {
    Post.deleteOne({ _id: req.params.postId })
        .then(function(post) {
            console.log(post)
            res.send("DEleted");
        })
        .catch(function(err) {
            res.send("Error deleting:" + err)
        })
})




module.exports = router;