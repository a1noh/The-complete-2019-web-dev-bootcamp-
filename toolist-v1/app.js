const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.set('view engine', 'ejs'); 
app.get("/", function(req, res){
    var today = new Date();
    var currentDay = today.getDay();
    var day = "";
    if (currentDay === 6 || currentDay === 0){
        day = "Weekend";
        // res.sendFile(__dirname + "/index.html");
       //res.write("Yay it's the weekend");
    } else {
        day = "weekday";
        // res.sendFile(__dirname + "/index.html"); 
    }
    res.render("list",{kindday: day} );
})
app.listen("3000", function(){
    console.log("listening at port 3000");
})