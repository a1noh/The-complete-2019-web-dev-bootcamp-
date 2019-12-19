import React from "react";

function Card (props){
  return <div className="card">
    <div className="top">
      <h2 className = "name">{props.name}</h2>
      <img className = "circle-img"
        src={props.imgsrc}
        alt="avatar_img"
      />
    </div>
    <div className="bottom" >
      <p className = "info">{props.number}</p>
      <p className = "info">{props.email}</p>
    </div>
  </div>;
}
//"https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card name = "진짜됨?" number = "+123 456 789" email = "b@beyonce.com" imgsrc = "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"></Card>
      <Card name = "진짜됨?" number = "+123 456 789" email = "b@beyonce.com" imgsrc = "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"></Card>
      <Card name = "진짜됨?" number = "+123 456 789" email = "b@beyonce.com" imgsrc = "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"></Card>
    </div>
  );
}

export default App;
