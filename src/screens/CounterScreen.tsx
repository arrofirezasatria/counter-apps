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

type NavProps = NativeStackScreenProps<RootStackParamList, "DetailCounter">;

export default function CounterScreen({ route, navigation }: NavProps) {
  const counterList = route.params;

  return (
    <View>
      <ScrollView>
        {counterList.map((item, index) => {
          return (
            <View>
              <Button title={"left"} />
              <Text>{item.name}</Text>
              <Text>{item.count}</Text>
              <Button title={"left"} />
            </View>
          );
        })}
      </ScrollView>
      <Text>{route.params.length}</Text>
      <Text>adas</Text>
    </View>
  );
}

const style = StyleSheet.create({});
