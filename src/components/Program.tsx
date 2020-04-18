import * as React from "react";
import AppContext from "../context";
import { formatDateString, checkIfDateIsToday } from "../utils/date";

const Program: React.SFC<{}> = () => {
  const data = React.useContext(AppContext);
  const { program } = data;
  const localizations: any = data.localizations;
  const programData = {
    ...program,
    days: program.days.map((day) => ({
      ...day,
      current: checkIfDateIsToday(day.date),
    })),
  };
  return (
    <div className="program-days-container">
      {programData.days.map((data, i) => (
        <div className="program-day-card" key={i}>
          <div className="program-day-card-content">
            <div>
              <p className="text-bold">{localizations.program.reps}</p>
              <p>{data.reps}</p>
            </div>
          </div>
          <div className="program-day-card-bottom">
            <div>
              <p className="text-bold">{localizations.program.date}</p>
              <p>{formatDateString(data.date)}</p>
            </div>
            <div>
              <button className="program-day-card-button">
                <i className="fas fa-check"></i>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Program;
