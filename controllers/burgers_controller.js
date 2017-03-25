// Requiring express
var express = require("express");
// Requiring model burger
var burger = require("../models/burger.js");

// setting router
var router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  burger.insertOne([
    "burger_name"
  ], [
    req.body.name
  ], function() {
    res.redirect("/");
  });
});

router.put("/devour", function(req, res) {
  var condition = "id = " + req.body.id;

  console.log("condition", condition);

  burger.updateOne({
    devoured: req.body.devour
  }, condition, function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;
