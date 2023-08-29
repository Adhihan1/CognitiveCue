import * as React from "react";
import { StyleSheet, View } from "react-native";
import ContainerPopupButtons from "../components/ContainerPopupButtons";
import { Color } from "../GlobalStyles";

const Rating = () => {
  return (
    <View style={styles.rating}>
      <ContainerPopupButtons />
    </View>
  );
};

const styles = StyleSheet.create({
  rating: {
    backgroundColor: Color.slategray,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Rating;
