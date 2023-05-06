const express = require("express");
const router = express.Router();

// getting data from query string
router.get("/hi", function(req, res) {
    console.log(req.query);
    if (req.query.name != undefined) {
        res.send("Hello, " + req.query.name);
    } else {
        res.send("Hello");
    }
});

// getting JSON data from request body
router.post("/bye", function(req, res) {
    console.log(req.body);
    res.send("Bye Bye")
})



module.exports = router;