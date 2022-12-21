import { SafeAreaView } from "react-native";
import React from "react";
import DATA from "../assets/data/doctorsData";
import List from "./List";

const MyDoctors = ({ route }) => {
  const { searchPhrase, setClicked, clicked, navigation } = route.params;
  return (
    <SafeAreaView>
      {!clicked}
      {
        <List
          searchPhrase={searchPhrase}
          data={DATA}
          setClicked={setClicked}
          navigation={navigation}
        />
      }
    </SafeAreaView>
  );
};

export default MyDoctors;
