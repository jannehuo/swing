import * as React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
// import Start from "./components/Start";
import Nav from "./components/Nav";
import Home from "./views/Home";
import Edit from "./views/Edit";
import New from "./views/New";
import "./App.scss";

const App: React.SFC<{}> = () => {
  return (
    <>
      <Router>
        <Nav />
        <main>
          <Route path="/" exact component={Home} />
          <Route path="/new" exact component={New} />
          <Route path="/edit" exact component={Edit} />
        </main>
      </Router>
    </>
  );
};

export default App;
