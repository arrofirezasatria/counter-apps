import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Text } from "react-native";
import ButtonGroupList from "../components/pages/home/ButtonGroupList";
import { useCounterStore } from "../models/CounterStore";
import { ICounter } from "../models/types";

export default function HomeCounter({ navigation }: any) {
  const { projects } = useCounterStore();

  const pressHandler = (counter: ICounter[]) => {
    console.log("pressed");
    navigation.navigate("DetailCounter", counter);
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
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: { flex: 1 },
});
