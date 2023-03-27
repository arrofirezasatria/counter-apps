import { action } from "mobx";
import { makeObservable } from "mobx";
import { ICounter } from "./types";

export default class Counter {
  index: number;
  id: string;
  name: string;
  count: number;

  constructor({ index, id, name, count }: ICounter) {
    this.index = index;
    this.id = id;
    this.name = name;
    this.count = count;

    makeObservable(this, {
      index: true,
      id: true,
      name: true,
      count: true,
      addCounter: action,
      reduceCounter: action,
    });
  }

  addCounter() {
    this.count++;
  }

  reduceCounter() {
    this.count--;
  }
}
