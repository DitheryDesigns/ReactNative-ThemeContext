import React from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import { ThemeProvider } from "./contexts/ThemeContext/ThemeContext";

import SomeComponent from "./components/SomeComponent";

export default function App() {
  const { height } = useWindowDimensions();

  return (
    <ThemeProvider>
      <View style={[styles.container, { height }, StyleSheet.absoluteFill]}>
        <SomeComponent />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
