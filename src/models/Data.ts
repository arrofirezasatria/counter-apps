import Counter from "../models/Counter";
import CounterProject from "./CounterProject";
import { ICounter, IProjectCounter } from "./types";

export const counterData: Array<ICounter> = [
  new Counter({ index: 0, id: "1", name: "barang1", count: 1 }),
  new Counter({ index: 1, id: "2", name: "barang2", count: 2 }),
  new Counter({ index: 2, id: "3", name: "barang3", count: 3 }),
  new Counter({ index: 3, id: "4", name: "barang4", count: 4 }),
];

export const counterProjectData: IProjectCounter = {
  index: 0,
  id: "1",
  name: "first",
  date: new Date(),
  countList: counterData,
};
