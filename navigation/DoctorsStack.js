import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import DoctorList from "../Screens/DoctorList";

const Stack = createStackNavigator();

const DoctorsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Doctors"
        component={DoctorList}
      />
    </Stack.Navigator>
  );
};

export default DoctorsStack;
