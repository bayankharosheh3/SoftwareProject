import React from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";

// screens
import { HomeScreen, MainScreen, SplashScreen } from "./Screens";
import RoutingDataProvider from "./Components/Context/RoutingDataProvider";
import DoctorSchedule from "./Screens/DoctorsScreens/DoctorSchedule";
import PatientHistory from "./Screens/PatientHistory";
import DoctorLabResult from "./Screens/DoctorsScreens/DoctorLabResult";
import DoctorPatientHistory from "./Screens/DoctorsScreens/DoctorPatientHistory";
import BillsScreen from "./Screens/BillsScreen";
import Bill from "./Screens/Payment";

const App = () => {
  const [changeScreen, setChangeScreen] = useState(false);

  // after 3 seconds it should redirect to HomeScreen
  useEffect(() => {
    setTimeout(() => {
      setChangeScreen(true);
    }, 3000);
  }, []);

  return (
    <RoutingDataProvider>
      <View style={styles.mainContainer}>
        <StatusBar />
        {changeScreen ? <MainScreen /> : <SplashScreen />}
      </View>
    </RoutingDataProvider>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
