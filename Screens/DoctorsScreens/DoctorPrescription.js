import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Keyboard,
  ScrollView,
} from "react-native";
import React from "react";
import FontAwesome5Icons from "react-native-vector-icons/FontAwesome5";

import { useState } from "react";
import TaskItem from "../../Components/DoctorComponents/TaskItem";
import TaskInputField from "../../Components/DoctorComponents/TaskInputField";

const DoctorPrescription = ({ navigation }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task == null) return;
    setTasks([...tasks, task]);
    Keyboard.dismiss();
  };

  const deleteTask = (deleteIndex) => {
    setTasks(tasks.filter((value, index) => index != deleteIndex));
  };
  const [show, setShow] = useState("none");
  // console.log(navigation.navigate('Notifications'))
  return (
    <View style={styles.mainContainer}>
      <View style={styles.firstRow}>
        <View style={styles.topContainer}>
          <Text style={styles.title}>Prescription</Text>

          <View style={styles.titleIcons}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Notifications")}
            >
              <FontAwesome5Icons name="bell" style={styles.titleIcon} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("SupportingPage")}
            >
              <FontAwesome5Icons name="cog" style={styles.titleIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.secondRow}></View>
      <View style={styles.column}>
        <View style={styles.info}>
          <View style={styles.infoContainer}>
            <View style={styles.imgView}>
              <Image
                source={require("./../../assets/images/1.jpg")}
                style={styles.imgProfile}
              ></Image>
            </View>
            <View style={styles.profileText}>
              <Text style={styles.userName}>Bayan kharosheh</Text>
              <Text style={styles.age}>20 yrs old</Text>
            </View>
          </View>
        </View>
        <View style={styles.tabs}>
          <Text style={styles.heading}>RX</Text>
          <TaskInputField addTask={addTask} />
          <ScrollView style={styles.scrollView}>
            {tasks.map((task, index) => {
              return (
                <View key={index} style={styles.taskContainer}>
                  <TaskItem
                    index={index + 1}
                    task={task}
                    deleteTask={() => deleteTask(index)}
                  />
                </View>
              );
            })}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default DoctorPrescription;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "relative",
    // justifyContent: "center",
    alignItems: "center",
  },
  firstRow: {
    width: "100%",
    flex: 0.4,
    backgroundColor: "#7BC89C",
    alignItems: "center",
  },
  secondRow: {
    width: "100%",
    flex: 0.6,
    // backgroundColor: COLORS.white,
  },
  topContainer: {
    marginTop: 60,
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 30,
    color: "white",
  },
  titleIcons: {
    width: "15%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleIcon: {
    fontSize: 20,
    color: "white",
  },
  column: {
    marginTop: 120,
    position: "absolute",
    width: "90%",
    height: "80%",
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
  },
  info: {
    // backgroundColor: "blue",
    flex: 0.17,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "#edf1f7",
    borderBottomWidth: 1,
  },
  infoContainer: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
  },
  imgView: {
    width: "25%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  imgProfile: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  userName: {
    fontSize: 22,
    paddingBottom: 2,
  },
  age: {
    fontSize: 16,
    color: "#8f9bb3",
  },

  tabs: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "#edf1f7",
  },

  tabsContainer: {
    width: "70%",
  },

  tab: {
    justifyContent: "center",
    alignItems: "center",
  },

  iconView: {
    backgroundColor: "#7BC89C",
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  iconFile: {
    backgroundColor: "#00a5ff",
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  iconHeart: {
    backgroundColor: "#6574cf",
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  icon: {
    fontSize: 20,
    color: "white",
  },
  tabDesc: {
    fontSize: 14,
    color: "#8f9bb3",
  },
  list: {
    // backgroundColor: "red",
    flex: 0.6,
    width: "100%",
  },
  listItem: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#edf1f7",
    borderBottomWidth: 1,
    height: 80,
  },
  containerItem: {
    width: "90%",
    // backgroundColor: "pink",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemIconView: {
    // flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    width: 50,
    height: 50,
    backgroundColor: "#f3f4fb",
  },
  scrollView: {
    paddingTop: 20,
  },
  itemIcon: {
    fontSize: 20,
    color: "#fff",
    lineHeight: 50,
    textAlign: "center",
  },
  itemTitle: {
    flex: 0.9,
    // backgroundColor: "blue",
    fontSize: 16,
  },
  itemArrow: {
    fontSize: 16,
    color: "#8f9bb3",
  },
});
