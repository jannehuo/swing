import React from "react";
import Start from "./components/Start";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <nav>
        <div className="nav-top">
          <h1 className="app-header">swings</h1>
          <ul className="nav-links">
            <li>
              <button className="nav-button">new</button>
            </li>
            <li>
              <button className="nav-button">edit</button>
            </li>
          </ul>
        </div>
        <ul className="stats">
          <li>
            <span className="stats-header">total</span>
            <span className="stats-value">10000</span>
          </li>
          <li>
            <span className="stats-header">left</span>
            <span className="stats-value">9210</span>
          </li>
          <li>
            <span className="stats-header">done</span>
            <span className="stats-value">800</span>
          </li>
        </ul>
      </nav>
      <main></main>
    </React.Fragment>
  );
}

export default App;
