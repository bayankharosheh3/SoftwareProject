import React from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";

// screens
import { HomeScreen, MainScreen, SplashScreen } from "./Screens";
import {
  BookingSuccessPage,
  ChatPage,
  DoctorProfilePage,
  MedicalFilesPage,
  NotificationsPage,
  SupportingPage,
} from "./Components/Pages";
import ChangePassword from "./Components/ChangePassword";
import EditAccountConfirm from "./Components/EditAccountConfirm";
import LogoutAlert from "./Components/LogoutAlert";
import { SignUpAlert } from "./Components";
import SuccessAlert from "./Components/SuccessAlert";
import BookAppointment from "./Components/Pages/BookAppointment";
import BookAppointmentScreen from "./Screens/BookAppointmentScreen";

const App = () => {
  const [changeScreen, setChangeScreen] = useState(false);

  // after 3 seconds it should redirect to HomeScreen
  useEffect(() => {
    setTimeout(() => {
      setChangeScreen(true);
    }, 3000);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <StatusBar />
      {/* {changeScreen ? <MainScreen /> : <SplashScreen />} */}
      <BookAppointmentScreen />
    </View>
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
