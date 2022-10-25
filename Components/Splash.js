import { StyleSheet, Text, View, Image } from "react-native";
import { COLORS } from "../assets/constants/theme";
export default function Splash() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("./../assets/images/logo.png")}
          style={styles.logo}
        />
        <Text style={styles.text}>Clinics</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:"100%",
    flex: 1,
    backgroundColor: COLORS.Main,
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    width: 200,
    height: 150,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 300,
    right: 18,
    top: 40,
  },
  text: {
    fontSize: "24",
    fontWeight: "800",
    color: COLORS.white,
    position: "absolute",
    bottom: 0,
  },
});
