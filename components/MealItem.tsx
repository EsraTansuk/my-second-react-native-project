import React, { FC } from "react";
import { View, Text, Pressable, Image } from "react-native";
import { StyleSheet } from "react-native";

export interface MealItemProps {
  title: string;
  imageUrl: string;
}

export const MealItem: FC<MealItemProps> = ({ title, imageUrl }) => {
  return (
    <View>
      <Pressable>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    },

});
