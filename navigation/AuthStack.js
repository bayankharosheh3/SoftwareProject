import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { HomeScreen, OnBoardingScreen, SignInScreen, SignUpPatientScreen } from "../Screens";

const Stack = createStackNavigator();

const AuthStack = ({setLoggedIn}) => {
  return (
    <Stack.Navigator initialRouteName="OnBoarding">
      <Stack.Screen
        name="OnBoardingScreen"
        component={OnBoardingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{ headerShown: false }}
        initialParams={{ loggedInFun: setLoggedIn }}
      />
      <Stack.Screen
        name="SignUpPatientScreen"
        component={SignUpPatientScreen}
        options={{ headerShown: false }}
      />
        <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
