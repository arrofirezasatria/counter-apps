import { View, Text } from "react-native";
import React from "react";
import { RootStackParamList } from "../Apps";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type NavProps = NativeStackScreenProps<RootStackParamList, "DetailCounter">;

export default function CounterScreen({ route, navigation }: NavProps) {
  return (
    <View>
      <Text>{route.params.name}</Text>
      <Text>adas</Text>
    </View>
  );
}
