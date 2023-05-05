const express = require("express")
const router = express.Router()
router.get("/hi", function(req, res) {
    console.log(req.query)
    res.send("hello," + req.query.name)

})
router.get("/bye", function(req, res) {
    res.send("bye")

})
router.post("/", function(req, res) {
    res.send("hello from post request")

})

module.exports = router