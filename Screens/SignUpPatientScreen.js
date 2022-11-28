import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { COLORS } from "../assets/constants";
import { SignUpAlert } from "../Components";

function SignUpPatientScreen({ navigation }) {
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  const [signUpWith, setSignUpWith] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={styles.container}>
          <View style={styles.container1}>
            <View style={styles.container1_1}>
              <Image
                source={require("./../assets/images/login_logo.png")}
                style={styles.logo}
              />
            </View>
            <View style={styles.container1_2}>
              <Text style={styles.logintext}>Sign Up</Text>
              <Text style={styles.logindiscreption}>
                Please enter your credentials
              </Text>
            </View>
          </View>

          <View style={styles.container2}>
            <View style={styles.container2_1}>
              <Text style={styles.credentials}>Name</Text>
            </View>
            <View style={styles.container2_2}>
              <TextInput
                placeholder={"Name"}
                style={styles.input}
                value={signUpWith.name}
                onChangeText={(text) => {
                  setSignUpWith({ ...signUpWith, name: text });
                }}
              />
            </View>
            <View style={styles.container2_1}>
              <Text style={styles.credentials}>Email</Text>
            </View>
            <View style={styles.container2_2}>
              <TextInput
                placeholder={"Email"}
                style={styles.input}
                value={signUpWith.email}
                onChangeText={(text) => {
                  setSignUpWith({ ...signUpWith, email: text });
                }}
              />
            </View>
            <View style={styles.container2_1}>
              <Text style={styles.credentials}>Mobile Number</Text>
            </View>
            <View style={styles.container2_2}>
              <TextInput
                placeholder={" Mobile Number"}
                style={styles.input}
                keyboardType="numeric"
                value={signUpWith.phone}
                onChangeText={(text) => {
                  setSignUpWith({ ...signUpWith, phone: text });
                }}
              />
            </View>
            <View style={styles.container2_1}>
              <Text style={styles.credentials}>Password</Text>
            </View>
            <View style={styles.container2_2}>
              <TextInput
                placeholder={"Password"}
                secureTextEntry={true}
                style={styles.input}
                value={signUpWith.password}
                onChangeText={(text) => {
                  setSignUpWith({ ...signUpWith, password: text });
                }}
              />
            </View>
          </View>

          <View View style={styles.container2_2}>
            <Text style={styles.error}>{error}</Text>
          </View>

          <View style={styles.container3}>
            <TouchableOpacity
              style={styles.signUpBtn}
              onPress={() => {
                if (
                  signUpWith.name === "" ||
                  signUpWith.email === "" ||
                  signUpWith.phone === "" ||
                  signUpWith.password === ""
                ) {
                  setError("error,fill all inputs please");
                } else {
                  setShow(true);
                  console.log(signUpWith);
                  setError("");
                }
              }}
            >
              <Text style={styles.signUp}>Sign up</Text>
            </TouchableOpacity>
            <View style={styles.row}>
              <Text>have an account? </Text>
              <TouchableOpacity
                onPress={() => navigation.replace("SignInScreen")}
              >
                <Text style={styles.link}>Sign in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
      <View style={[styles.container4, { display: show ? "flex" : "none" }]}>
        <SignUpAlert fun={setShow} fun2={setSignUpWith} />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.Background,
    position: "relative",
  },
  container1: {
    flex: 0.3,
    width: "100%",
    backgroundColor: COLORS.Main,
  },
  container1_1: {
    flex: 0.5,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingLeft: "5%",
    paddingTop: "15%",
    paddingBottom: 10,
    marginBottom: 10,
  },
  container1_2: {
    flex: 1,
    paddingLeft: 20,
    paddingBottom: 10,
  },
  container2: {
    flex: 0.5,
    width: "100%",
    marginBottom: "7%",
    marginTop: "3%",
  },
  container2_1: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingLeft: "5%",
    paddingTop: "5%",
    paddingBottom: 5,
  },
  container2_2: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  container3: {
    flex: 0.2,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  credentials: {
    color: COLORS.FontColorNoBackground,
    fontSize: 15,
  },
  input: {
    width: "90%",
    height: 44,
    padding: 10,
    borderBottomColor: COLORS.InputBorder,
    borderBottomWidth: 0.5,
    marginBottom: 10,
    backgroundColor: COLORS.InputBackground,
  },
  link: {
    fontWeight: "bold",
    color: COLORS.Main,
  },

  logintext: {
    color: COLORS.FontColorWithBackground,
    fontSize: 30,
    //  fontFamily: 'Arial',
    fontWeight: "bold",
  },
  logindiscreption: {
    color: COLORS.FontColorWithBackground,
    fontSize: 15,
  },
  logo: {
    width: 80,
    height: 80,
  },
  row: {
    flexDirection: "row",
    marginTop: 4,
  },

  signUpBtn: {
    backgroundColor: COLORS.Main,
    width: "90%",
    margin: 10,
    borderRadius: 7,
    padding: 13,
  },
  signUp: {
    color: COLORS.FontColorWithBackground,
    textAlign: "center",
    fontSize: 16,
  },
  container4: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  error: {
    color: "red",
  },
});

export default SignUpPatientScreen;
