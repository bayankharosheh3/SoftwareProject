import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { ClinicsScreen, HomeScreen } from "../Screens";
import ClinicsStack from "./ClinicsStack";

const Stack = createStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ClinicStack"
        component={ClinicsStack}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
