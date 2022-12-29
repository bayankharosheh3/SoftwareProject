import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import messages from "../assets/data/messages";
import { ScreenHeader } from "../Components";
import { useLayoutEffect } from "react";
// import { FlatList } from "react-native-gesture-handler";
// import messages from "../assets/data/messages";

const MessagesScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    const hideUnsubscribe = navigation.addListener('focus', e => {
      let parentNav = navigation.getParent();
      parentNav.setOptions({
        tabBarStyle: {display: 'flex'},
      });
    });
  }, []);
  return (
    <View style={styles.mainContainer}>
      <ScreenHeader title={"Chat"} />

      <View style={styles.container}>
        {/* <Button
        title="click"
        onPress={() => navigation.navigate("Chat")}
      ></Button> */}
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() =>
                navigation.navigate("Chat", { userName: item.userName })
              }
            >
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
            //   <View>
            //     <Text>{item.userName}</Text>
            //   </View>
          )}
        />
      </View>
    </View>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
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
});
