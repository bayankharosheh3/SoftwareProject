import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { ClinicDoctorsScreen, ClinicsScreen } from "../Screens";
import BookAppointmentScreen from "../Screens/BookAppointmentScreen";
import DoctorProfileScreen from "../Screens/DoctorProfileScreen";
import ReviewsScreen from "../Screens/ReviewsScreen";

const Stack = createStackNavigator();

const ClinicsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Clinics"
        component={ClinicsScreen}
        options={
          ({ route }) => {
            console.log(route);
            return {
              // title: route.params.userName,
            };
          }
          // {
          //   headerStyle: {
          //     backgroundColor: COLORS.Main,
          //   },
          //   headerTitleStyle: {
          //     color: COLORS.FontColorWithBackground,
          //   },
          //   headerTintColor: COLORS.FontColorWithBackground,
          //   headerBackTitleVisible: false,
          // })
        }
      />
      <Stack.Screen
        name="ClinicDoctors"
        component={ClinicDoctorsScreen}
        options={{
          headerBackTitleVisible: false,
        }}
        //   options={({ route }) => {
        //     console.log(route.name);
        //     return {
        //       title: route.params.userName,
        //       headerBackTitleVisible: false,
        //     };
        //   }
        // }
      />
      <Stack.Screen
        name="DoctorProfile"
        component={DoctorProfileScreen}
        options={{
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="BookAppointment"
        component={BookAppointmentScreen}
        options={{
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="Reviews"
        component={ReviewsScreen}
        options={{
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default ClinicsStack;
