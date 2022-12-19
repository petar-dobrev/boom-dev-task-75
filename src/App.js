import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const savedText = localStorage.getItem("text");

  useEffect(() => {
    savedText && setText(savedText);
  }, [savedText]);

  const clearText = () => {
    setText("");
    localStorage.removeItem("text");
  };

  return (
    <div className="App">
      <div className="box">
        <div className="field">
          <div className="control">
            <textarea
              className="textarea is-large"
              placeholder="Notes..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
        </div>
        <button
          className="button is-large is-primary is-active"
          onClick={() => {
            localStorage.setItem("text", text);
          }}
        >
          Save
        </button>
        <button className="button is-large" onClick={clearText}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default App;
