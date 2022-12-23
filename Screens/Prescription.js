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
  import axios from "axios";
  import FontAwesome5Icons from "react-native-vector-icons/FontAwesome5";
  
  import { useState, useEffect } from "react";
  
  const Prescription = ({ navigation }) => {
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
  
    const [doctor, setDoctor] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [patient, setPatient] = useState([]);
    const [p_isLoading, p_setLoading] = useState(false);
    const [signUpWith, setSignUpWith] = useState({
      id: "",
      p_id: "",
    });
  
    var Data = {
      id: 2,
      p_id: 2,
    };
    const getDoctor = () => {
      axios
        .post("http://10.0.2.2:80/backend/doctor_info.php", Data)
        .then((response) => response.data)
        .then((json) => {
          setDoctor(json);
        })
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    };
    useEffect(() => {
      setLoading(true);
      getDoctor();
    }, []);
  
    const getPatient = () => {
      axios
        .post("http://10.0.2.2:80/backend/patient_info.php", Data)
        .then((response) => response.data)
        .then((json) => {
          setPatient(json);
        })
        .catch((error) => console.error(error))
        .finally(() => p_setLoading(false));
    };
    useEffect(() => {
      p_setLoading(true);
      getPatient();
    }, []);
  
    // console.log(navigation.navigate('Notifications'))
    return (
      <View style={styles.mainContainer}>
        <View style={styles.firstRow}>
          <View style={styles.topContainer}>
            <Text style={styles.title}>Prescription</Text>
          </View>
        </View>
        <View style={styles.secondRow}></View>
        <View style={styles.column}>
          <View style={styles.info}>
            <View style={styles.infoContainer}>
              <View style={styles.imgView}>
                <Image
                  source={{ uri: doctor.image }}
                  style={styles.imgProfile}
                ></Image>
              </View>
              <View style={styles.profileText}>
                <Text style={styles.userName}>Dr : {doctor.name}</Text>
                <Text style={styles.age}>phone : {doctor.phone} </Text>
              </View>
            </View>
          </View>
          <View style={styles.tabs}>
            <Text style={styles.userName}>Patient name: </Text>
            <Text style={styles.age}>{patient.p_name} </Text>
          </View>
  
          <ScrollView style={styles.rx}>
            <View style={styles.medicin}>
              <Text style={styles.userName}>RX: </Text>
              <Text style={styles.med}>tasneem J {"\n"} gg </Text>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  };
  
  export default Prescription;
  
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
      flex: 0.27,
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
      paddingTop: 6,
    },
    med: {
      fontSize: 20,
      color: "#3d644e",
      paddingTop: 6,
    },
  
    tabs: {
      flex: 0.1,
      width: "100%",
      paddingLeft: 10,
      paddingTop: 20,
      flexDirection: "row",
      borderBottomColor: "#edf1f7",
    },
    medicin: {
      flex: 0.1,
      width: "100%",
      paddingLeft: 10,
      paddingTop: 20,
      borderBottomColor: "#edf1f7",
    },
    rx: {
      flex: 0.8,
      width: "100%",
      paddingLeft: 10,
      paddingTop: 20,
  
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
  });
  