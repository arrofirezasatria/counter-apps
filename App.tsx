import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const DATA = [
  { id: 1, data: 1 },
  { id: 2, data: 2 },
  { id: 3, data: 3 },
];

interface ICounter {
  id: number;
  text: string;
  count: number;
}

interface ICounterList extends Array<ICounter> {}

export default function App() {
  const [enteredCounterText, setEnteredCounterText] = useState<string>("");
  const [counterList, setCounterList] = useState<ICounterList>([]);

  const textInputHandler = (currentText: string) => {
    setEnteredCounterText(currentText);
  };

  const addCounterListHandler = () => {
    setCounterList((prev) => [
      ...prev,
      {
        id: 1,
        text: enteredCounterText,
        count: 12,
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.containerAddCounter}>
        <TextInput
          style={styles.inputTextCounter}
          onChangeText={textInputHandler}
        />
        <Button title="asdasd" onPress={addCounterListHandler} />
      </View>
      <View style={styles.containerCounterList}>
        <FlatList
          data={counterList}
          renderItem={({ item }) => {
            return (
              <View>
                <Text>ad</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  containerAddCounter: {
    height: 210,
    width: "100%",
    backgroundColor: "gray",
  },
  containerCounterList: {
    flex: 1,
    width: "100%",
    backgroundColor: "red",
  },
  inputTextCounter: {},
});
