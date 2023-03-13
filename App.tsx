import { SafeAreaView } from "react-native";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import HomeCounter from "./src/screens/HomeCounter";

export default function App() {
  return (
    <SafeAreaView style={styles.appsContainer}>
      <HomeCounter />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appsContainer: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
});
