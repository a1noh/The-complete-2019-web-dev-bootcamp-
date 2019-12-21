import React from "react";
import Term from "./Term";
import emojipedia from "./emojipedia";
console.log(emojipedia);

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(term => {
          return (
            <div className="term" key={term.id}>
              <Term
                emoji={term.emoji}
                name={term.name}
                detail={term.meaning}
              ></Term>
            </div>

          );
        })}
      </dl>
    </div>
  );
}

export default App;
