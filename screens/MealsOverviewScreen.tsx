import { MealItem } from "@/components/MealItem";
import { MEALS } from "@/data/dummy-data";
import React, { FC } from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export interface MealsOverviewScreenProps {
  route: any;
  imageUrl: string;
}

export const MealsOverviewScreen: FC<MealsOverviewScreenProps> = ({
  route,
  imageUrl,
}) => {
  const catId = route.params?.categoryId;

  const displayedMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(catId) >= 0
  );

  function renderMealItem(itemData: any) {
    return (
      <MealItem
        title={itemData.item.title}
        imageUrl={itemData.item.imageUrl}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
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
    padding: 16,
  },
});
