import Counter from "../models/Counter";
import CounterProject from "./CounterProject";
import { ICounter, IProjectCounter } from "./types";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

export const counterData1: Array<Counter> = [
  new Counter({ index: 0, id: "1", name: "barang1", count: 1 }),
  new Counter({ index: 1, id: "2", name: "barang2", count: 2 }),
  new Counter({ index: 2, id: "3", name: "barang3", count: 3 }),
  new Counter({ index: 3, id: "4", name: "barang4", count: 4 }),
];

export const counterData2: Array<Counter> = [
  new Counter({ index: 0, id: "1", name: "barang1", count: 1 }),
  new Counter({ index: 1, id: "2", name: "barang2", count: 2 }),
  new Counter({ index: 2, id: "3", name: "barang3", count: 3 }),
  new Counter({ index: 3, id: "4", name: "barang4", count: 4 }),
];

export const projectData: Array<IProjectCounter> = [
  new CounterProject({
    index: 1,
    id: uuidv4(),
    name: "project1",
    date: new Date(),
    countList: counterData1,
  }),
  new CounterProject({
    index: 1,
    id: uuidv4(),
    name: "project1",
    date: new Date(),
    countList: counterData1,
  }),
];
