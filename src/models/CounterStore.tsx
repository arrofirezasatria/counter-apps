import { makeAutoObservable } from "mobx";
import React, { useContext, useRef } from "react";
import CounterProject from "./CounterProject";
import { IProjectCounter } from "./types";

export default class CounterStore {
  constructor(projects: IProjectCounter[]) {
    makeAutoObservable(this);
    this.projects = projects;
  }

  projects: IProjectCounter[] = [];
  setProject(projects: IProjectCounter[]) {
    this.projects = projects;
  }

  addProject(project: IProjectCounter) {
    this.projects.push(project);
  }
}

type Props = {
  children: React.ReactNode;
  project: IProjectCounter[];
};

const CounterStoreContext = React.createContext<CounterStore>(
  null as unknown as CounterStore
);

export const useCounterStore = () => useContext(CounterStoreContext);

export function CounterStoreProvider({ children, project }: Props) {
  const store = useRef(new CounterStore(project));

  return (
    <CounterStoreContext.Provider value={store.current}>
      {children}
    </CounterStoreContext.Provider>
  );
}
