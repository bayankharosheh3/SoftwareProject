import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { ClinicsScreen, DoctorProfileScreen, HomeScreen } from "../Screens";
import DoctorHome from "../Screens/DoctorsScreens/DoctorHome";
import ClinicsStack from "./ClinicsStack";
import DoctorsStack from "./DoctorsStack";
import TabNav from "./TabNav";

const Stack = createStackNavigator();
const DoctorRoute = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DoctorHome"
        component={DoctorHome}
        options={{ headerShown: false }}
      />
     
    </Stack.Navigator>
  );
};

export default DoctorRoute;
