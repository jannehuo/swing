import * as React from "react";
import { Iprogram } from "../interfaces";

interface IAppContext {
  program: Iprogram;
  update: Function;
  localizations: Object;
  changeLang: Function;
}

const AppContext = React.createContext<IAppContext>({
  program: null,
  update: () => {},
  localizations: {},
  changeLang: () => {},
});

export default AppContext;
