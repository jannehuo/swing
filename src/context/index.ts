import * as React from "react";
import { Iprogram } from "../interfaces";

interface IAppContext {
  program: Iprogram;
  update: Function;
}

const AppContext = React.createContext<IAppContext>({
  program: null,
  update: () => {},
});

export default AppContext;
