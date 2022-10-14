import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

export default function Splash() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Splash page</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#63b885",
    alignItems: "center",
    justifyContent: "center",
  },
});
