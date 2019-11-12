//connect with mysql
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "sam",
  password: "sam",
  database: "comments"
});
db.connect();
module.exports = db;
