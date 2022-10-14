import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Splash from "./Components/WelcomePage/Splash";
import OnBoarding from "./Components/WelcomePage/OnBoarding"
import { StatusBar } from "expo-status-bar";

const App = () => (
  <View style={styles.container}>
    <OnBoarding/>
    <StatusBar style="auto"/>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
