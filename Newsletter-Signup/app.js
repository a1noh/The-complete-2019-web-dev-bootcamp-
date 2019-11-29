const express = require("express");
const resquest = require('request');
const bodyParser = require('body-parser');
app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.get("/", function(req, res){
    res.sendFile(__dirname +"/signup.html");
})

app.post("/", function(req, res){
    var first = req.body.first;
    var last = req.body.last;
    var email = req.body.email;
    console.log(first + last + email);
})
app.listen("3000", function(){
    console.log("listening on port 3000");
})