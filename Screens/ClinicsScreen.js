import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import arrow1 from "./../assets/images/arrow1.png";
import Clinic_data from "../assets/data/Clinic_data";
import { ClinicList, ClinicSearchBar } from "../Components";

function ClinicsScreen(props) {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.search}>
            {!clicked}
            <ClinicSearchBar
              searchPhrase={searchPhrase}
              setSearchPhrase={setSearchPhrase}
              clicked={clicked}
              setClicked={setClicked}
            />
          </View>
        </View>
        <View style={styles.container1}>
          {
            <ClinicList
              searchPhrase={searchPhrase}
              data={Clinic_data}
              setClicked={setClicked}
            />
          }
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height,
    width: "100%",
    backgroundColor: "#f8f8f8",
  },
  doctorName: {
    fontSize: 20,
    fontWeight: "bold",
  },

  header: {
    flex: .8,
    width: "100%",
    backgroundColor: "#7BC89C",
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
    flex: 1,
    width: "100%",
  },
  search: {
    flex: 2,
    width: "100%",
  },
  title: {
    flex: 1,
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingRight: 30,
    paddingLeft: 10,
  },

  container1: {
    flex: 8,
    width: "100%",
  },

  titleText: {
    color: "#fff",
    fontSize: 30,
  },
  arrowimage: {
    width: 32,
    height: 32,
  },
});

export default ClinicsScreen;
