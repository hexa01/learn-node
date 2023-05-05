const express = require("express")
const router = express.Router()
router.get("/", function(req, res) {
    res.send("who are you? ")

})
router.post("/", function(req, res) {
    res.send("hello from post request")

})

module.exports = router