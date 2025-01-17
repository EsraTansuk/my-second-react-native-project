import { MealItem } from "@/components/MealsList/MealItem";
import { MealsList } from "@/components/MealsList/MealsList";
import { CATEGORIES, MEALS } from "@/data/dummy-data";
import React, { FC, useEffect, useLayoutEffect } from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export interface MealsOverviewScreenProps {
  route: any;
  imageUrl?: string;
  navigation: any;
}

export const MealsOverviewScreen: FC<MealsOverviewScreenProps> = ({
  route,
  imageUrl,
  navigation,
}) => {
  const catId = route.params?.categoryId;

  const displayedMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(catId) >= 0
  );

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    )?.title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [navigation, catId]);

  return <MealsList items={displayedMeals} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});
