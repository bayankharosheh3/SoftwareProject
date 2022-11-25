import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  Main: "#63b885",
  FontColorNoBackground: "#000",
  FontColorWithBackground: "#fff",
  BorderColor:'',
  black: "#171717",
  white: "#FFFFFF",
};

export const SIZES = {
  base: 10,
  width,
  height,
};
