const express = require("express");
const app = express();
const db = require("./db/db");
const port = 3000;
// const bodyParser = require("body-parser"); //already in express

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));

//routes
app.get("/", function(request, response) {
  response.send("hello world-get");
});

//
app.get("/comments", (req, res) => {
  const sql = "SELECT * FROM comments";

  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

//user submit comments
app.post("/comments", function(request, response) {
  console.log("post request received at /comments");
  var nowDate =
    new Date().toJSON().slice(0, 10) + " " + new Date().toJSON().slice(12, 19);
  db.query(
    "INSERT INTO comments VALUES (?, ?, ?)",
    [request.body.name, request.body.suggestion, nowDate],
    function(err) {
      if (err) {
        console.log("error " + err);
      } else {
        response.status(200).redirect("demo.html");
      }
    }
  );
});

app.listen(port, function() {
  console.log("Server is running on port 3000");
});
