import { Modal, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Calendar } from "react-native-calendars";
import { useState, useEffect } from "react";
import { COLORS } from "../../assets/constants";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";
const DoctorSchedule = ({ navigation, route }) => {
  const [selectedDate, setSelectedDate] = useState();
  const [selectedAppointment, setSelectedAppointment] = useState({
    day: "",
    hour: "",
  });

  const availableDates = [
    {
      date: "2022-12-13",
      hours: ["11:00", "11:30", "15:00", "12:30", "13:00", "14:30"],
    },
    {
      date: "2022-12-14",
      hours: ["11:00", "11:30", "1r:00", "12:30", "13:00", "14:30"],
    },
    {
      date: "2022-12-15",
      hours: ["11:00", "11:30", "12:30", "12:30", "13:00", "14:30"],
    },
    {
      date: "2022-12-25",
      hours: ["11:00", "11:30", "12:00", "12:30", "13:00", "14:30"],
    },
    {
      date: "2022-12-27",
      hours: ["11:00", "11:30", "12:00", "12:30", "13:00", "14:30"],
    },
  ];

  const selectedDay = availableDates.find((date) => date.date === selectedDate);

  const booking = (day, hour) => {
    setSelectedAppointment({
      day: day,
      hour: hour,
    });
  };
  console.log(selectedAppointment);

  //custom
  var customMarkedDate = {};

  availableDates.map((day) => {
    customMarkedDate[day.date] = {
      selected: true,
      selectedColor: COLORS.Main,
    };
  });

  const currentDate = new Date();
  const month = currentDate.getMonth() + 1;

  const start =
    currentDate.getFullYear() + "-" + month + "-" + currentDate.getDate();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>choose the preferred day ...</Text>
      <View>
        <Calendar
          style={{
            borderRadius: 10,
            elevation: 4,
            marginVertical: 20,
            width: "100%",
          }}
          onDayPress={(date) => setSelectedDate(date.dateString)}
          markingType={"custom"}
          minDate={start}
          hideExtraDays={true}
          markedDates={{
            [start]: {
              selectedColor: COLORS.white,
              selectedTextColor: COLORS.black,
            },
            ...customMarkedDate,
          }}
        />
      </View>
      <View style={styles.btnCont}>
        {selectedDay &&
          selectedDay.hours.map((hour) => (
            <TouchableOpacity
              onPress={() => booking(selectedDay.date, hour)}
              style={styles.btn}
              activeOpacity={0.6}
            >
              <Text style={styles.txt}>{hour}</Text>
            </TouchableOpacity>
          ))}
      </View>
    </View>
  );
};

export default DoctorSchedule;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    paddingHorizontal: "5%",
    paddingVertical: "20%",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    textTransform: "capitalize",
  },
  btnCont: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  btn: {
    backgroundColor: COLORS.Main,
    borderRadius: 7,
    padding: 20,
    paddingVertical: 14,
    width: "35%",
    margin: 10,
  },
  txt: {
    color: COLORS.white,
    fontSize: 16,
    textTransform: "uppercase",
    paddingRight: 10,
    textAlign: "center",
  },
  nextbtn: {
    backgroundColor: COLORS.white,
    borderRadius: 7,
    padding: 20,
    paddingVertical: 14,
    borderColor: COLORS.Main,
    borderWidth: 1,
    width: "35%",
  },
  nextcontainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  nexttxt: {
    color: COLORS.Main,
    fontSize: 16,
    textTransform: "uppercase",
    paddingRight: 13,
  },
  arrow: {
    borderColor: COLORS.Main,
    borderWidth: 2,
    borderRadius: 100,
    padding: 2,
  },
  nextCont: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  chosen: {
    justifyContent: "space-between",
  },
  txtchosen: {
    // textAlign:'left',
    color: COLORS.Main,
    fontSize: 16,
    fontWeight: "600",
  },
});
