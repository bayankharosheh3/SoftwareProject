import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import Stars from "react-native-stars";
import { COLORS } from "../assets/constants";
import messages from "../assets/data/messages";
import { TouchableOpacity } from "react-native-gesture-handler";

const ReviewsScreen = () => {
  const rate = 3.5;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.imgView}>
            <Image
              style={styles.imgProfile}
              source={require("../assets/images/1.png")}
            />
          </View>
          <View style={styles.content}>
            <Text style={styles.userName1}>doctor name</Text>
            <Text style={styles.specialty}>doctor Specialty</Text>
          </View>
        </View>
        <View style={styles.row}>
          <Text style={styles.rate}>{rate}</Text>
          <View style={styles.stars}>
            <Stars
              rating={rate}
              count={5}
              half={true}
              spacing={4}
              fullStar={<Icon name={"star"} style={[styles.myStarStyle]} />}
              emptyStar={
                <Icon
                  name={"star-o"}
                  style={[styles.myStarStyle, styles.myEmptyStarStyle]}
                />
              }
              halfStar={
                <Icon name={"star-half-empty"} style={[styles.myStarStyle]} />
              }
            />
          </View>
        </View>
        <View style={styles.list}>
          <Text style={styles.listTitle}>others Reviews</Text>
          <FlatList
            data={messages}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <View style={styles.userInfo}>
                  <View style={styles.userImgWrapper}>
                    <Image
                      style={styles.userImg}
                      source={require("../assets/images/1.png")}
                    />
                  </View>
                  <View style={styles.textSection}>
                    <View style={styles.userInfoText}>
                      <Text style={styles.userName}>{item.userName}</Text>
                      <Text style={styles.postTime}>{item.messageTime}</Text>
                    </View>
                    <Text style={styles.messageText}>{item.messageText}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default ReviewsScreen;

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop:60,
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor:COLORS.white,
  },
  container: {
    width: "90%",
    flex: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "",
    borderBottomColor: COLORS.BorderColor,
    borderBottomWidth: 1,
    flex: 0.1,
  },
  list: {
    flex: 0.8,
    // backgroundColor: "red",
  },

  imgView: {
    width: "25%",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
    marginBottom: 20,
  },
  imgProfile: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor:COLORS.Main,
    borderWidth:1,
  },
  content: {
    width: "67%",
    marginBottom: 40,
  },
  stars: {
    width: "30%",
    justifyContent: "flex-end",
  },
  userName1: {
    fontSize: 22,
    paddingBottom: 2,
    textTransform: "capitalize",
  },
  specialty: {
    color: COLORS.DetailsColor,
  },
  myStarStyle: {
    color: COLORS.Main,
    backgroundColor: "transparent",
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    fontSize: 22,
  },
  rate: {
    fontSize: 20,
    color: COLORS.Main,
    fontWeight: "600",
    // width: "15%",
    paddingHorizontal: 5,
    marginRight: 20,
  },
  card: {
    width: "100%",
  },
  userInfo: {
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
  userName: {
    fontSize: 14,
    fontWeight: "bold",
    // fontFamily: "Lato-Regular",
  },
  postTime: {
    fontSize: 12,
    color: "#666",
    // fontFamily: "Lato-Regular",
  },
  messageText: {
    fontSize: 14,
    color: "#333333",
  },
  listTitle: {
    fontSize: 18,
    paddingVertical: 10,
    textTransform: "capitalize",
  },
});
