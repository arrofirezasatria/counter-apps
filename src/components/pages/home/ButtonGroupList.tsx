import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ButtonGroupList() {
  return (
    <View style={styles.buttonGroup}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>List barang bekas</Text>
        <Text style={styles.date}>23 Februari 2023</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonGroup: {
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
