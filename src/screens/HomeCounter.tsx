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
];

export default function HomeCounter() {
  return (
    <View>
      <Text>something</Text>
      <ScrollView>
        {DATA.map((item, index) => {
          return (
            <View key={index} style={styles.buttonContainer}>
              <ButtonGroupList />
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
