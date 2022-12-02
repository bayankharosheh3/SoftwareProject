import { StyleSheet, View } from "react-native";
import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";
import { useState } from "react";
import AuthStack from "../navigation/AuthStack";
import TabNav from "../navigation/TabNav";

const MainScreen = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <View style={styles.container}>
      <NavigationContainer>
        {/* <BottomTabNavigator /> */}
        {loggedIn ? <TabNav /> : <AuthStack setLoggedIn={setLoggedIn} />}
      </NavigationContainer>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});
