import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Pressable,
  Button,
} from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Apps";
import { useForm, useController, UseControllerProps } from "react-hook-form";

type NavProps = NativeStackScreenProps<RootStackParamList, "AddProjectCounter">;

const Input = ({ name, control }: any) => {
  const { field } = useController<UseControllerProps>({
    control,
    defaultValue: "",
    name,
  });

  return (
    <TextInput
      value={field.value}
      onChangeText={field.onChange}
      style={styles.input}
    />
  );
};

export default function AddProjectCounter() {
  const { control, handleSubmit } = useForm();
  const handleAddProject = () => {
    console.log("add project");
  };

  return (
    <View>
      <Text>AddProjectCounter</Text>
      <Input name="firstInput" style={styles.input} />
      <Input name="secondInput" style={styles.input} />
      <Button title="add Project" onPress={handleSubmit(handleAddProject)} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
