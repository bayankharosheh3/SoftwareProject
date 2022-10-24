import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomePage, ChatPage, AppointmentsPage, ProfilePage } from "../screens";
import { Doctors, Clinics } from "../Cards";
import FontAwesome5Icons from "react-native-vector-icons/FontAwesome5";
import { COLORS } from "../constants";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={"HomePage"} headerMode="none">
      <Stack.Screen name="ok" component={HomePage} />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: 65,
        },
      }}
      initialRouteName="AllExercises"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const icons = {
            HomePage: "home",
            ChatPage: "comment-medical",
            AppointmentsPage: "calendar-alt",
            ProfilePage: "user-alt",
          };
          return (
            <FontAwesome5Icons
              name={icons[route.name]}
              color={focused ? COLORS.accent : COLORS.black}
              style={{
                marginTop: 8,
                fontSize: 22,
                opacity: focused ? 1 : 0.5,
              }}
            />
          );
        },
        tabBarLabel: ({ focused }) => {
          const labels = {
            HomePage: "",
            ChatPage: "",
            AppointmentPage: "",
            ProfilePage: "",
          };

          return (
            <Text
              style={{
                color: focused ? COLORS.accent : COLORS.black,
                // marginBottom: 8,
                opacity: focused ? 1 : 0.6,
                fontWeight: "bold",
              }}
            >
              {labels[route.name]}
            </Text>
          );
        },
      })}
    >
      <Tab.Screen name="HomePage" component={StackNavigator} options={{headerShown: false}}/>
      <Tab.Screen name="ChatPage" component={ChatPage} />
      <Tab.Screen name="AppointmentsPage" component={AppointmentsPage} />
      <Tab.Screen name="ProfilePage" component={ProfilePage} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
