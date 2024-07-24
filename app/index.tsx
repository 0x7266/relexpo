import { View, Text, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import beachImage from "@/assets/meditation-images/beach.webp";
import React from "react";
export default function App() {
  return (
    <View className="flex items-center justify-center">
      <ImageBackground
        resizeMode="cover"
        className="flex-1"
        source={beachImage}
      >
        <LinearGradient
          className="flex-1"
          colors={["rgba(0, 0, 0, 0.4)", "rgba(0, 0, 0, 0.8)"]}
        >
          <SafeAreaView>
            <Text>Hello, World!</Text>
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}
