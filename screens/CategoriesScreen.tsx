import React from 'react'
import { CATEGORIES } from '@/data/dummy-data'
import { FlatList } from 'react-native-gesture-handler'
import { CategoryGridTile } from '@/components/CategoryGridTile'

function renderCategoryItem(itemData:any) {
    return (
        <CategoryGridTile title={itemData.item.title} color={itemData.item.color}/>
    )
}

export const CategoriesScreen = () => {
  return (
    <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={renderCategoryItem} numColumns={2}/>
  )
}
