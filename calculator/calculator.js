const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true})); // this is what you need to use body parser

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
  })

app.post("/", function(req, res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var added = num1 + num2;
    res.send("The calculation is " + added);

    console.log(req.body);
})
app.listen("3000", function(){
    console.log("Litening at port 3000")
})