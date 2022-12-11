import React from "react";

import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppointmentsPage, ProfilePage } from "../Components/Pages";
import FontAwesome5Icons from "react-native-vector-icons/FontAwesome5";
import { COLORS } from "../assets/constants";

import HomeStack from "./HomeStack";
import MessagesScreen from "../Screens/MessagesScreen";
import MessageStack from "./MessageStack";
import AppointmentsScreen from "../Screens/BookAppointmentScreen";

const Tab = createBottomTabNavigator();

const TabNav = () => {
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
            HomeScreen: "home",
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
            HomeScreen: "",
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
        name="HomeScreen"
        component={HomeStack}
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
        component={AppointmentsScreen}
        // options={{ headerShown: false }}
      />
      <Tab.Screen
        name="ProfilePage"
        component={ProfilePage}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

// tabs

// const MessageStack = ({ navigation, route }) => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Messages"
//         component={MessagesPage}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="Chat"
//         component={ChatPage}
//         options={({ route }) => {
//           console.log(route);
//           return {
//             title: route.params.userName,
//             headerBackTitleVisible: false,
//           };
//         }}
//       />
//     </Stack.Navigator>
//   );
// };

// const ProfileStack = ({ navigation, route }) => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Profile"
//         component={ProfilePage}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="Notifications"
//         component={NotificationsPage}
//         options={{
//           headerBackTitleVisible: false,
//           headerStyle: {
//             backgroundColor: COLORS.Main,
//             // height:120,
//           },
//           headerTintColor: "#fff",
//         }}
//       />
//       <Stack.Screen
//         name="EditAccountPage"
//         component={EditAccountPage}
//         options={{
//           headerBackTitleVisible: false,
//           headerStyle: {
//             backgroundColor: COLORS.Main,
//             // height:120,
//           },
//           headerTintColor: "#fff",
//         }}
//       />
//       <Stack.Screen
//         name="MedicalFilesPage"
//         component={MedicalFilesPage}
//         options={{
//           headerBackTitleVisible: false,
//           headerStyle: {
//             backgroundColor: COLORS.Main,
//             // height:120,
//           },
//           headerTintColor: "#fff",
//         }}
//       />
//       <Stack.Screen
//         name="SupportingPage"
//         component={SupportingPage}
//         options={{
//           headerBackTitleVisible: false,
//           headerStyle: {
//             backgroundColor: COLORS.Main,
//             // height:120,
//           },
//           headerTintColor: "#fff",
//         }}
//       />
//     </Stack.Navigator>
//   );
// };

export default TabNav;
