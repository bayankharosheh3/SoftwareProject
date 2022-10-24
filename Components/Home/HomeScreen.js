import { StyleSheet, Text, View } from "react-native";
import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./navigator/Navigator";

const HomeScreen = () => {
  return (
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
