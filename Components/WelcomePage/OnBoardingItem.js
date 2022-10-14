import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Image,
} from "react-native";
import React from "react";

import exampleImage from './../../assets/images/1.jpg'



const OnBoardingItem = ({ item }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <View style={{ flex: 0.3 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.subTitle}</Text>
      </View>
      <Image
        source={exampleImage}
        style={[styles.image, { width, resizeMode: "contain" }]}
      />
    </View>
  );
};

export default OnBoardingItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 0.3,
    justifyContent: "center",
    width: 200 , 
    height: 200,    
  },

  title: {
    fontWeight: "800",
    fontSize: 28,
    marginBottom: 10,
    color: "#000000",
    textAlign: "center",
  },
  description: {
    fontWeight: "300",
    color: "#000000",
    textAlign: "center",
    paddingHorizontal: 64,
  },
});
