const mongoose = require("mongoose");
const createNewPost = require("./functions")
mongoose
    .connect(
        "mongodb://127.0.0.1:27017/databaseForPostsApp",
        // locally
        // "mongodb://127.0.0.1:27017/db-name"
        {},
    )
    .then(function() {
        console.log("Connected!!");

        createNewPost("This is my first post", "Sushan Poudel");
        // console.log(Post);
    })
    .catch(function(e) {
        console.log("Error connecting: " + e.toString());
    });