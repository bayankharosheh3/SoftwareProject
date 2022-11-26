import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import OnBoardingScreen from "./OnBoardingScreen";
import SignUpPatientScreen from "./SignUpPatientScreen";
import SignInScreen from "./SignInScreen";
import { MainScreen } from ".";

const ScreensNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OnBoardingScreen">
        <Stack.Screen
          name="OnBoardingScreen"
          component={OnBoardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignInScreen"
          component={SignInScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUpPatientScreen"
          component={SignUpPatientScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ScreensNavigation;

const styles = StyleSheet.create({});
