import React from "react";
import { MEALS } from "@/data/dummy-data";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

export const MealsOverviewScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
});
