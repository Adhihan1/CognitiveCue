import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const TopHeader = (props) => {
  return (
    <View style={[styles.heading]}>
      <Text style={[styles.headingText]}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    alignItems: "center",
    backgroundColor: Color.dimgray,
    paddingVertical: 12,
    alignSelf: "stretch",
  },
  headingText: {
    color: Color.white,
    fontSize: FontSize.size_16xl,
    fontFamily: FontFamily.novaRound,
  },
});

export default TopHeader;
