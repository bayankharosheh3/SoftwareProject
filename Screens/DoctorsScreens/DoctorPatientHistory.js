import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../assets/constants";
import { FlatList } from "react-native-gesture-handler";

const DoctorPatientHistory = () => {
  const History = [
    {
      id: "1",
      question: "past surgeries & hospitalizations:",
    },
    {
      id: "2",
      question: "chronic diseases:",
    },
    {
      id: "3",
      question: "token medication:",
    },
    {
      id: "4",
      question: "smoking",
    },
    {
      id: "5",
      question: "diseases or medical problems that run in family:",
    },
  ];
  return (
    <View style={styles.main}>
      <View style={styles.firstRow}></View>
      <View style={styles.secondRow}></View>
      <View style={styles.column}>
        <FlatList
          data={History}
          keyExtractor={(item) => item.id}
          //   style={{ backgroundColor: "red" }}
          renderItem={({ item }) => {
            return (
              <View style={styles.row}>
                <View style={styles.rowContainer}>
                  <Text style={styles.label}>{item.question}</Text>
                </View>
                <View style={styles.row2Container}>
                  <Text>
                    answers answer answers answers answer answers answers answer
                    answers
                  </Text>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default DoctorPatientHistory;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    position: "relative",
  },
  firstRow: {
    width: "100%",
    flex: 0.4,
    backgroundColor: COLORS.Main,
    alignItems: "center",
  },
  secondRow: {
    width: "100%",
    flex: 0.6,
    // backgroundColor: COLORS.white,
  },
  column: {
    marginTop: 100,
    position: "absolute",
    width: "90%",
    height: "84%",
    backgroundColor: COLORS.white,
    borderRadius: 10,
    alignItems: "center",
  },
  row: {
    width: "100%",
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "#edf1f7",
    borderBottomWidth: 1,
  },
  rowContainer: {
    // backgroundColor: "blue",
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-between",
    width: "90%",
    paddingBottom: 10,
    borderBottomColor: "#8f9bb3",
    borderBottomWidth: 1,
  },
  row2Container: {
    width: "90%",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: 10,
  },
  label: {
    // width: "40%",
    textTransform: "capitalize",
    fontSize: 14,
    color: "#8f9bb3",
    paddingRight: 10,
  },
  label2: {
    width: "60%",
    // backgroundColor: "red",
    overflow: "hidden",
    height: 20,
  },
});
