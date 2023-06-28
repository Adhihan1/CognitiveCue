import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { FontFamily, Color, FontSize } from "./modules/GlobalStyles";

const Rating = () => {
  return (
    <View style={styles.rating}>
      <Image
        style={[styles.iosstatusBarwhiteIcon, styles.howAreYouPosition]}
        contentFit="cover"
        source={require("../assets/iosstatus-barwhite.png")}
      />
      <View style={styles.popup}>
        <Image
          style={styles.bgIcon}
          contentFit="cover"
          source={require("../assets/bg.png")}
        />
        <Image
          style={styles.popupChild}
          contentFit="cover"
          source={require("../assets/group-18.png")}
        />
        <Pressable style={[styles.buttonprimary, styles.textLayout]}>
          <Text style={[styles.iLoveIt, styles.text1Typo]}>I love it!</Text>
        </Pressable>
        <Pressable style={styles.dontLikeThe} />
        <View style={[styles.text, styles.textLayout]}>
          <Text style={[styles.howAreYou, styles.text1Typo]}>
            HOW ARE YOU LIKING OUR APP SO FAR?
          </Text>
          <Text style={[styles.text1, styles.text1Typo]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  howAreYouPosition: {
    left: 0,
    top: 0,
  },
  textLayout: {
    width: 311,
    position: "absolute",
  },
  text1Typo: {
    textAlign: "center",
    fontFamily: FontFamily.ostrich,
    fontWeight: "800",
  },
  iosstatusBarwhiteIcon: {
    right: 0,
    maxWidth: "100%",
    height: 44,
    position: "absolute",
    overflow: "hidden",
  },
  bgIcon: {
    top: -18,
    left: -16,
    borderRadius: 8,
    width: 375,
    height: 467,
    position: "absolute",
  },
  popupChild: {
    top: 32,
    left: 76,
    width: 192,
    height: 32,
    position: "absolute",
  },
  iLoveIt: {
    color: Color.white,
    fontSize: FontSize.ostrich_size,
    fontFamily: FontFamily.ostrich,
    fontWeight: "800",
  },
  buttonprimary: {
    top: 307,
    borderRadius: 100,
    backgroundColor: Color.red,
    paddingHorizontal: 32,
    paddingVertical: 16,
    alignItems: "center",
    left: 16,
  },
  dontLikeThe: {
    top: 376,
    left: 16,
    position: "absolute",
  },
  howAreYou: {
    fontSize: 35,
    color: Color.blue,
    width: 311,
    position: "absolute",
    left: 0,
    top: 0,
  },
  text1: {
    top: 47,
    left: 207,
    color: "#000",
    fontSize: FontSize.ostrich_size,
    fontFamily: FontFamily.ostrich,
    fontWeight: "800",
    position: "absolute",
  },
  text: {
    top: 148,
    height: 62,
    left: 16,
  },
  popup: {
    top: 193,
    width: 343,
    height: 427,
    left: 16,
    position: "absolute",
  },
  rating: {
    backgroundColor: Color.blue,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Rating;
