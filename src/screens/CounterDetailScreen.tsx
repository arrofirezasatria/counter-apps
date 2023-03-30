import { View, Text } from "react-native";
import React from "react";
import { RootStackParamList } from "../Apps";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type NavProps = NativeStackScreenProps<RootStackParamList, "CounterScreen">;

export default function CounterDetailScreen({ navigation, route }: NavProps) {
  return (
    <View>
      <Text>CounterDetailScreen</Text>
      <Text>{route.path?.length}</Text>
    </View>
  );
}
