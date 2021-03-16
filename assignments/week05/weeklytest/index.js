var express = require("express");
var session = require("express-session");
var app = express();
app.use(session({
    secret: "Express session secret"
})
); 
app.use(express.urlencoded({extended: false}));
app.use(express.static("public"));
var tweets = [
    {
        name: "digitier",
        tweet: "this is a cool piece of information. "
    },
    
    {
       name: "MOSH",
        tweet: "@digitizer I agree."
    }
];
app.post("/tweet", function(req, res){
    for(var i=0; i<tweets.length; i++){
        if(req.body.name == tweets[i].name){
            req.session.loggedIn = true;
            req.session.name = tweets[i].name;
        }
    }
    res.redirect("/user");
});
app.get("/user", function(req, res){
    if(req.session.loggedIn == true){
        res.send("<h1> thanks for tweet </h1>");
    }
    else{
        res.redirect("/");
    }
});


app.listen(3030, function(){
    console.log("listening on port 3030");
});