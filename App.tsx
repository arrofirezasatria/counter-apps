import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { CounterStoreProvider } from "./src/models/CounterStore";
import { projectData } from "./src/models/Data";

import Apps from "./src/Apps";
import { IProjectCounter } from "./src/models/types";

function getProjectsFromBackend(): IProjectCounter[] {
  return projectData;
}

export default function App() {
  const projects = getProjectsFromBackend();

  return (
    <CounterStoreProvider project={projects}>
      <Apps />
    </CounterStoreProvider>
  );
}

const styles = StyleSheet.create({
  appsContainer: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
});
