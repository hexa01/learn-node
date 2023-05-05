const express = require("express")
const httpServer = express()
httpServer.listen(3000, function() {
    console.log("Server is listening on port 3000")
})
httpServer.get("/", function(req, res) {
    res.send("hello there")

})