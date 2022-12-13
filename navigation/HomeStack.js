import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { ClinicsScreen, DoctorProfileScreen, HomeScreen } from "../Screens";
import ClinicsStack from "./ClinicsStack";
import DoctorsStack from "./DoctorsStack";

const Stack = createStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ClinicStack"
        component={ClinicsStack}
        options={{ headerShown: false }}
      />
      
    </Stack.Navigator>
  );
};

export default HomeStack;
