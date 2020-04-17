import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import {
  getDays,
  checkDate,
  checkIfEndIsAfterStart,
  checkStartDate,
} from "../utils/date";
import { focusOnFirstError, shakeErrorElements } from "../utils/interaction";
import { Iprogram } from "../interfaces";
import AppContext from "../context";

interface Ivalid {
  total: boolean;
  start: boolean;
  end: boolean;
  endIsAfterStart: boolean;
  startIsNotInPast: boolean;
}

function checkValues(total: string, start: string, end: string) {
  const validStart = checkDate(new Date(start));
  const validEnd = checkDate(new Date(end));
  const endIsAfterStart = checkIfEndIsAfterStart(
    new Date(start),
    new Date(end)
  );
  const startIsNotInPast = checkStartDate(new Date(start));
  const totalNotZero = total !== "0" && total.length > 0;
  return {
    start: validStart,
    end: validEnd,
    total: totalNotZero,
    endIsAfterStart,
    startIsNotInPast,
  };
}

function dataHasErrors(valueErrors: object) {
  return Object.values(valueErrors).includes(false);
}

const Start: React.SFC<RouteComponentProps> = (props) => {
  const [total, setTotal] = React.useState<string>("");
  const [start, setStart] = React.useState<string>("");
  const [end, setEnd] = React.useState<string>("");
  const [success, setSuccess] = React.useState<boolean>(false);
  const [isValid, setIsValid] = React.useState<Ivalid>({
    total: true,
    start: true,
    end: true,
    endIsAfterStart: true,
    startIsNotInPast: true,
  });
  const data = React.useContext(AppContext);
  React.useEffect(() => {
    const hasErrors = dataHasErrors(isValid);
    if (hasErrors) {
      focusOnFirstError();
      shakeErrorElements();
    }
  }, [isValid]);

  const createProgram = () => {
    const days = getDays(new Date(start), new Date(end));
    const totalNum = parseInt(total, 10);
    const repsPerDay = Math.round(totalNum / days.length);
    const repsTotal = days.length * repsPerDay;
    const difference = repsTotal - totalNum;
    const lastIndex = days.length - 1;
    const daysWithReps = days.map((day, i) => {
      if (i === lastIndex) {
        day.reps = repsPerDay - difference;
      } else {
        day.reps = repsPerDay;
      }
      return day;
    });
    const programData: Iprogram = {
      total: totalNum,
      left: 0,
      done: 0,
      days: daysWithReps,
    };
    data.update(programData);
    setSuccess(true);
    setTimeout(() => {
      props.history.push("/");
    }, 3000);
  };

  const checkInputs = (e: any) => {
    e.preventDefault();
    const valueErrors = checkValues(total, start, end);
    const hasErrors = dataHasErrors(valueErrors);
    if (hasErrors) {
      setIsValid(valueErrors);
    } else {
      createProgram();
    }
  };

  return (
    <>
      <div className="start-form">
        <div className="form-help">
          <ol>
            <li className={`${start.length > 0 ? "set" : ""}`}>
              Set start date for your challenge
            </li>
            <li className={`${end.length > 0 ? "set" : ""}`}>
              Set end date for your challenge
            </li>
            <li className={`${total.length > 0 ? "set" : ""}`}>
              Set goal for your challenge
            </li>
            <li className={`${success ? "set" : ""}`}>Create</li>
          </ol>
        </div>
        <h1>Create a new challenge</h1>
        {!success && (
          <form onSubmit={checkInputs}>
            <div
              className={`${
                isValid.start && isValid.startIsNotInPast
                  ? "input-row "
                  : "input-row input-row--has-error"
              }`}
            >
              <div className="input-container">
                <label htmlFor="start">
                  start <i className="fas fa-calendar-day"></i>
                </label>
                <input
                  id="start"
                  type="date"
                  value={start}
                  onChange={(e: any) => setStart(e.target.value)}
                  aria-labelledby="start-error"
                  aria-invalid={!isValid.start || !isValid.startIsNotInPast}
                />
              </div>
              <div className="error-container">
                {!isValid.start && (
                  <div id="start-error" className="input-error">
                    Start date has to be set
                  </div>
                )}
                {!isValid.startIsNotInPast && (
                  <div className="input-error">
                    Start date has to be today or in the future
                  </div>
                )}
              </div>
            </div>
            <div
              className={`${
                isValid.end ? "input-row " : "input-row input-row--has-error"
              }`}
            >
              <div className="input-container">
                <label htmlFor="end">
                  end <i className="fas fa-calendar-day"></i>
                </label>
                <input
                  id="end"
                  type="date"
                  value={end}
                  onChange={(e: any) => setEnd(e.target.value)}
                  aria-labelledby="end-error"
                  aria-invalid={!isValid.end || !isValid.endIsAfterStart}
                />
              </div>
              <div className="error-container">
                {!isValid.end && (
                  <div id="end-error" className="input-error">
                    End date has to be set
                  </div>
                )}
                {!isValid.endIsAfterStart && (
                  <div className="input-error">
                    End date has to be after start date
                  </div>
                )}
              </div>
            </div>
            <div
              className={`${
                isValid.total ? "input-row " : "input-row input-row--has-error"
              }`}
            >
              <div className="input-container">
                <label htmlFor="goal">
                  Goal <i className="fas fa-trophy"></i>
                </label>
                <input
                  id="goal"
                  type="number"
                  value={total}
                  onChange={(e: any) => setTotal(e.target.value)}
                  aria-labelledby="total-error"
                  aria-invalid={!isValid.total}
                />
              </div>
              <div className="error-container">
                {!isValid.total && (
                  <div id="total-error" className="input-error">
                    Goal has to be set
                  </div>
                )}
              </div>
            </div>
            <button className="btn btn--block" type="submit">
              create
            </button>
          </form>
        )}
        {success && (
          <div className="form-success">
            <h2>Success!</h2>
            <i className="fas fa-thumbs-up"></i>
            <p>Challenge saved</p>
          </div>
        )}
      </div>
    </>
  );
};

export default withRouter(Start);
