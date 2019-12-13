const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const request = require("request");
app.use(bodyParser.urlencoded({extended: true}));



app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function (req, res) {
    // console.log(req.body.crypto); 
    var crypto = req.body.crypto;
    var fiat = req.body.fiat;
    var amount = req.body.amount;
   // console.log(finaUrl);
   var options = {
       url: "http://apiv2.bitcoinaverage.com/convert/global",
       method: "GET",
       qs: {
           from:crypto,
           to:fiat,
           amount: amount
       } 
   }
    request(options , function(error, response, body){
        //console.log(response.statusCode);
        var data = JSON.parse(body); // body is the json file
        var price = data.price;
        var currentdate = data.time;
        res.write("<p>The current date is " +currentdate);
        res.write("<h1>" + amount + crypto + "is currently worth" + price + fiat +"</h1>");
        res.send();
    })
  })
app.listen("3000", function () {
    console.log('listening at port 3000');
  })
