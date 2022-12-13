import {
  StyleSheet,
  Button,
  TextInput,
  Image,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
  setClicked,
} from "react-native";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import DATA from "../assets/data/doctorsData";
import SearchBar from "../Components/SearchBar";
import List from "../Components/List";
function DoctorList(props) {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [fakeData, setFakeData] = useState();

  function AllDoctors() {
    return (
      <SafeAreaView style={styles.root}>
        {!clicked}

        {
          <List
            searchPhrase={searchPhrase}
            data={DATA}
            setClicked={setClicked}
          />
        }
      </SafeAreaView>
    );
  }
  function MyDoctors() {
    return (
      <SafeAreaView style={styles.root}>
        {!clicked}

        {
          <List
            searchPhrase={searchPhrase}
            data={DATA}
            setClicked={setClicked}
          />
        }
      </SafeAreaView>
    );
  }

  const Tab = createMaterialTopTabNavigator();

  function MyTabs() {
    return (
      <Tab.Navigator
        initialRouteName="alldoctors"
        screenOptions={{
          tabBarActiveTintColor: "#000",
          tabBarLabelStyle: { fontSize: 15 },
          tabBarStyle: { backgroundColor: "#fff" },
        }}
      >
        <Tab.Screen
          name="alldoctors"
          component={AllDoctors}
          options={{ tabBarLabel: "All Doctors" }}
        />

        <Tab.Screen
          name="mydoctors"
          component={MyDoctors}
          options={{ tabBarLabel: "My doctors" }}
        />
      </Tab.Navigator>
    );
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.top}></View>
          <View style={styles.title}>
            <Text style={styles.titleText}>All Doctors</Text>

            <SafeAreaView style={styles.root}>
              {!clicked}
              <SearchBar
                searchPhrase={searchPhrase}
                setSearchPhrase={setSearchPhrase}
                clicked={clicked}
                setClicked={setClicked}
              />
            </SafeAreaView>
          </View>
          <View style={styles.tab}></View>
        </View>
        <View style={styles.container1}>
          <MyTabs />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#f8f8f8",
  },
  doctorName: {
    fontSize: 20,
    fontWeight: "bold",
  },

  header: {
    flex: 4,
    width: "100%",
    backgroundColor: "#fff",
  },
  item: {
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  listItem: {
    backgroundColor: "#fff",
    flexDirection: "row",
  },
  top: {
    flex: 0.5,
    width: "100%",
  },
  title: {
    flex: 1,
    width: "100%",
  },
  tab: {
    flex: 0.2,
    width: "100%",
  },

  container1: {
    flex: 13,
    width: "100%",
  },

  titleText: {
    color: "#000",
    fontSize: 30,
    paddingLeft: 15,
    fontWeight: "bold",
  },
});

export default DoctorList;
