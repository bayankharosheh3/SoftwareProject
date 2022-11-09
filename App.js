import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  SplashScreen,
  OnBoardingScreen,
  HomeScreen,
  MainScreen,
} from "./Screens";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "./assets/constants";
import { ProfilePage } from "./Components/Pages";
import LogoutAlert from "./Components/LogoutAlert";
const App = () => {
  const [changeScreen, setChangeScreen] = useState(false);

  // after 3 seconds it should redirect to HomeScreen
  useEffect(() => {
    setTimeout(() => {
      setChangeScreen(true);
    }, 10000);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.container}>
        {/* {changeScreen ? <OnBoardingScreen /> : <SplashScreen />} */}
        {/* <MainScreen /> */}
        {/* <ProfilePage/> */}
        <LogoutAlert/>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  mainContainer: {
    width: "100%",
    height: "100%",
  },
});

export default App;
