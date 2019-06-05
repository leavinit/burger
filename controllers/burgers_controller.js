var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create routes 

//route to get and display all records
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

//route to create a new record and return it's id to the client
router.post("/api/burgers", function(req, res) {
  burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
    // Send back the new burger's ID  
    res.json({ id: res.id });
  });
});

//route to update a record's devoured state and return its id to the client
router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  //update a burger from not devoured to devoured (or vice versa)
  // console.log("condition", condition);
  burger.update({
      devoured: req.body.devoured
    },condition,
    function(result) {
      if (result.changedRows === 0) {
        return res.status(404).end();
      }
      res.status(200).end();
      //NO ROWS changed so end the connection
    }
  );
});

// Export routes (to server.js).
module.exports = router;
