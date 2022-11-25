import React, { useState, useRef } from "react";
import { StyleSheet, View, FlatList, Animated, Text } from "react-native";

import OnBoardingItem from "../Components/OnBoardingItem";
import Paginator from "../Components/Paginator";
import NextButton from "../Components/NextButton";
import slides from "./../assets/data/slides";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS } from "../assets/constants";

export default OnBoarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollTo = () => {
    console.log(currentIndex);
    console.log(slides.length);
    if (currentIndex < slides.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
      //   console.log(currentIndex);
    } else {
      console.log("last item");
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 3 }}>
        <FlatList
          data={slides}
          renderItem={({ item }) => <OnBoardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.slideId}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
      <View style={styles.btnContainer}>
        <Paginator data={slides} scrollX={scrollX} />
        <NextButton scrollTo={scrollTo} />
      </View>
      {/* <View
        style={{
          width: "100%",
          backgroundColor: "#000000b0",
          position: "absolute",
          bottom: 0,
          height: "100%",
        }}
      >
        <View
          style={{
            width: "100%",
            position: "absolute",
            bottom: 0,
            height: "30%",
            backgroundColor: "white",
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            alignItems: "center",
            // justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#8f9bb3",
              width: 40,
              height: 5,
              borderRadius: 4,
              marginTop:15,
              marginBottom:30,
            }}
          />
          <View
            style={{
              width: "90%",
              // alignItems: "center",
              flex: 0.7,
            }}
          >
            <Text
              style={{
                textTransform: "capitalize",
                fontSize: 18,
                fontWeight: "600",
                padding: 10,
                marginBottom: 10,
                textAlign: "center",
              }}
            >
              how would you sign up?
            </Text>
            <TouchableOpacity style={{ marginBottom: 10, width: "100%" }}>
              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  padding: 10,
                  alignItems: "center",
                }}
              >
                <FontAwesome5Icon
                  name="user-md"
                  style={{
                    fontSize: 26,
                    paddingRight: 20,
                    color: COLORS.Main,
                  }}
                />
                <View>
                  <Text
                    style={{
                      textTransform: "capitalize",
                      fontSize: 14,
                      fontWeight: "500",
                      width: "100%",
                    }}
                  >
                    doctor
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      width: "100%",
                      color: "#8f9bb3",
                    }}
                  >
                    Connect with your patients immediately.
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginBottom: 10, width: "100%" }}>
              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  padding: 10,
                  alignItems: "center",
                }}
              >
                <FontAwesome5Icon
                  name="user"
                  style={{
                    fontSize: 24,
                    paddingRight: 20,
                    color: COLORS.Main,
                  }}
                />
                <View>
                  <Text
                    style={{
                      textTransform: "capitalize",
                      fontSize: 14,
                      fontWeight: "500",
                      width: "100%",
                    }}
                  >
                    patient
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      width: "100%",
                      color: "#8f9bb3",
                    }}
                  >
                    Easiest way to book appointment with favorite doctor.
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  btnContainer: {
    width: "80%",
    // flex:.53,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    // borderColor: "red",
    // borderWidth: 2,
    paddingBottom: 35,
  },
});
