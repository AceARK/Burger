// Set up MySQL connection.
var mysql = require("mysql");

// Check if connection is using production JawsDB or local mysql db
// if(process.env.JAWSDB_URL) {
//     var connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
    var connection = mysql.createConnection({
      port: 3306,
      host: "wftuqljwesiffol6.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
      user: "lwxasfox7aimysoi",
      password: "y3p4z82azs5ienqs",
      database: "burgers_db"
    });
// }

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for ORM to use.
module.exports = connection;
