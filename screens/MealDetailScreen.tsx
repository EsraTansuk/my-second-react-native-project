import { List } from "@/components/MealDetail/List";
import { Subtitle } from "@/components/MealDetail/Subtitle";
import { MealDetails } from "@/components/MealDetails";
import { MEALS } from "@/data/dummy-data";
import React, { FC, useLayoutEffect } from "react";
import { Text, View, Image, Button } from "react-native";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export interface MealDetailScreenProps {
  route: any;
  duration: number;
  complexity: string;
  affordability: string;
  navigation: any;
}

export const MealDetailScreen: FC<MealDetailScreenProps> = ({
  route,
  duration,
  complexity,
  affordability,
  navigation,
}) => {
  const mealId = route.params?.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  function headerButtonPressHandler() {
    console.log("Button pressed!");
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Button title="Tap me!" onPress={() => {}} />;
      },
    });
  }, [navigation, headerButtonPressHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal?.imageUrl }} />
      <Text style={styles.title}>{selectedMeal?.title}</Text>
      <MealDetails
        duration={selectedMeal?.duration || duration}
        complexity={selectedMeal?.complexity || complexity}
        affordability={selectedMeal?.affordability || affordability}
        textStyle={styles.detailText}
        style={{ justifyContent: "center" }}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal?.ingredients || []} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal?.steps || []} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: 250,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    maxWidth: "80%",
  },
});
