var orm = require("../config/orm.js");

var burger = {
  all: function(callback) {
    orm.all("cats", function(response) {
      callback(response);
    });
  },
  // Takes two arrays (cols, vals), creates a new record in the database, calls a function on the response
  create: function(cols, vals, callback) {
    orm.create("burgers", cols, vals, function(response) {
      callback(response);
    });
  },
  //Takes an object, sends it to the orm to be formatted, and updates the database.  Then the callback is run with the response.
  update: function(objColVals, condition, callback) {
    orm.update("burgers", objColVals, condition, function(response) {
      callback(response);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
