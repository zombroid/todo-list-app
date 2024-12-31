import React from "react";
import { StyleSheet, View } from "react-native";
import HomeScreen from "./screens/HomeScreen"; // Import HomeScreen component

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
