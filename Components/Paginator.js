import { StyleSheet, View, Animated, useWindowDimensions } from "react-native";
import React from "react";
import { COLORS } from "../assets/constants";

const Paginator = ({ data, scrollX }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={styles.container}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [8, 23, 8],
          extrapolate: "clamp",
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            style={[styles.dot, { width: dotWidth, opacity }]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
};

export default Paginator;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  dot: {
    height: 8,
    borderRadius: 5,
    backgroundColor: COLORS.Main,
    marginHorizontal: 5,
  },
});
