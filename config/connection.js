// Sets up MySQL database connection.
var mysql = require("mysql");
var connection;


if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
    var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgers_db"
    });
};
// Makes connection.

connection.connect(function(error) {
  if (error) {
    console.log("error connecting to database: " + error.stack);
    return;
  }
  console.log("sql database connected as id " + connection.threadId);
});

// Exports the connection
module.exports = connection;
