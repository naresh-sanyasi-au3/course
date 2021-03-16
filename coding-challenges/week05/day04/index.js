var express = require("express");

var app = express()

var contacts = [{
    name: "name",
    phone: "phone no"
}]

app.post("/", function (req, res) {
    res.send("contacts")
})
app.get("/", function (req, res) {
    res.send("contacts")
})
app.put("/", function (req, res) {
    res.send("contacts")
})
app.delete("/", function (req, res) {
    res.send("contacts")
})

app.listen(3000, function () {
    console.log("listening at port 3000")
})