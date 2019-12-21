import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return <div>
  <h2>{props.name}</h2>
  <img
    src = {props.img}
    alt="avatar_img"
  />
  <p>{props.number}</p>
  <p>{props.email}</p> 
  </div>
}

ReactDOM.render(
  <div>
  <h1>My Contacts</h1>
  <Card 
    name = "Love" 
    img = "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
    number = "+123 456 789"
    email = "b@beyonce.com"
  ></Card>
  <input id = "fName" placeholder="Enter your first name" value = "Austin Noh" />
  <Card 
  name = "Noh" 
  img = "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" 
  number = "123"
  email = "ok@ok.com"
  ></Card>
  </div>

 ,
  document.getElementById("root")
);
