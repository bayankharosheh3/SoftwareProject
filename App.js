import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SplashScreen, OnBoardingScreen } from "./Screens";
import { useState, useEffect } from "react";
const App = () => {
  const [changeScreen, setChangeScreen] = useState(false);

  // after 3 seconds it should redirect to HomeScreen
  useEffect(() => {
    setTimeout(() => {
      setChangeScreen(true);
    }, 10000);
  }, []);

  return <View style={styles.container}>{changeScreen ? <OnBoardingScreen /> : <SplashScreen />}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
