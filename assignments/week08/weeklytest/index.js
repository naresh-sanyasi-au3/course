var express = require("express");
var mongoClient = require("mongodb").MongoClient;
var hbs = require("hbs");
var bodyParser = require("body-parser");
var db;
mongoClient.connect("mongodb://localhost:27017", function (err, client) {
  if (err) throw err;
  db = client.db("attainu");
});

var ObjectId = require("mongodb").ObjectID;

var app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "hbs");

// app.get("/students", function (req, res) {
//   db.collection("students").find().toArray(function (err, result) {
//     if (err) throw err;
//     res.render("students", {
//       data: result,
//       title: "students",
//     });
//   });
// });

app.get("/instructors", function (req, res) {
  db.collection("instructors").find().toArray(function (err, result) {
    if (err) throw err;
    res.render("instructors", {
      data: result,
      title: "instructors",
    });
  });
});

app.get("/students/add", function (req, res) {
  db.collection("instructors").find().toArray(function (err, result) {
    if (err) throw err;
    res.render("addstudents", {
      data: result,
      title: "addstudents",
      script: "/add.js",
    });
  });
});

app.post("/students/student", function (req, res) {
  db.collection("students").insertOne(req.body, function (err, result) {
    if (err) throw err;
    console.log(req.body);
  });
});

app.get("/students", function (req, res) {
  db.collection("students").find().toArray(function (err, result) {
    if (err) throw err;
    res.render("students.hbs", {
      data: result,
      title: "students",
      script: "/delete.js",
    });
  });
});

app.delete('/students/student/:id', function (req, res) {
  db.collection("students").deleteOne({ _id: ObjectId(req.params.id) }, function (err, result) {
    if (err) throw err;
    //  res.json({success: _id + "deleted"})
    console.log(req.params.id);
    res.json({ success: "deleted" })
  });
});

app.listen(3000, function () {
  console.log("listening on port 3000");
});