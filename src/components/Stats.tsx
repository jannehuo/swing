import * as React from "react";
import AppContext from "../context";

const Stats: React.SFC<{}> = () => {
  const data = React.useContext(AppContext);
  const { program } = data;
  return (
    <>
      {program && (
        <ul className="stats">
          <li>
            <span className="stats-header">total</span>
            <span className="stats-value">{program.total}</span>
          </li>
          <li>
            <span className="stats-header">left</span>
            <span className="stats-value">{program.left}</span>
          </li>
          <li>
            <span className="stats-header">done</span>
            <span className="stats-value">{program.done}</span>
          </li>
        </ul>
      )}
    </>
  );
};

export default Stats;
