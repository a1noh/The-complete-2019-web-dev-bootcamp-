const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("Home page")
})
app.get("/contact", function(req, res){
    res.send("Email noh at noh1austin@gmail.com")
})
app.get("/about", function(req, res){
    res.send("My name is Austin Noh and I am friendly")
})
app.get("/app", function(req, res){
    res.send("<ul><li>beer</li><li>beer</li><li>beer</li></ul>")
})
app.listen(3000, function(){
    console.log("listening at port 3000")
})