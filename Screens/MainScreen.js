import { StyleSheet, View } from "react-native";
import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "../Components/Navigator";

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <BottomTabNavigator />
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

