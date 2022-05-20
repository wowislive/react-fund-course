import React from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <div className="post">
        <div className="post__content">
          <strong>1. Javascript</strong>
          <div>
            JavaScript is a lightweight interpreted programming language.
          </div>
        </div>
        <div className="post__btns">
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default App;
