// importing express
const express = require("express");
const mongoose = require("mongoose");
const routesFromAnotherFile = require("./routes");

const httpServer = express();

// middleware to parse json body
httpServer.use(express.json());

httpServer.use(routesFromAnotherFile);


mongoose
    .connect(
        "mongodb://127.0.0.1:27017/databaseForPostsApp"
    )
    .then(function() {
        console.log("Connected to DB!!");
        httpServer.listen(3000, function() {
            console.log("Server listening on port 3000");
        });
    })
    .catch(function(e) {
        console.log("Error connecting: " + e.toString());
    });