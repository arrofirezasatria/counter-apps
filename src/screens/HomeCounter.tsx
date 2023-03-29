import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Text } from "react-native";
import ButtonGroupList from "../components/pages/home/ButtonGroupList";
import { useCounterStore } from "../models/CounterStore";
import { counterProjectData } from "../models/Data";
import { ICounter } from "../models/types";

export default function HomeCounter({ navigation }: any) {
  const { projects } = useCounterStore();

  const pressHandler = () => {
    console.log("pressed");
    navigation.navigate("DetailCounter", [
      {
        index: 1,
        id: "asd",
        name: "asdsa",
        count: 2,
      },
      {
        index: 2,
        id: "asd",
        name: "asdsa",
        count: 3,
      },
    ]);
  };

  return (
    <View>
      <Text>something</Text>
      <ScrollView>
        {projects.map((item, index) => {
          return (
            <View key={index} style={styles.buttonContainer}>
              <ButtonGroupList onPress={pressHandler} />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: { flex: 1 },
});
