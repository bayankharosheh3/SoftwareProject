import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import chat from "../assets/images/chat.png";
import clock from "../assets/images/clock.png";
import App_data from "../assets/data/App_data";
import { MyTabs } from "../navigation/AppointmentsTabs";

export function Upcoming({ navigation }) {
  return (
    <View style={styles.container0}>
      <FlatList
        data={App_data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate("doctor_appointments", {
                userName: item.doctor_name,
              })
            }
          >
            <View style={styles.userInfo}>
              <View style={styles.userImgWrapper}>
                <Image style={styles.userImg} source={{ uri: item.image }} />
              </View>
              <View style={styles.textSection}>
                <View style={styles.userInfoText}>
                  <Text style={styles.userName}>{item.doctor_name}</Text>
                  <View>
                    <View style={styles.periodinfo}>
                      <Image source={clock} style={styles.image} />
                      <Text style={styles.clock}>{item.period}</Text>
                    </View>
                  </View>
                </View>
                <Text style={styles.specialty}>{item.specialty}</Text>
                <View style={styles.time_chat}>
                  <View>
                    <Text style={styles.time}>{item.time}</Text>
                  </View>
                  <TouchableOpacity
                    style={styles.chatimg}
                    onPress={() =>
                      navigation.navigate("chat", {
                        userName: item.doctor_name,
                      })
                    }
                  >
                    <Text>cancel</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export function Past({ navigation }) {
  return (
    <View style={styles.container0}>
      <FlatList
        data={App_data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate("Rating", {
                userName: item.doctor_name,
              })
            }
          >
            <View style={styles.userInfo}>
              <View style={styles.userImgWrapper}>
                <Image style={styles.userImg} source={{ uri: item.image }} />
              </View>
              <View style={styles.textSection}>
                <View style={styles.userInfoText}>
                  <Text style={styles.userName}>{item.doctor_name}</Text>
                  <View>
                    <View style={styles.periodinfo}>
                      <Image source={clock} style={styles.image} />
                      <Text style={styles.clock}>{item.period}</Text>
                    </View>
                  </View>
                </View>
                <Text style={styles.specialty}>{item.specialty}</Text>
                <View style={styles.time_chat}>
                  <View>
                    <Text style={styles.time}>{item.time}</Text>
                  </View>
                  <TouchableOpacity
                    style={styles.chatimg}
                    onPress={() =>
                      navigation.navigate("chat", {
                        userName: item.doctor_name,
                      })
                    }
                  >
                    <Image source={chat} style={styles.image} />
                  </TouchableOpacity>
                </View>
                <View style={styles.feedback}>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.buttonStyle}
                    onPress={() => navigation.replace("Rating")}
                  >
                    <Text style={styles.buttonTextStyle}>SEND FEEDBACK</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

function AppointmentsList(props) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.top}></View>
          <View style={styles.title}>
            <Text style={styles.titleText}>Appointments</Text>
          </View>
          <View style={styles.tab}></View>
        </View>
        <View style={styles.container1}>
          <MyTabs />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#f8f8f8",
  },
  doctorName: {
    fontSize: 20,
    fontWeight: "bold",
  },

  header: {
    flex: 2,
    width: "100%",
    backgroundColor: "#fff",
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
  title: {
    flex: 1,
    width: "100%",
  },
  tab: {
    flex: 1,
    width: "100%",
  },

  container1: {
    flex: 13,
    width: "100%",
  },

  titleText: {
    color: "#000",
    fontSize: 30,
    paddingLeft: 15,
    fontWeight: "bold",
  },

  container0: {
    flex: 1,
    width: "100%",
    height: "100%",
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  card: {
    width: "100%",
  },
  userInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  periodinfo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userImgWrapper: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  userImg: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textSection: {
    flexDirection: "column",
    justifyContent: "center",
    padding: 15,
    paddingLeft: 0,
    marginLeft: 10,
    width: 300,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  userInfoText: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  time_chat: {
    flexDirection: "row",
    justifyContent: "space-between",

    paddingTop: 20,
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
    // fontFamily: "Lato-Regular",
  },
  clock: {
    fontSize: 17,
    color: "#7BC89C",

    // fontFamily: "Lato-Regular",
  },
  specialty: {
    fontSize: 14,
    color: "#949494",
  },
  image: {
    width: 20,
    height: 20,
  },
  chatimg: {},
  buttonStyle: {
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#7BC89C",
    alignItems: "center",
    height: 30,
  },
  feedback: {
    paddingTop: 10,
  },
});

export default AppointmentsList;
