import React from "react";
import { Pressable, Button, ScrollView, StyleSheet, View } from "react-native";
import { Text } from "react-native";
import ButtonGroupList from "../components/pages/home/ButtonGroupList";
import Counter from "../models/Counter";
import { useCounterStore } from "../models/CounterStore";
import { ICounter } from "../models/types";

export default function HomeCounter({ navigation }: any) {
  const { projects } = useCounterStore();

  const pressHandler = (counter: Counter[]) => {
    console.log("pressed");
    navigation.navigate("DetailCounter", counter);
  };

  const addProjectHandler = () => {
    console.log("to The AddCounter");
    navigation.navigate("AddProjectCounter");
  };

  return (
    <View>
      <Text>something</Text>
      <ScrollView>
        {projects.map((item, index) => {
          return (
            <View key={index} style={styles.buttonContainer}>
              <ButtonGroupList onPress={() => pressHandler(item.countList)} />
            </View>
          );
        })}
      </ScrollView>
      <View>
        <Button title="add Project" onPress={addProjectHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: { flex: 1 },
});
