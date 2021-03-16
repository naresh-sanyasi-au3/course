var express = require("express");
var session = require("express-session");
var mongoClient = require("mongodb").MongoClient;
var db;
mongoClient.connect("mongodb://localhost:27017",function(err, client){
if(err)
    throw err;
    db = client.db("shallowdrivetest");
});
var app = express();
app.use(session({
    secret: "Express session secret"
})
); 
app.use(express.urlencoded({extended: false}));
app.use(express.static("public"));


app.post("/login", function(req, res){
db.collection("User").find().toArray(function(err, result){
    if(err)
     throw err;
     for(var i=0; i<result.length; i ++){
         if(req.body.email == result[i].email && req.body.password == result[i].password){
             req.session.loggedIn = true;
         }
     }
     res.redirect("/user")
});



    
});
app.get("/user", function(req, res){
    if(req.session.loggedIn == true){
        res.send("welcome to attainu hallowdrive test");
    }
    else{
        res.redirect("/");
    }
});
app.post("/signup", function(req, res){
    db.collection("User").insert(req.body);
    console.log("inserted");
    res.redirect("/user");
});
app.put("/update", function(req, res){
    db.collection('User').updateOne({_id: require('mongodb').ObjectID(req.body.id)}, {$set: req.body}, function(err, result) {
        if(err)throw error;
        res.json(result);
    });
});



// app.get("/logout", function(req, res){
//     req.session.destroy();
//     res.redirect("/");
// });
app.listen(3003, function(){
    console.log("listening on port 3003");
});