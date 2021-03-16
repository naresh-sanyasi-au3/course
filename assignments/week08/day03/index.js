var express = require("express");
var mongoClient = require("mongodb").MongoClient;
var exhbs = require("express-handlebars");

var db;

mongoClient.connect("mongodb://localhost:27017", function(err, client){
    if(err) throw err;
    db = client.db("attainu");
});

var app = express();

app.use(express.static("public"));
app.use(express.urlencoded({extended: false}));

app.engine("hbs", exhbs({defaultLayout: "main", extname: ".hbs"}));
app.set("view engine", "hbs");

app.get("/students", function(req, res){
    db.collection("students").find().toArray(function(err, result){
        if(err) throw err;
         res.render("students", {
             data: result,
             title: "students",
         });
    });  
});

app.get("/instructors", function(req, res){
    db.collection("instructors").find().toArray(function(err, result){
        if(err) throw err;
         res.render("instructors", {
             data: result,
             title: "instructors",
         });
    });  
});

app.get("/students/add", function(req, res){
    // db.collection("instructors").find().toArray(function(err, result){
    //     if(err) throw err;
         res.render("addstudents", {
            //  data: result,
             title: "addstudents",
             script: "/add.js",
        //  });
    });  
});
app.post("/students/student", function(req, res){
    db.collection("students").insertOne(req.body, function(err, result){
if(err) throw err;
console.log(req.body);
    });
});

app.listen(3000, function(){
    console.log("listening on port 3000");
});