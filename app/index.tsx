import { View, Text, StyleSheet } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text className="bg-black">Hello, World!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});
