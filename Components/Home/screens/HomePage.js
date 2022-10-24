import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SIZES } from "../constants";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import {
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import homepageCards from "../../../assets/data/homepageCards";
const HomePage = () => {
  const Card = (card) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          backgroundColor: "white",
          width: 0.5 * SIZES.width - 35,
          margin: 10,
          height: 160,
          borderRadius: 10,
          padding: 15,
          shadowColor: "#9e9898",
          elevation: 5,
        }}
      >
        <Image
          source={card.cardIcon}
          style={{
            width: "100%",
            resizeMode: "cover",
            flex: 1,
          }}
        />
        <Text>{card.cardTitle}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.homeContainer}>
      <StatusBar
        backgroundColor={"#63b885"}
        barStyle={"dark-content"}
        animated={true}
      />
      <View style={styles.header}>
        <Text style={styles.title}>Home Page</Text>
        <View style={styles.searchContainer}>
          <FontAwesome5Icon
            name="search"
            size={22}
            style={{ marginHorizontal: 20 }}
          />
          <TextInput placeholder="Search" style={{ flex: 1 }} />
        </View>
      </View>
      <Text
        style={{
          paddingHorizontal: 20,
          paddingVertical: 30,
        }}
      >
        {homepageCards[1].cardTitle}
      </Text>

      <FlatList
        data={homepageCards}
        style={{
          paddingHorizontal: 20,
          paddingVertical: 30,
        }}
        contentContainerStyle={{ flex: 1, alignItems: "flex-start" }}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => <Card card={item} />}
      />
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    position: "relative",
  },
  header: {
    width: "100%",
    height: 0.17 * SIZES.height,
    padding: 30,
    backgroundColor: "#63b885",
    position: "relative",
  },
  title: {
    fontSize: 30,
    color: "white",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    height: 50,
    borderRadius: 25,
    backgroundColor: "white",
    marginVertical: 20,
  },
});
