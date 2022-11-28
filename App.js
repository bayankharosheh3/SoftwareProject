import React from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";

// screens
import { HomeScreen, MainScreen, SplashScreen } from "./Screens";

const App = () => {
  const [changeScreen, setChangeScreen] = useState(false);

  // after 3 seconds it should redirect to HomeScreen
  useEffect(() => {
    setTimeout(() => {
      setChangeScreen(true);
    }, 3000);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <StatusBar />
      {changeScreen ? <MainScreen /> : <SplashScreen />}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "100%",
  },
});

export default App;
