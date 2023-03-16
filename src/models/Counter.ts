import { ICounter, IProjectCounter } from "./types";

export class Counter {
  index: number;
  id: string;
  name: string;
  count: number;

  constructor({ index, id, name, count }: ICounter) {
    this.index = index;
    this.id = id;
    this.name = name;
    this.count = count;
  }
}
