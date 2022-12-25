import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { Calendar } from "react-native-calendars";
import { useState } from "react";
import { COLORS } from "../../assets/constants";
import { Card, Avatar } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useRef } from "react";

const DoctorSchedule = ({ navigation, route }) => {
  const [selectedDay, setSelectedDay] = useState();
  const [selectedTime, setSelectedTime] = useState();
  const [hours, setHours] = useState([]);

  const [appointments, setAppointments] = useState([]);
  // const [filtered, setFiltered] = useState([]);

  const id = useRef(0);
  const filtered = appointments.filter((appointment) => {
    return appointment.day === selectedDay;
  });

  //
  const [date, setDate] = useState(new Date());
  const mode = "time";
  const [show, setShow] = useState(false);
  const [date1, setDate1] = useState(new Date());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);

    let temp = new Date(currentDate);
    let time = temp.getHours() + ":" + temp.getMinutes() + ":00";
    setAppointments([
      ...appointments,
      { id: id.current++, day: selectedDay, hour: time },
    ]);
    console.log(appointments);
  };

  const availableDates = [
    {
      date: "2023-01-13",
      hours: ["11:00", "11:30", "15:00", "12:30", "13:00", "14:30"],
    },
    {
      date: "2023-01-14",
      hours: ["11:00", "11:30", "11:00", "12:30", "13:00", "14:30"],
    },
    {
      date: "2023-01-15",
      hours: ["11:00", "11:30", "12:30", "12:30", "13:00", "14:30"],
    },
  ];

  //custom
  var customMarkedDate = {};

  availableDates.map((day) => {
    customMarkedDate[selectedDay] = {
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
          onDayPress={(date) => {
            setSelectedDay(date.dateString);
            console.log(date.dateString);
          }}
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
        <TouchableOpacity
          style={{ marginRight: 10, marginTop: 17 }}
          onPress={() => setShow(!show)}
        >
          <Card>
            <Card.Content>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text>add</Text>
              </View>
            </Card.Content>
          </Card>
        </TouchableOpacity>

        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={
              new Date(
                date.getFullYear(),
                date.getMonth(),
                date.getDay(),
                date1.getHours(),
                date1.getMinutes()
              )
            }
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}

        <FlatList
          data={filtered}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity
                style={{ marginRight: 10, marginTop: 17 }}
                onPress={() => setShow(!show)}
              >
                <Card>
                  <Card.Content>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Text>{item.hour}</Text>
                    </View>
                  </Card.Content>
                </Card>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  const newArray = appointments.filter(
                    (appointment) => appointment.id !== item.id
                  );
                  setAppointments(newArray);
                }}
              >
                <Text>delete</Text>
              </TouchableOpacity>
            </View>
          )}
        />

        
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
