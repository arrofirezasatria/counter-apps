import { makeObservable } from "mobx";
import Counter from "./Counter";
import { ICounter, IProjectCounter } from "./types";

export default class CounterProject {
  index: number;
  id: string;
  name: string;
  date: Date;
  countList: Counter[];

  constructor({ index, id, name, date, countList }: IProjectCounter) {
    this.index = index;
    this.id = id;
    this.name = name;
    this.date = date;
    this.countList = countList;

    makeObservable(this, {
      index: true,
      id: true,
      name: true,
      date: true,
      countList: true,
    });
  }
}
