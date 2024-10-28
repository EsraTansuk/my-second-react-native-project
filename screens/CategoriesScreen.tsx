import React, { FC } from "react";
import { CATEGORIES } from "@/data/dummy-data";
import { FlatList } from "react-native-gesture-handler";
import { CategoryGridTile } from "@/components/CategoryGridTile";

export interface CategoriesScreenProps {
  navigation: any;
}

export const CategoriesScreen: FC<CategoriesScreenProps> = ({ navigation }) => {
  function renderCategoryItem(itemData: any) {
    function pressHandler() {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
      });
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};
