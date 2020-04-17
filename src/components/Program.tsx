import * as React from "react";
import AppContext from "../context";

const Program: React.SFC<{}> = () => {
  const data = React.useContext(AppContext);
  const { program } = data;
  return <div></div>;
};

export default Program;
