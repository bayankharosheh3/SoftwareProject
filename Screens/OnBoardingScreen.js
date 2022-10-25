import React, { useState, useRef } from "react";
import { StyleSheet, View, FlatList, Animated } from "react-native";

import OnBoardingItem from "../Components/OnBoardingItem";
import Paginator from "../Components/Paginator";
import NextButton from "../Components/NextButton";
import slides from "./../assets/data/slides";

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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width:'100%',
    flex: 1,
    // backgroundColor: "#63b885",
    alignItems:"center",
    justifyContent:'center'
  },
  btnContainer:{
    width:'80%',
    // flex:.53,
    flexDirection:'row',
    alignItems:'flex-end',
    justifyContent: "space-between",
    // borderColor: "red",
    // borderWidth: 2,
    paddingBottom:35,
  }
});
