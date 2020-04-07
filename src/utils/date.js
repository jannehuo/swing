import add from "date-fns/add";
import eachDayOfInterval from "date-fns/eachDayOfInterval";
import format from "date-fns/format";

export function getDays() {
  const start = new Date();
  const end = add(start, {
    months: 1
  });
  const days = eachDayOfInterval({
    start,
    end
  });
  const dayslist = days.map((d, i) => ({
    date: format(d, "dd.MM.yyyy"),
    reps: ""
  }));
  return dayslist;
}
