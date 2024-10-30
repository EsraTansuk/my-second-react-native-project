import { Ionicons } from "@expo/vector-icons";
import React, { FC } from "react";
import { Pressable } from "react-native";
import { StyleSheet } from "react-native";

export interface IconButtonProps {
  onPress: () => void;
  icon: string;
  color?: string | undefined;
}

export const IconButton:FC<IconButtonProps> = ({onPress, icon, color}) => {
  return (
    <Pressable onPress={onPress}>
      <Ionicons name={icon as any} size={24} color={color || "white"} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  }
});
