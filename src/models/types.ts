import Counter from "./Counter";

export interface ICounter {
  index: number;
  id: string;
  name: string;
  count: number;
}

export interface IProjectCounter {
  index: number;
  id: string;
  name: string;
  date: Date;
  countList: Counter[];
}
