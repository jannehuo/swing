import * as React from "react";

const Stats: React.SFC<{}> = () => {
  return (
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
  );
};

export default Stats;
