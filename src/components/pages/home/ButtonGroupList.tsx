import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function ButtonGroupList({ onPress, editHandler }: any) {
  return (
    <Pressable style={styles.buttonGroup} onPress={onPress}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>List barang bekas</Text>
        <Text style={styles.date}>23 Februari 2023</Text>
      </View>
      <Pressable onPress={editHandler}>
        <View>
          <Text>Edit</Text>
        </View>
      </Pressable>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonGroup: {
    // flex: 1,
    flexDirection: "row",
    width: "auto",
    height: 60,
    backgroundColor: "gray",
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  textContainer: {},
  title: {},
  date: {},
});
