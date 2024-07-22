import { View, Text, StyleSheet } from "react-native";
import { Slot } from "expo-router";

export default function RootLayout() {
  return <Slot />;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});
