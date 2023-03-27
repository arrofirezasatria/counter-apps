import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Text } from "react-native";
import ButtonGroupList from "../components/pages/home/ButtonGroupList";
import { counterProjectData } from "../models/Data";

export default function HomeCounter({ navigation }: any) {
  const pressHandler = () => {
    console.log("pressed");
    navigation.navigate("DetailCounter");
  };

  return (
    <View>
      <Text>something</Text>
      <ScrollView>
        {counterProjectData.map((item, index) => {
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
