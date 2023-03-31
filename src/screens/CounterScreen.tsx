import {
  View,
  Text,
  FlatList,
  ScrollView,
  StyleSheet,
  Button,
} from "react-native";
import React from "react";
import { RootStackParamList } from "../Apps";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { observer } from "mobx-react";

type NavProps = NativeStackScreenProps<RootStackParamList, "DetailCounter">;

function CounterScreen({ route, navigation }: NavProps) {
  const counterList = route.params;

  function addCountHandler(index: number) {
    counterList[index].addCounter();
  }

  function reduceCountHandler(index: number) {
    counterList[index].reduceCounter();
  }

  return (
    <View>
      <ScrollView>
        {counterList.map((item, index) => {
          return (
            <View style={style.button} key={index}>
              <Button
                title={"left"}
                onPress={() => reduceCountHandler(index)}
              />
              <Text>{item.name}</Text>
              <Text>{item.count}</Text>
              <Button title={"left"} onPress={() => addCountHandler(index)} />
            </View>
          );
        })}
      </ScrollView>
      <Text>{route.params.length}</Text>
      <Text>adas</Text>
    </View>
  );
}

const style = StyleSheet.create({
  button: {},
});

export default observer(CounterScreen);
