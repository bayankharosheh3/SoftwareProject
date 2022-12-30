import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  ScrollView,
  Keyboard,
} from "react-native";
import React from "react";
import { COLORS } from "../../assets/constants";
import { useState } from "react";

const DBill = ({ fun }) => {
  const [billValue, setBillValue] = useState(0);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <View style={styles.confirmMassage}>
            <View style={styles.innerContainer}>
              <Text style={styles.inLabel}>Bill Value</Text>
              <TextInput
                // placeholder={"Old password"}
                style={styles.inStyle}
                // secureTextEntry={true}
                // value={billValue.oldPass}
                onChangeText={(text) => {
                  setBillValue(text);
                }}
              />

              <TouchableOpacity
                style={styles.logoutBtn}
                onPress={() => {
                  console.log(billValue);
                }}
              >
                <Text style={styles.logoutBtnText}>save</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cancelBtn}
                onPress={() => {
                  fun("none");
                  setBillValue(billValue);
                }}
              >
                <Text style={styles.cancelBtnText}>CANCEL</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default DBill;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#00000070",
    alignItems: "center",
    paddingTop: 120,
  },
  confirmMassage: {
    backgroundColor: "white",
    flex: 0.8,
    width: "90%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  innerContainer: {
    width: "80%",
    alignItems: "center",
  },
  inLabel: {
    color: "#8f9bb3",
    width: "100%",
    marginBottom: 10,
    fontSize: 14,
  },

  inStyle: {
    width: "100%",
    padding: 10,
    backgroundColor: "#f7f9fc",
    borderColor: "#edf1f7",
    borderWidth: 1,
    borderRadius: 3,
    marginBottom: 20,
  },
  cancelBtn: {
    width: "100%",
    borderColor: COLORS.Main,
    borderWidth: 2,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  logoutBtn: {
    width: "100%",
    backgroundColor: COLORS.Main,
    borderColor: COLORS.Main,
    borderWidth: 2,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 15,
    marginTop: 40,
  },
  logoutBtnText: {
    fontSize: 14,
    textTransform: "uppercase",
    color: "white",
  },
  cancelBtnText: {
    fontSize: 14,
    textTransform: "uppercase",
    color: COLORS.Main,
  },
});
