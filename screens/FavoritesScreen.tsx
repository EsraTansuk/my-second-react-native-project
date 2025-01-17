import { MealsList } from '@/components/MealsList/MealsList'
import { MEALS } from '@/data/dummy-data'
import { FavoritesContext } from '@/store/context/favorites-context'
import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const FavoritesScreen = () => {
  const favoriteMealsCtx = useContext(FavoritesContext)

  const favoriteMeals = MEALS.filter(meal => favoriteMealsCtx.ids.includes(meal.id) );

  if (favoriteMeals.length === 0 ){
    return (
      <View style={style.rootContainer}>
        <Text>No favorite meals found. Start adding some!</Text>
      </View>
    )
  }

  return (
    <MealsList items={favoriteMeals} />
  )
}

const style = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  }
})
