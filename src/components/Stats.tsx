import * as React from "react";
import AppContext from "../context";

function CircleChart(props: { value: number }) {
  const { value } = props;
  return (
    <svg
      className="circle-chart"
      viewBox="0 0 40 40"
      width="200"
      height="200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle className="circle-chart-background" cx="50%" cy="50%" r="16" />
      <circle
        className="circle-chart-circle"
        strokeDasharray={`${value},100`}
        cx="50%"
        cy="50%"
        r="16"
      />
    </svg>
  );
}

const Stats: React.SFC<{}> = () => {
  const data = React.useContext(AppContext);
  const { program } = data;
  const circleValue = program ? (program.done / program.total) * 100 : 0;
  const { localizations } = data;
  const content: any = localizations;
  return (
    <>
      {program && (
        <div className="stats-graph-container">
          <CircleChart value={circleValue} />
          <ul className="stats">
            <li>
              <div className="stats-header">{content.stats.total}</div>
              <div className="stats-value">{program.total}</div>
            </li>
            <li>
              <div className="stats-header">{content.stats.left}</div>
              <div className="stats-value">{program.left}</div>
            </li>
            <li>
              <div className="stats-header">{content.stats.done}</div>
              <div className="stats-value">{program.done}</div>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Stats;
