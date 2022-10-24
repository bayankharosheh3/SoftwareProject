import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
//
import Splash from "./Components/Welcome/Splash";
import OnBoarding from "./Components/Welcome/OnBoarding";
import HomeScreen from "./Components/Home/HomeScreen";

const App = () => (
  <>
    <StatusBar
      backgroundColor={"#63b885" + "30"}
      barStyle="dark-content"
      animated={true}
    />
    <HomeScreen />
  </>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
