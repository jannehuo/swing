export interface Iprogram {
  total: number;
  left: number;
  done: number;
  days: Array<{ date: string; reps: number }>;
}

export interface ILocale {
  [key: string]: {
    [key: string]: any;
  };
}
