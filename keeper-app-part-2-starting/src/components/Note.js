import React from "react";
import notes from "../notes";

console.log(notes);



function Note() {
  return ( notes.map(notes => (
    <div className="note" key = {notes.key}>
    <h1>{notes.title}</h1>
    <p>{notes.content}</p>
  </div>
  ))
  );
}

export default Note;
