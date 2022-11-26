import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomePage, ChatPage, AppointmentsPage, ProfilePage } from "./Pages";
import FontAwesome5Icons from "react-native-vector-icons/FontAwesome5";
import { COLORS } from "../assets/constants";
import MessagesPage from "./Pages/MessagesPage";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import NotificationsPage from "./Pages/NotificationsPage";
import EditAccountPage from "./Pages/EditAccountPage";
import SupportingPage from "./Pages/SupportingPage";
import { OnBoardingScreen, SignInScreen } from "../Screens";
import SignUpPatientScreen from "../Screens/SignUpPatientScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={"HomePage"}
      options={{ headerShown: false }}
    >
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{ headerShown: false }}
      />
      
    </Stack.Navigator>
  );
};

const MessageStack = ({ navigation, route }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Messages"
        component={MessagesPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Chat"
        component={ChatPage}
        options={({ route }) => {
          console.log(route.name);
          return {
            title: route.params.userName,
            headerBackTitleVisible: false,
          };
        }}
      />
    </Stack.Navigator>
  );
};

const ProfileStack = ({ navigation, route }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfilePage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Notifications"
        component={NotificationsPage}
        options={{
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: COLORS.Main,
            // height:120,
          },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="EditAccountPage"
        component={EditAccountPage}
        options={{
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: COLORS.Main,
            // height:120,
          },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="MedicalFilesPage"
        component={MedicalFilesPage}
        options={{
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: COLORS.Main,
            // height:120,
          },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="SupportingPage"
        component={SupportingPage}
        options={{
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: COLORS.Main,
            // height:120,
          },
          headerTintColor: "#fff",
        }}
      />
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
            MessagesPage: "comment-medical",
            AppointmentsPage: "calendar-alt",
            ProfilePage: "user-alt",
          };
          return (
            <FontAwesome5Icons
              name={icons[route.name]}
              color={focused ? COLORS.Main : COLORS.black}
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
      <Tab.Screen
        name="HomePage"
        component={StackNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="MessagesPage"
        component={MessageStack}
        options={{ headerShown: false }}
        // options={({ route }) => console.log(route)}
      />
      <Tab.Screen
        name="AppointmentsPage"
        component={AppointmentsPage}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="ProfilePage"
        component={ProfileStack}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
