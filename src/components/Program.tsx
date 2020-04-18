import * as React from "react";
import AppContext from "../context";
import { formatDateString, checkIfDateIsToday } from "../utils/date";
import { Iprogram, IDay } from "../interfaces";

function getCardClass(isToday: boolean, isMissed: boolean, isDone: boolean) {
  if (isToday) {
    return "current";
  }
  if (isMissed) {
    return "missed";
  }
  if (isDone) {
    return "done";
  }
  return "";
}

const Program: React.SFC<{}> = () => {
  const data = React.useContext(AppContext);
  const localizations: any = data.localizations;
  const program: Iprogram = data.program;
  return (
    <div className="program-days-container">
      <h1>{localizations.program.header}</h1>
      {program.days.map((data, i) => {
        const isToday = checkIfDateIsToday(data.date);
        const statusClass = getCardClass(isToday, false, false);
        return (
          <div className={`program-day-card ${statusClass}`} key={i}>
            <div className="program-day-card-content">
              <div className="program-day-card-date">
                <p>{formatDateString(data.date)}</p>
              </div>
            </div>
            <div className="program-day-card-side">
              <div className="program-day-card-daily-graph">
                <div className="daily-graph-container">
                  <div className="daily-graph-bar"></div>
                </div>
              </div>
              <div className="program-day-card-side-reps">
                <p>{localizations.program.reps}</p>
                <p>
                  {data.dailyGoal}/{data.reps}
                </p>
              </div>
              <div className="program-day-card-side-button">
                <button className="program-day-card-button">
                  <div>{localizations.program.markAsDone}</div>
                  <div>
                    <i className="fas fa-check"></i>
                  </div>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Program;
