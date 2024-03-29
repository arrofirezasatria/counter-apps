import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import HomeCounter from "./screens/HomeCounter";
import CounterDetailScreen from "./screens/CounterDetailScreen";
import CounterScreen from "./screens/CounterScreen";
import { ICounter } from "./models/types";
import Counter from "./models/Counter";
import AddProjectCounter from "./screens/AddProjectCounter";

export type RootStackParamList = {
  Home: undefined;
  CounterScreen: undefined;
  DetailCounter: Counter[];
  AddProjectCounter: undefined;
};

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name={"Home"} component={HomeCounter} />
          <Stack.Screen
            name={"CounterScreen"}
            component={CounterDetailScreen}
          />
          <Stack.Screen name={"DetailCounter"} component={CounterScreen} />
          <Stack.Screen
            name={"AddProjectCounter"}
            component={AddProjectCounter}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
