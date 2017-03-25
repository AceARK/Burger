// Importing ORM 
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(callbackFunction) {
    orm.selectAll("burgers", function(result) {
      callbackFunction(result);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(column, value, callbackFunction) {
    orm.insertOne("burgers", column, value, function(result) {
      callbackFunction(result);
    });
  },
  updateOne: function(columnValuesObject, condition, callbackFunction) {
    orm.updateOne("burgers", columnValuesObject, condition, function(result) {
      callbackFunction(result);
    });
  }
};

// Exporting burger model
module.exports = burger;
