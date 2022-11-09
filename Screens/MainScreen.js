import { StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "../Components/Navigator";
import { COLORS } from "../assets/constants";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});
