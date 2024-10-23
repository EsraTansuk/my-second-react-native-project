import { CategoriesScreen } from "@/screens/CategoriesScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style="light" />
        <CategoriesScreen />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#fff",
  },
});
