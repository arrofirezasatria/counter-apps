import { SafeAreaView } from "react-native";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import HomeCounter from "./src/screens/HomeCounter";
import CounterDetailScreen from "./src/screens/CounterDetailScreen";
import CounterScreen from "./src/screens/CounterScreen";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={"Home"} component={HomeCounter} />
          <Stack.Screen
            name={"CounterScreen"}
            component={CounterDetailScreen}
          />
          <Stack.Screen name={"DetailCounter"} component={CounterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  appsContainer: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
});
