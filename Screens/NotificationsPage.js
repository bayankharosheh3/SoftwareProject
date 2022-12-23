import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import messages from "../assets/data/messages";

const NotificationsPage = () => {
  return (
    <View>
      <FlatList
        style={styles.list}
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <View style={styles.Notification}>
              <View style={styles.Container}>
                <Text style={styles.notificationTitle}>title</Text>
                <Text style={styles.notificationDesc}>
                  information information information
                  information information informationinformationinformation
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default NotificationsPage;

const styles = StyleSheet.create({
  list: {
    backgroundColor: "white",
  },
  Notification: {
    height: 100,
    // backgroundColor: "pink",
    borderBottomColor: "#edf1f7",
    borderBottomWidth: 1,
    alignItems: "center",
  },
  Container: {
    height: "100%",
    width: "90%",
    justifyContent: "center",
    // backgroundColor: "blue",
  },
  notificationTitle: {
    fontSize: 16,
  },
  notificationDesc: {
    fontSize: 14,
    color: "#8f9bb3",
  },
});
