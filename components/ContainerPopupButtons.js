import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const ContainerPopupButtons = () => {
  return (
    <View style={styles.popup}>
      <Image
        style={styles.bgIcon}
        contentFit="cover"
        source={require("../assets/bg1.png")}
      />
      <Pressable style={[styles.buttonprimary, styles.notRightNowPosition]}>
        <Text style={styles.iLoveIt}>I love it!</Text>
      </Pressable>
      <Text style={[styles.notRightNow, styles.notRightNowPosition]}>
        Not right now.
      </Text>
      <View style={[styles.text, styles.textLayout]}>
        <Text style={[styles.howAreYou, styles.text1Clr]}>
          HOW ARE YOU LIKING OUR APP SO FAR?
        </Text>
        <Text style={[styles.text1, styles.text1Clr]} />
      </View>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector13.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  notRightNowPosition: {
    width: 311,
    left: 17,
    position: "absolute",
  },
  textLayout: {
    height: 84,
    width: 315,
  },
  text1Clr: {
    color: Color.black,
    textAlign: "center",
    position: "absolute",
  },
  bgIcon: {
    top: -18,
    left: -16,
    borderRadius: Border.br_5xs,
    width: 375,
    height: 467,
    position: "absolute",
  },
  iLoveIt: {
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.poetsonOne,
    color: Color.white,
    textAlign: "center",
  },
  buttonprimary: {
    top: 271,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.dimgray,
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_base,
    alignItems: "center",
  },
  notRightNow: {
    top: 352,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.redRoseBold,
    color: Color.dimgray,
    fontWeight: "700",
    textAlign: "center",
  },
  howAreYou: {
    top: 0,
    left: 0,
    fontSize: FontSize.size_16xl,
    fontFamily: FontFamily.openSansBold,
    height: 84,
    width: 315,
    fontWeight: "700",
  },
  text1: {
    top: 47,
    left: 207,
    fontSize: FontSize.uI16Semi_size,
    fontWeight: "800",
    fontFamily: FontFamily.ostrich,
  },
  text: {
    top: 129,
    left: 13,
    position: "absolute",
  },
  vectorIcon: {
    top: 45,
    left: 10,
    width: 322,
    height: 54,
    position: "absolute",
  },
  popup: {
    width: 343,
    height: 427,
  },
});

export default ContainerPopupButtons;
