const express = require("express")
const mongoose = require("mongoose")
const httpServer = express()
const routes = require("./routes")
httpServer.use(express.json())
httpServer.use(routes)
mongoose.connect("mongodb://127.0.0.1:27017/databaseForPostsApp").then(function() {
    console.log("Connected!!")

    httpServer.listen(3000, function() {
        console.log("Server is listening on port 3000")
    })

}).catch(function() {
    console.log("Error connecting:" + e.toString())
})