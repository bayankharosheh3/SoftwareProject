import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Image,
  Pressable,
} from "react-native";
import React from "react";

import exampleImage from "./../assets/images/1.jpg";
import { COLORS } from "../assets/constants";

const OnBoardingItem = ({ item }) => {
  const { width } = useWindowDimensions();
  console.log(exampleImage + "0");

  return (
    <View style={[styles.container, { width }]}>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button}>
          <Text style={styles.text}>Skip</Text>
        </Pressable>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subTitle}>{item.subTitle}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <View style={styles.imgContainer}>
        <Image source={item.imageSrc} style={[styles.image]} />
      </View>
    </View>
  );
};

export default OnBoardingItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    // borderColor: "blue",
    // borderWidth: 5,
    alignItems: "center",
  },
  buttonContainer: {
    width: "80%",
    flex: 0.18,
    alignItems: "flex-end",
    justifyContent: "center",
    // borderColor: "red",
    // borderWidth: 2,
  },
  button: {
    paddingTop:50,
    alignItems: "center",
    justifyContent: "center",
  },
  text: { color: COLORS.Main },
  textContainer: {
    width: "80%",
    flex: 0.25,
    // borderColor: "red",
    // borderWidth: 2,
    alignItems: "flex-start",
  },
  imgContainer: {
    flex: 0.6,
    width: "80%",
    // borderColor: "red",
    // borderWidth: 2,
  },
  image: {
    justifyContent: "center",
    width: "100%",
    height: "80%",
  },

  title: {
    fontWeight: "400",
    fontSize: 30,
    marginBottom: 10,
    color: COLORS.Main,
    textAlign: "center",
    textTransform:'capitalize',
  },
  subTitle: {
    fontWeight: "300",
    color: "#000000",
    marginBottom: 10,
    fontSize: 28,
    textTransform:'capitalize',
  },
  description: {
    fontWeight: "300",
    color: "#000000",
    marginBottom: 10,
  },
});
