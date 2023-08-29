import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";

const Welcome = () => {
  return (
    <Image
      style={styles.welcomeIcon}
      contentFit="cover"
      source={require("../assets/welcome.png")}
    />
  );
};

const styles = StyleSheet.create({
  welcomeIcon: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Welcome;
