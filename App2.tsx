import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  Pressable,
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
        text: enteredCounterText,
        count: 12,
      },
    ]);
  };

  const resetCounterListHandler = () => {
    setCounterList([]);
    setIterator(0);
  };

  const deleteCounterHandler = (id: number) => {
    console.log("delete");
    setCounterList((prev) => prev.filter((item) => item.id !== id));
  };

  const addCountHandler = (index: number) => {
    var temp = counterList;
    temp[index].count = temp[index].count + 1;
    setCounterList((prev) => [...temp]);
  };

  const reduceCountHandler = (index: number) => {
    var temp = counterList;
    var tempcount = temp[index].count - 1;
    if (tempcount > 0) {
      temp[index].count = tempcount;
    } else {
      temp[index].count = 0;
    }

    setCounterList((prev) => [...temp]);
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
        <Button title="Reset" onPress={resetCounterListHandler} />
      </View>
      <View style={styles.containerCounterList}>
        <FlatList
          data={counterList}
          keyExtractor={(item) => item.id.toString()}
          extraData={counterList}
          renderItem={({ item }) => {
            return (
              <View style={styles.itemList}>
                <Button title="+" onPress={() => addCountHandler(item.id)} />
                <Pressable
                  style={styles.itemCounter}
                  onPress={() => deleteCounterHandler(item.id)}
                >
                  <View style={styles.itemTextList}>
                    <Text>{item.text}</Text>
                    <Text>{item.count}</Text>
                    <Text>{item.id}</Text>
                  </View>
                </Pressable>
                <Button title="-" onPress={() => reduceCountHandler(item.id)} />
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
    backgroundColor: "#ffffff",
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
  itemCounter: {
    width: "auto",
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
