import isAfter from "date-fns/isAfter";
import isValid from "date-fns/isValid";
import isSameDay from "date-fns/isSameDay";
import parse from "date-fns/parse";
import eachDayOfInterval from "date-fns/eachDayOfInterval";
import format from "date-fns/format";

export function getDays(start: Date, end: Date) {
  const days = eachDayOfInterval({
    start,
    end,
  });
  const dayslist = days.map((d) => ({
    date: format(d, "dd-MM-yyyy"),
    reps: 0,
    dailyGoal: 0,
  }));
  return dayslist;
}

export function checkDate(date: Date) {
  return isValid(date);
}

export function checkIfEndIsAfterStart(start: Date, end: Date) {
  return isAfter(end, start);
}

export function checkStartDate(start: Date) {
  const today = new Date();
  return isSameDay(today, start) || isAfter(start, today);
}

export function formatDateString(dateStr: string) {
  const formattedDate = dateStr.split("-");
  return `${formattedDate[0]}.${formattedDate[1]}`;
}

export function checkIfDateIsToday(dateStr: string) {
  const day = parse(dateStr, "dd-MM-yyyy", new Date());
  const today = new Date();
  return isSameDay(day, today);
}
