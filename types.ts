// types.ts

// Rota parametreleri için tür tanımı
export type RootStackParamList = {
    MealDetail: { mealId: string }; // MealDetail ekranı için gereken parametre
    Home: undefined; // Home ekranı için herhangi bir parametre beklenmiyor
    // Diğer ekranlarınızı da buraya ekleyebilirsiniz
  };
  