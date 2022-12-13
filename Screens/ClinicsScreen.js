import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";
import Clinic_data from "../assets/data/Clinic_data";
import { ClinicList, ClinicSearchBar } from "../Components";
import { COLORS } from "../assets/constants";
import { useLayoutEffect } from "react";

function ClinicsScreen({ navigation }) {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    fetch("http://10.0.2.2:80/backend/clinics.php")
      .then((response) => response.json())
      .then((json) => setUsers(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };
  
  useEffect(() => {
    setLoading(true);
    getUsers();
  }, []);

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
          <ClinicList
            searchPhrase={searchPhrase}
            data={users}
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

export default ClinicsScreen;
