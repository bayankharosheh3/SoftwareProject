import { StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";
import PageHeader from "../PageHeader";

const ChatPage = () => {
  return (
    <View>
      <StatusBar
        backgroundColor={"#63b885"}
        barStyle={"dark-content"}
        animated={true}
      />
    </View>
  );
};

export default ChatPage;

const styles = StyleSheet.create({});
