import { StyleSheet, Text, View, StatusBar } from "react-native";
import React, { useState, useCallback, useEffect } from "react";
import PageHeader from "../PageHeader";
import { Bubble, GiftedChat, Send } from "react-native-gifted-chat";
import { COLORS } from "../../assets/constants";
import FontAwesome5Icons from "react-native-vector-icons/FontAwesome5";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const ChatPage = ({ route, navigation }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
        image: 'https://facebook.github.io/react/img/logo_og.png',
      },
      {
        _id: 2,
        text: "hi",
        createdAt: new Date(),
        user: {
          _id: 1,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: COLORS.Main,
          },
        }}
        textStyle={{
          right: {
            color: "#fff",
          },
        }}
      />
    );
  };

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View>
          <FontAwesome5Icons
            name="share"
            style={{ marginBottom: 10, marginRight: 10 }}
            size={25}
            color={COLORS.Main}
          />
        </View>
      </Send>
    );
  };

  const scrollToBottomComponent = () => {
    return (
      <FontAwesome5Icons name="angle-double-down" size={24} color="#333" />
    );
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
      renderBubble={renderBubble}
      renderSend={renderSend}
      scrollToBottom
      scrollToBottomComponent={scrollToBottomComponent}
    />
  );
};

export default ChatPage;

const styles = StyleSheet.create({});
