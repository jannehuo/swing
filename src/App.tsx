import * as React from "react";
// import Start from "./components/Start";
import "./App.css";

const App: React.SFC<{}> = () => {
  const [navOpen, toggleNav] = React.useState<boolean>(false);

  const toggle = (e: any) => {
    e.preventDefault();
    toggleNav(!navOpen);
  };
  const navClass = navOpen ? "open" : "";
  return (
    <React.Fragment>
      <nav className={navClass}>
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
      <main>
        <button onClick={toggle} className="btn btn--menu">
          {navOpen ? "close" : "menu"}
        </button>
      </main>
    </React.Fragment>
  );
};

export default App;
