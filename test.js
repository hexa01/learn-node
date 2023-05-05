const express = require("express")
const httpServer = express()
const routes = require("./routes")
httpServer.use(routes)
httpServer.listen(3000, function() {
    console.log("Server is listening on port 3000")
})