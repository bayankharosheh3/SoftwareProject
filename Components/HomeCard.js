import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SIZES } from "../assets/constants";

const HomeCard = ({ navigation, card }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={() => navigation.navigate(card.cardScreen)}
    >
      <Image source={card.cardIcon} style={styles.imgCard} />
      <Text>{card.cardTitle}</Text>
    </TouchableOpacity>
  );
};

export default HomeCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: 0.47 * SIZES.width - 35,
    margin: 10,
    height: 140,
    borderRadius: 10,
    padding: 15,
    shadowColor: "#9e9898",
    elevation: 5,
  },
  imgCard: {
    width: "100%",
    resizeMode: "cover",
    flex: 1,
  },
});
