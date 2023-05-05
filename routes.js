const express = require("express")
const router = express.Router()
router.post("/hi", function(req, res) {
        // console.log(req.query)
        console.log(req.body)
        if (req.query.name != undefined) {
            res.send("hello," + req.query.name)
        } else {
            res.send("Hello boy")
        }
    })
    //getting json data from request body
router.get("/bye", function(req, res) {

    res.send("bye bye")

})
router.post("/", function(req, res) {
    res.send("hello from post request")

})

module.exports = router