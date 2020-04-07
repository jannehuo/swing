import React, { useState } from "react";
import { getDays } from "../utils/date";
import { save } from "../utils/storage";

function Start() {
  const [total, setTotal] = useState("");

  const createProgram = e => {
    e.preventDefault();
    const days = getDays();
    const repsPerDay = Math.round(total / days.length);
    const repsTotal = days.length * repsPerDay;
    const difference = repsTotal - total;
    const lastIndex = days.length - 1;
    const daysWithReps = days.map((day, i) => {
      if (i === lastIndex) {
        day.reps = repsPerDay - difference;
      } else {
        day.reps = repsPerDay;
      }
      return day;
    });
    const programData = {
      total,
      left: 0,
      days: daysWithReps
    };
    save("program", programData);
  };

  return (
    <React.Fragment>
      <input
        type="number"
        value={total}
        onChange={e => setTotal(parseInt(e.target.value, 10))}
      />
      <button onClick={createProgram}>Start</button>
    </React.Fragment>
  );
}

export default Start;
