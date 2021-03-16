var express = require("express");
var session = require("express-session");
var app = express();
app.use(session({
    secret: "Express session secret"
})
); 
app.use(express.urlencoded({extended: false}));
app.use(express.static("public"));
var students = [
    {
        username: "nares",
        email: "nares@gmail.com",
        password: "nares"
    },
    {
        username: "umesh",
        email: "umesh@gmail.com",
        password: "umesh"
    },
    {
        username: "junu",
        email: "junu@gmail.com",
        password: "junu"
    }
];
app.post("/login", function(req, res){
    for(var i=0; i<students.length; i++){
        if(req.body.email == students[i].email && req.body.password == students[i].password){
            req.session.loggedIn = true;
            req.session.username = students[i].username;
        }
    }
    res.redirect("/user");
});
app.get("/user", function(req, res){
    if(req.session.loggedIn == true){
        res.send("welcome " + req.session.username + " " + '<a href="/logout">LOGOUT</a>');
    }
    else{
        res.redirect("/");
    }
});

app.get("/logout", function(req, res){
    req.session.destroy();
    res.redirect("/");
});
app.listen(3000, function(){
    console.log("listening on port 3000");
});