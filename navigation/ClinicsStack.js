import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { ClinicDoctorsScreen, ClinicsScreen } from "../Screens";

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
    </Stack.Navigator>
  );
};

export default ClinicsStack;
