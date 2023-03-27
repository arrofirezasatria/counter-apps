import { makeAutoObservable } from "mobx";
import React, { useContext, useRef } from "react";
import CounterProject from "./CounterProject";
import { IProjectCounter } from "./types";

export default class CounterStore {
  projects: CounterProject;

  constructor(project: CounterProject) {
    makeAutoObservable(this);
    this.projects = project;
  }
}

type Props = {
  children: React.ReactNode;
  project: CounterProject;
};

const TeamStoreContext = React.createContext<CounterStore>(
  null as unknown as CounterStore
);

export function CounterStoreProvider({ children, project }: Props) {
  const store = useRef(new CounterStore(project));

  <TeamStoreContext.Provider value={store.current}>
    {children}
  </TeamStoreContext.Provider>;
}
