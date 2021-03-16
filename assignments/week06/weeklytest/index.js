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
        username: "digitizer",
        password: "digitizer"
    },
   
    {
        username: "mosh",
        password: "hello123"
    }
];
app.post("/login", function(req, res){
    for(var i=0; i<students.length; i++){
        if(req.body.username == students[i].username && req.body.password == students[i].password){
            req.session.loggedIn = true;
            req.session.username = students[i].username;
        }
    }
    res.redirect("/user");
});
app.get("/user", function(req, res){
    if(req.session.loggedIn == true){
        res.sendFile(__dirname + '/main.html');
    }
    else{
        res.redirect("/");
    }
});
var tweets = [
     {
    name: "digitizer",
    tweet: "This is a cool piece of information."
},
{
    name: "MOSH",
    tweet: "@digitizer i agree."
}

] 
app.get("/tweet", function(req, res){
    for (var i = 0; i<tweets.length; i++)
    var tr = tweets[i].name + ' : ' +tweets[i].tweet
    res.json(tr)

})



app.get("/logout", function(req, res){
    req.session.destroy();
    res.redirect("/");
});
app.listen(3000, function(){
    console.log("listening on port 3000");
});