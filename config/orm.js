// Import MySQL connection.
var connection = require("../config/connection.js");

// Object for SQL statement functions.
var orm = {
  selectAll: function(tableInput, callbackFunction) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      callbackFunction(result);
    });
  },
  insertOne: function(table, column, value, callbackFunction) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += column.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(value.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, value, function(err, result) {
      if (err) {
        throw err;
      }
      callbackFunction(result);
    });
  },
  // An example of objColVals would be {name: panther, sleepy: true}
  updateOne: function(table, columnValuesObject, condition, callbackFunction) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objectToSQL(columnValuesObject);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      callbackFunction(result);
    });
  }
};

// Helper function for SQL syntax.
function objectToSQL(valuesObject) {
  var arr = [];

  for (var key in valuesObject) {
    if (Object.hasOwnProperty.call(valuesObject, key)) {
      arr.push(key + "=" + valuesObject[key]);
    }
  }

  return arr.toString();
}

// Helper function for SQL syntax.
function printQuestionMarks(count) {
  var arr = [];

  for (var i = 0; i < count; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Exporting ORM object
module.exports = orm;