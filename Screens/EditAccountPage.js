import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { COLORS } from "../assets/constants";
import FontAwesome5Icons from "react-native-vector-icons/FontAwesome5";
import { useRef } from "react";

const EditAccountPage = () => {
  const [permission, setPermission] = useState(null);
  const [edit, setEdit] = useState(false);
  const [info, setInfo] = useState({
    firstName: "Bayan",
    lastName: "kharosheh",
    email: "bayankh",
    phoneNumber: "0595212993",
    address: "asira alshamalya-nablus",
    img: "",
  });

  useEffect(() => {
    (async () => {
      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setPermission(galleryStatus.status === "granted");
    })();
  }, []);

  const pickImg = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });
    console.log(result);
    if (!result.canceled) {
      setInfo({ ...info, img: result.uri });
    }
  };

  if (permission === false) {
    return <Text>No access to internal storage</Text>;
  }

  const changeImg = () => {
    if (info.img !== "") {
      return { uri: info.img };
    } else {
      return require("./../assets/images/1.jpg");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={changeImg()} style={styles.imgProfile} />

        <TouchableOpacity
          onPress={() => {
            pickImg();
          }}
          style={styles.changeBtn}
        >
          <Text style={styles.changeBtnText}>change pic</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.personaInfo}>
        <View style={styles.titleView}>
          <Text style={styles.title}>personal info</Text>
          <TouchableOpacity
            style={styles.editBtn}
            onPress={() => {
              setEdit(true);
            }}
          >
            <FontAwesome5Icons name={"pen"} style={styles.editIcon} />
            <Text style={styles.editText}>edit</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <View style={styles.rowContainer}>
            <Text style={styles.label}>first name</Text>
            <TextInput
              style={edit ? styles.edit : styles.value}
              value={info.firstName}
              editable={edit}
              onChangeText={(text) => {
                setInfo({ ...info, firstName: text });
              }}
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.rowContainer}>
            <Text style={styles.label}>last name</Text>
            <TextInput
              style={edit ? styles.edit : styles.value}
              value={info.lastName}
              editable={edit}
              onChangeText={(text) => {
                setInfo({ ...info, lastName: text });
              }}
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.rowContainer}>
            <Text style={styles.label}>email</Text>
            <TextInput
              style={edit ? styles.edit : styles.value}
              value={info.email}
              editable={edit}
              onChangeText={(text) => {
                setInfo({ ...info, email: text });
              }}
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.rowContainer}>
            <Text style={styles.label}>phone number</Text>
            <TextInput
              style={edit ? styles.edit : styles.value}
              value={info.phoneNumber}
              editable={edit}
              onChangeText={(text) => {
                setInfo({ ...info, phoneNumber: text });
              }}
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.rowContainer}>
            <Text style={styles.label}>address</Text>
            <TextInput
              style={edit ? styles.edit : styles.value}
              value={info.address}
              editable={edit}
              onChangeText={(text) => {
                setInfo({ ...info, address: text });
              }}
            />
          </View>
        </View>
        <View
          style={{
            flex: 0.1,
            borderTopColor: "#edf1f7",
            borderTopWidth: 1,
            width: "100%",
            alignItems: "center",
            padding: 30,
          }}
        >
          <TouchableOpacity
            style={[styles.changeBtn]}
            onPress={() => {
              console.log(info);
            }}
          >
            <Text style={styles.changeBtnText}>save changes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default EditAccountPage;

const styles = StyleSheet.create({
  imgProfile: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderColor: COLORS.Main,
    borderWidth: 2,
    marginBottom: 15,
  },
  container: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  imgContainer: {
    width: "90%",
    borderBottomColor: "#edf1f7",
    borderBottomWidth: 1,
    // backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    flex: 0.35,
  },
  changeBtn: {
    width: "40%",
    backgroundColor: COLORS.Main,
    borderColor: COLORS.Main,
    borderWidth: 2,
    padding: 7,
    borderRadius: 5,
    alignItems: "center",
  },
  changeBtnText: {
    fontSize: 14,
    textTransform: "uppercase",
    color: "white",
  },
  personaInfo: {
    width: "100%",
    flex: 0.7,
    alignItems: "center",
  },
  titleView: {
    flexDirection: "row",
    flex: 0.15,
    width: "90%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    textTransform: "capitalize",
    fontSize: 16,
  },
  editBtn: {
    flexDirection: "row",
    alignItems: "center",
  },
  editIcon: {
    marginRight: 6,
    color: "#8f9bb3",
  },
  editText: {
    textTransform: "capitalize",
    fontSize: 14,
    color: "#8f9bb3",
  },
  row: {
    width: "100%",
    borderTopColor: "#edf1f7",
    borderTopWidth: 1,
    flex: 0.14,
    alignItems: "center",
    justifyContent: "center",
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
  },
  label: {
    width: "40%",
    textTransform: "capitalize",
    fontSize: 14,
    color: "#8f9bb3",
  },
  value: {
    width: "60%",
    padding: 11,
    textTransform: "capitalize",
    fontSize: 14,
    color: "black",
  },
  edit: {
    width: "55%",
    padding: 10,
    backgroundColor: "#f7f9fc",
    borderColor: "#edf1f7",
    borderWidth: 1,
    borderRadius: 3,
  },
});
