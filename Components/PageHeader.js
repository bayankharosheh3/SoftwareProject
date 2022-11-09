import { SIZES } from "../assets/constants";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import {
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";


const PageHeader = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.searchContainer}>
        <FontAwesome5Icon
          name="search"
          size={22}
          style={{ marginHorizontal: 20 }}
        />
        <TextInput placeholder="Search" style={{ flex: 1 }} />
      </View>
    </View>
  );
};

export default PageHeader;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flex:.2,
    height: 0.17 * SIZES.height,
    padding: 30,
    backgroundColor: "#63b885",
    position: "relative",
  },
  title: {
    fontSize: 30,
    color: "white",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    height: 50,
    borderRadius: 25,
    backgroundColor: "white",
    marginVertical: 20,
  },
});
