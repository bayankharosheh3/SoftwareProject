import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { ClinicsScreen, DoctorProfileScreen, HomeScreen } from "../Screens";
import ClinicsStack from "./ClinicsStack";
import DoctorsStack from "./DoctorsStack";
import TabNav from "./TabNav";

const Stack = createStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={TabNav}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ClinicStack"
        component={ClinicsStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DoctorStack"
        component={DoctorsStack}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
