import * as React from "react";
import Instructions from "../components/Instructions";
import Program from "../components/Program";
import AppContext from "../context";

const Home: React.SFC<{}> = () => {
  const data = React.useContext(AppContext);
  const { program } = data;
  return (
    <>
      {!program && <Instructions />}
      {program && <Program />}
    </>
  );
};

export default Home;
