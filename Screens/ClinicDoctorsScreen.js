import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import doctors_data from "../assets/data/clinicDoctor";
import { ClinicList, ClinicSearchBar } from "../Components";
import { COLORS } from "../assets/constants";
import { useLayoutEffect } from "react";
import ClinicDoctorSearch from "../Components/ClinicDoctorSearch";
import ClinicDoctorList from "../Components/ClininDoctorList";

function ClinicDoctorsScreen({ navigation,route }) {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);

  console.log(route.params.clinicId)
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.search}>
            {!clicked}
            <ClinicDoctorSearch
              searchPhrase={searchPhrase}
              setSearchPhrase={setSearchPhrase}
              clicked={clicked}
              setClicked={setClicked}
            />
          </View>
        </View>
        <View style={styles.container1}>
          <ClinicDoctorList
            searchPhrase={searchPhrase}
            data={doctors_data}
            setClicked={setClicked}
            navigation={navigation}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height,
    width: "100%",
  },
  header: {
    flex: 0.8,
    width: "100%",
    backgroundColor: COLORS.Main,
  },
  search: {
    flex: 2,
    width: "100%",
  },
  container1: {
    flex: 8,
    width: "100%",
  },
});

export default ClinicDoctorsScreen;
