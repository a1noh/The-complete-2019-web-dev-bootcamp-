const express = require("express");
const request = require('request');
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
    var data = {
        members: [
            {
                email_address: email, 
                status: "subscribed",
                merge_fields: {
                    FNAME: first,
                    LNAME: last,
                }
            }
        ]
    }
    var jasonData = JSON.stringify(data);
   // console.log(first + last + email);

    var option = {
        url : 'https://us4.api.mailchimp.com/3.0/lists/acb2e3618e',
        method : "POST",
        headers : {
            "Authorization" : "noh1 ad4c49d6c4a37096c803e4d5a0991abd-us4"
        },
        body: jasonData // parameter for our api    
    }

    request(option, function(error, response, body){
        if (error){
            res.sendFile(__dirname + "/failure.html")

        } else {
            if (response.statusCode == 200){
                res.sendFile(__dirname + "/success.html")
            } else {
                res.sendFile(__dirname + "/failure.html")
            }
          
        }
    })
})

app.post("/failure", function(req, res){
    res.redirect("/");
});

app.listen(process.env.PORT || 3000, function(){
    console.log("listening on port 3000");
})
//unique name for lists
//acb2e3618e

//api key
//ad4c49d6c4a37096c803e4d5a0991abd-us4