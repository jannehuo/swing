import * as React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./views/Home";
import Edit from "./views/Edit";
import New from "./views/New";
import { get, save } from "./utils/storage";
import { isEmptyObject } from "./utils/";
import { Iprogram } from "./interfaces";
import AppContext from "./context";
import { DEFAULT_LOCALE } from "./constants";
import { getLocales, switchLocale } from "./localizations";
import "./App.scss";

const App: React.SFC<{}> = () => {
  const [program, setProgram] = React.useState<Iprogram | null>(null);
  const [localizations, setLocalizations] = React.useState<Object>({});
  React.useEffect(() => {
    setProgram(get("program"));
    const storedLocale = localStorage.getItem("locale");
    const locale = storedLocale || DEFAULT_LOCALE;
    setLocalizations(getLocales(locale));
  }, []);

  const update = (values: Iprogram) => {
    setProgram(values);
    save("program", values);
  };

  const changeLang = (locale: string) => {
    const newLocale = switchLocale(locale);
    setLocalizations(newLocale);
  };
  if (isEmptyObject(localizations) || !program) {
    return null;
  }

  return (
    <>
      <Router>
        <AppContext.Provider
          value={{ program, update, localizations, changeLang }}
        >
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
