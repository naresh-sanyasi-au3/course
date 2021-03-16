var express = require("express");
var exphbs =  require("express-handlebars");

var app = express();

app.engine("hbs", exphbs({defaultLayout: "main", extname: ".hbs"}));
app.set("view engine", "hbs");

var me = {
    firstname: "Naresh",
    lastname: "Sanyasi",
    bio: "I am Naresh from Siliguri Darjeeling, My qualification is BSc and Diploma in Engineering, After Diploma i started my career in telecom field a as Supervisor,I have seen that from Software field grown vary fast, So i decided to go Softare field.",
    movies: [
        "3 Idiots",
          "Munna Bhai MBBS",
          "Dhoom"
    ]
};
app.get("/", function(req, res){
    res.render("aboutme", {
        data: me,
        title: "aboutme"
    });
});
app.listen(3000, function(){
    console.log("listening on port 3000");
});