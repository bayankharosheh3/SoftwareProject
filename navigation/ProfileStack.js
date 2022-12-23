import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { COLORS } from "../assets/constants";
import EditAccountPage from "../Screens/EditAccountPage";
import MedicalFilesPage from "../Screens/MedicalFilesPage";
import NotificationsPage from "../Screens/NotificationsPage";
import ProfilePage from "../Screens/ProfilePage";
import SupportingPage from "../Screens/SupportingPage";

const Stack = createStackNavigator();

const ProfileStack = ({ navigation, route }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfilePage"
        component={ProfilePage}
        options={{ headerShown: false, tabBarVisible: false }}
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

export default ProfileStack;
