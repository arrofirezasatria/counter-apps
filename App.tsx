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
  const [iterator, setIterator] = useState<number>(0);

  const textInputHandler = (currentText: string) => {
    setEnteredCounterText(currentText);
  };

  const addCounterListHandler = () => {
    setIterator((prev) => prev + 1);
    setCounterList((prev) => [
      ...prev,
      {
        id: iterator,
        text: enteredCounterText + counterList.length++,
        count: 12,
      },
    ]);
  };

  const addCountHandler = (index: number) => {
    setCounterList((prev) => [
      ...prev,
      { ...prev[index], count: prev[index].count++ },
    ]);
  };
  const reduceCountHandler = (index: number) => {
    setCounterList((prev) => [
      ...prev,
      { ...prev[index], count: prev[index].count-- },
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
        <Button title="Add Counter" onPress={addCounterListHandler} />
      </View>
      <View style={styles.containerCounterList}>
        <FlatList
          data={counterList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <View style={styles.itemList}>
                <Button title="+" onPress={() => addCountHandler(item.id)} />
                <View style={styles.itemTextList}>
                  <Text>{item.text}</Text>
                  <Text>{item.count}</Text>
                  <Text>{item.id}</Text>
                </View>
                <Button title="-" />
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
    flex: 1,
    flexDirection: "column",
    height: 210,
    width: "100%",
    backgroundColor: "gray",
  },
  containerCounterList: {
    flex: 1,
    width: "100%",
    backgroundColor: "red",
  },
  inputTextCounter: {
    marginTop: 100,
    paddingTop: 20,
    backgroundColor: "green",
  },
  itemList: {
    flex: 1,
    flexDirection: "row",
  },
  itemTextList: {
    flex: 1,
    flexDirection: "column",
  },
});
