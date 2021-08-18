import React, { useState } from "react";
import "./styles.css";

const flagDictionary = {
  "💣": "bomb",
  "🛀": "person taking bath",
  "🧳": "luggage",
  "⌛": "hourglass",
  "🌡️": "thermometer",
  "🧨": "firecracker",
  "🎊": "confetti bell",
  "🤿": "diving mask",
  "🪀": "yo-yo",
  "🧵": "thread",
  "🪕": "banjo"
};

//converting dictionary to list, later rendered on the view
const flagsWeHave = Object.keys(flagDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  //handles keyboard input
  function flagInputHandler(event) {
    let userInput = event.target.value;

    let meaning = flagDictionary[userInput];

    //out of database input
    if (meaning === undefined) {
      meaning = "sorry, we don't have this in our database now.";
    }
    setMeaning(meaning);
  }

  //handles click input
  function flagClickHandler(flag) {
    let meaning = flagDictionary[flag];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1> emoji of things </h1>

      <input onChange={flagInputHandler} />

      <h2> {meaning} </h2>

      <p> things we know 👇 </p>
      {flagsWeHave.map(function (flag) {
        return (
          <span
            onClick={() => flagClickHandler(flag)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={flag}
          >
            {flag}
          </span>
        );
      })}
    </div>
  );
}
