import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { ClinicDoctorsScreen, ClinicsScreen, DoctorProfileScreen } from "../Screens";
import DoctorList from "../Screens/DoctorList";

const Stack = createStackNavigator();

const DoctorsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="DoctorProfile" component={DoctorProfileScreen} />
    </Stack.Navigator>
  );
};

export default DoctorsStack;
