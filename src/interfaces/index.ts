export interface IDay {
  date: string;
  reps: number;
  dailyGoal: number;
}

export interface Iprogram {
  total: number;
  left: number;
  done: number;
  days: Array<IDay>;
}
