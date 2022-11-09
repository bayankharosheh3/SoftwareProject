import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "../assets/constants";

const LogoutAlert = () => {
  return (
    <View style={styles.container}>
      <View style={styles.confirmMassage}>
        <View style={styles.text}>
          <Text style={styles.logoutWord}>Log out?</Text>
          <Text style={styles.question}>Are you sure you want to log-out?</Text>
        </View>
        <TouchableOpacity style={styles.logoutBtn}>
          <Text style={styles.logoutBtnText}>LOG OUT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelBtn}>
          <Text style={styles.cancelBtnText}>CANCEL</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LogoutAlert;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#b2b2b3",
    alignItems: "center",
    paddingTop: 120,
  },
  confirmMassage: {
    backgroundColor: "white",
    flex: 0.7,
    width: "90%",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    flex: 0.3,
    alignItems: "center",
  },
  logoutWord: {
    fontSize: 24,
    marginBottom: 10,
  },
  cancelBtn: {
    width: "80%",
    borderColor: COLORS.Main,
    borderWidth: 2,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  logoutBtn: {
    width: "80%",
    backgroundColor: COLORS.Main,
    borderColor: COLORS.Main,
    borderWidth: 2,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 15,
  },
  logoutBtnText: {
    color: "white",
  },
  cancelBtnText: {
    color: COLORS.Main,
  },
});
