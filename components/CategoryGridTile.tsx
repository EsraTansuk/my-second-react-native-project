import React, { FC } from "react";
import { Pressable, View, Text, Platform } from "react-native";
import { StyleSheet } from "react-native";

export interface CategoryGridTileProps {
  title: string;
  color: string;
}

export const CategoryGridTile: FC<CategoryGridTileProps> = ({
  title,
  color,
}) => {
  return (
    <View style={[styles.gridItem]}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: color, opacity: pressed ? 0.7 : 1 },
        ]}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    // elevation: 4,
    shadowColor: "black",
    backgroundColor: "white",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.26,
    overflow: Platform.OS === "android" ? "hidden" : "visible",

  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  button: {
    flex: 1,
    borderRadius: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

