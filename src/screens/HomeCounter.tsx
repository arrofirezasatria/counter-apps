import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Text } from "react-native";
import ButtonGroupList from "../components/pages/home/ButtonGroupList";

const DATA = [
  {
    name: "first counter",
  },
  {
    name: "second counter",
  },
  {
    name: "third counter",
  },
  {
    name: "four counter",
  },
  {
    name: "five counter",
  },
  {
    name: "six counter",
  },
  {
    name: "seven counter",
  },
  {
    name: "eight counter",
  },
  {
    name: "nine counter",
  },
  {
    name: "ten counter",
  },
  {
    name: "eleven counter",
  },
  {
    name: "tweleve counter",
  },
  {
    name: "thirdten counter",
  },
  {
    name: "fourten counter",
  },
];

export default function HomeCounter({ navigation }: any) {
  const pressHandler = () => {
    console.log("pressed");
    navigation.navigate("DetailCounter");
  };

  return (
    <View>
      <Text>something</Text>
      <ScrollView>
        {DATA.map((item, index) => {
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
