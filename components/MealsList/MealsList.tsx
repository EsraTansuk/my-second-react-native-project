import React, { FC } from "react";
import { MealItem } from "./MealItem";
import { FlatList, View, StyleSheet } from "react-native";

export interface MealsListProps {
  items: any;
}

export const MealsList: FC<MealsListProps> = ({ items }) => {
  function renderMealItem(itemData: any) {
    const item = itemData.item;

    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
      id: item.id,
    };

    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});
