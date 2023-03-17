import { ICounter, IProjectCounter } from "./types";

export default class CounterProject {
  index: number;
  id: string;
  name: string;
  date: Date;
  countList: ICounter[];

  constructor({ index, id, name, date, countList }: IProjectCounter) {
    this.index = index;
    this.id = id;
    this.name = name;
    this.date = date;
    this.countList = countList;
  }

  public get length() {
    return this.countList.length;
  }
}
