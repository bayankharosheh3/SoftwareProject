import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import React from "react";
import { Calendar } from "react-native-calendars";
import { useState } from "react";
import { COLORS } from "../../assets/constants";
import { Card, Avatar } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useRef } from "react";
import FontAwesome5Icons from "react-native-vector-icons/FontAwesome5";
import { MaterialIcons } from "@expo/vector-icons";

const DoctorSchedule = ({ navigation, route }) => {
  const [selectedDay, setSelectedDay] = useState("");
  const [appointments, setAppointments] = useState([]);
  // const [filtered, setFiltered] = useState([]);

  const id = useRef(0);
  const filtered = appointments.filter((appointment) => {
    return appointment.day === selectedDay;
  });

  //
  const date = new Date();
  const mode = "time";
  const [show, setShow] = useState(false);
  const [date1, setDate1] = useState(new Date());
  const [edit, setEdit] = useState(null);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    // setDate(currentDate);

    let temp = new Date(currentDate);
    let time = temp.getHours() + ":" + temp.getMinutes() + ":00";
    if (edit !== null) {
      const objIndex = appointments.findIndex((obj) => obj.id == edit);
      appointments[objIndex].hour = time;
      setEdit(null);
    } else {
      setAppointments([
        ...appointments,
        {
          id: id.current++,
          day: selectedDay,
          hour: time,
          hours: temp.getHours(),
          min: temp.getMinutes(),
        },
      ]);
    }

    console.log(temp.getHours());
    console.log(temp.getMinutes());
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

  var coloredDay = [selectedDay];

  appointments.map((appointment) => {
    coloredDay = [...coloredDay, appointment.day];
  });

  coloredDay.map((day) => {
    if (day == selectedDay) {
      customMarkedDate[day] = {
        selected: true,
        selectedColor: COLORS.Main,
      };
    } else {
      customMarkedDate[day] = {
        selected: true,
        selectedColor: COLORS.Main + "110",
      };
    }
  });

  const currentDate = new Date();
  const month = currentDate.getMonth() + 1;

  const start =
    currentDate.getFullYear() + "-" + month + "-" + currentDate.getDate();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>select the preferred day ...</Text>
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
      {selectedDay && (
        <View style={styles.btnCont}>
          <TouchableOpacity
            style={[{ marginRight: 10, marginTop: 1 }]}
            onPress={() => {
              setShow(true);
              console.log(true);
            }}
          >
            <Card style={{ backgroundColor: COLORS.Main }}>
              <Card.Content>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "white" }}>Add</Text>
                </View>
              </Card.Content>
            </Card>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              marginRight: 10,
              marginTop: 1,
            }}
            onPress={() => {
              const newArray = appointments.filter(
                (appointment) => appointment.day !== selectedDay
              );
              setAppointments(newArray);
            }}
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
                  <Text>Delete</Text>
                </View>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        </View>
      )}

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date1}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      <FlatList
        style={{ flex: 1, marginBottom: 10 }}
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 5 }}>
            <Card style={{ marginRight: 10, marginTop: 5 }}>
              <Card.Content>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text>{item.hour}</Text>
                  <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity
                      onPress={() => {
                        const newArray = appointments.filter(
                          (appointment) => appointment.id !== item.id
                        );
                        setAppointments(newArray);
                      }}
                      style={{ marginRight: 12 }}
                    >
                      <MaterialIcons
                        style={styles.delete}
                        name="delete"
                        size={24}
                        color={COLORS.Main}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        setDate1(
                          new Date(
                            date.getFullYear(),
                            date.getMonth(),
                            date.getDay(),
                            item.hours,
                            item.min
                          )
                        );

                        console.log(date1);
                        setEdit(item.id);
                        setShow(true);
                      }}
                    >
                      <FontAwesome5Icons
                        name={"pen"}
                        size={17}
                        style={{ color: COLORS.Main }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </Card.Content>
            </Card>
          </View>
        )}
      />
    </View>
  );
};

export default DoctorSchedule;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    paddingHorizontal: "5%",
    paddingTop: "5%",
    paddingBottom: "10%",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    textTransform: "capitalize",
  },
  btnCont: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "flex-start",
    flexWrap: "wrap",

    // margin: 10,
  },
  btn: {
    backgroundColor: COLORS.Main,
    borderRadius: 7,
    padding: 20,
    paddingVertical: 14,
    width: "35%",
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
