import * as React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./views/Home";
import Edit from "./views/Edit";
import New from "./views/New";
import { get, save } from "./utils/storage";
import { Iprogram } from "./interfaces";
import AppContext from "./context";
import "./App.scss";

const App: React.SFC<{}> = () => {
  const [program, setProgram] = React.useState<Iprogram | null>(null);
  React.useEffect(() => {
    setProgram(get("program"));
  }, []);

  const update = (values: Iprogram) => {
    setProgram(values);
    save("program", values);
  };

  return (
    <>
      <Router>
        <AppContext.Provider value={{ program, update }}>
          <Nav />
          <main>
            <Route path="/" exact component={Home} />
            <Route path="/new" exact component={New} />
            <Route path="/edit" exact component={Edit} />
          </main>
        </AppContext.Provider>
      </Router>
    </>
  );
};

export default App;
