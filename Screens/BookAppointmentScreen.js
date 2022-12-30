import {
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { Calendar } from "react-native-calendars";
import { useState, useEffect } from "react";
import { COLORS } from "../assets/constants";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";
const BookAppointmentScreen = ({ navigation, route }) => {
  console.log(route.params.doctorId);

  const [modalVisible, setModalVisible] = useState(false);

  const [selectedDate, setSelectedDate] = useState();
  const [selectedAppointment, setSelectedAppointment] = useState({
    day: "",
    hour: "",
    id: "",
  });

  const [chosen, setChosen] = useState({ day: "", time: "" });

  const [isLoading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  var Data = {
    id: 1,
  };

  var headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  const getUsers = () => {
    axios
      .post("http://10.0.2.2:80/backend/appointments.php", Data)
      .then((response) => response.data)
      .then((json) => setUsers(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
    //console.log(response.data);
    // fetch("http://10.0.2.2:80/backend/appointments.php", {
    //   method: "POST",
    //   headers: headers,
    //   body: JSON.stringify({
    //     id: 1,
    //   }), //convert data to JSON
    // })
    //   .then((response) => response.json())
    //   .then((json) => setUsers(json))
    //   .catch((error) => console.error(error))
    //   .finally(() => setLoading(false));
  };
  useEffect(() => {
    setLoading(true);
    getUsers();
  }, []);

  const selectedDay = users.find((date) => date.date === selectedDate);

  console.log(selectedDay);
  const booking = (day, hour, id) => {
    setSelectedAppointment({
      day: day,
      hour: hour,
      id: id,
    });
  };
  console.log(selectedAppointment);

  //custom
  var customMarkedDate = {};

  users.map((day) => {
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
          selectedDay.hour_ids.map((hour_id) => (
            <TouchableOpacity
              onPress={() => {
                booking(selectedDay.date, hour_id.hours, hour_id.id);
                setChosen({
                  ...chosen,
                  day: selectedDay.date,
                  time: hour_id.hours,
                });
              }}
              style={styles.btn}
              activeOpacity={0.6}
            >
              <Text style={styles.txt}>{hour_id.hours}</Text>
            </TouchableOpacity>
          ))}
      </View>
      <View style={styles.nextCont}>
        <View style={styles.chosen}>
          <Text style={styles.txtchosen}>Selected Day: {chosen.day}</Text>
          <Text style={styles.txtchosen}>Selected Time: {chosen.time}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            if (chosen.time == "") {
              setModalVisible(true);
            } else {
              navigation.navigate("Payment", {
                appId: "appid",
                doctorId: route.params.doctorId,
              });
            }
          }}
          style={styles.nextbtn}
          activeOpacity={0.6}
        >
          <View style={styles.nextcontainer}>
            <Text style={styles.nexttxt}>next</Text>
            <View style={styles.arrow}>
              <AntDesign name="arrowright" size={12} color={COLORS.Main} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Book appointment please!</Text>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Ok</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default BookAppointmentScreen;

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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    // backgroundColor:'red'
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 200,
    height: 200,
    paddingTop:35,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: 80,
    marginTop:25,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize:16,
  },
});
