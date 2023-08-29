import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const HomeScreen = () => {
  return (
    <View style={[styles.homeScreen, styles.homeScreenFlexBox]}>
      <View style={[styles.header, styles.headerFlexBox]}>
        <View style={styles.frameParent}>
          <View style={styles.memoryLaneWrapper}>
            <Text style={styles.memoryLane}>Memory Lane</Text>
          </View>
          <Image
            style={styles.userIcon}
            contentFit="cover"
            source={require("../assets/user.png")}
          />
        </View>
      </View>
      <View style={[styles.name, styles.nameLayout]}>
        <Text style={styles.hiVictoria}>Hi Victoria!</Text>
      </View>
      <View style={styles.notifications}>
        <Text style={[styles.notifications1, styles.dailyTipquoteTypo]}>
          Notifications
        </Text>
        <View style={[styles.notif1, styles.notif1Bg]}>
          <Text style={[styles.notif1text, styles.idkGeoTypo]}>
            notif sample
          </Text>
        </View>
        <View style={[styles.notif1, styles.notif1Bg]}>
          <Text style={[styles.notif1text, styles.idkGeoTypo]}>
            notif sample
          </Text>
        </View>
        <View style={[styles.notif1, styles.notif1Bg]}>
          <Text style={[styles.notif1text, styles.idkGeoTypo]}>
            notif sample
          </Text>
        </View>
      </View>
      <View style={[styles.dailytipquote, styles.nameLayout]}>
        <Text style={[styles.dailyTipquote, styles.dailyTipquoteTypo]}>
          Daily Tip/Quote
        </Text>
        <View style={[styles.tipquote, styles.notif1Bg]}>
          <Text style={[styles.idkGeo, styles.idkGeoTypo]}>idk - “geo”</Text>
        </View>
      </View>
      <View style={[styles.bottommenubar, styles.notif1Bg]}>
        <View style={[styles.vectorParent, styles.homeScreenFlexBox]}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector5.png")}
          />
          <Image
            style={styles.vectorIcon1}
            contentFit="cover"
            source={require("../assets/vector6.png")}
          />
          <Image
            style={[styles.vectorIcon2, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector7.png")}
          />
          <Image
            style={[styles.vectorIcon2, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector8.png")}
          />
          <Image
            style={[styles.vectorIcon4, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector10.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeScreenFlexBox: {
    overflow: "hidden",
    alignItems: "center",
  },
  headerFlexBox: {
    alignSelf: "stretch",
    justifyContent: "center",
  },
  nameLayout: {
    width: 375,
    marginTop: 10,
    alignItems: "center",
  },
  dailyTipquoteTypo: {
    fontFamily: FontFamily.rosarioRegular,
    fontSize: FontSize.size_6xl,
    textAlign: "left",
    color: Color.white,
  },
  notif1Bg: {
    backgroundColor: Color.white,
    alignItems: "center",
  },
  idkGeoTypo: {
    color: Color.black,
    fontFamily: FontFamily.rosarioRegular,
    fontSize: FontSize.size_6xl,
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  vectorIconLayout: {
    width: 45,
    marginLeft: 24,
  },
  memoryLane: {
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.novaRound,
    width: 195,
    textAlign: "left",
    color: Color.white,
    alignSelf: "stretch",
  },
  memoryLaneWrapper: {
    height: 36,
    flexDirection: "row",
    alignItems: "center",
  },
  userIcon: {
    height: 55,
    marginLeft: 20,
    width: 48,
  },
  frameParent: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  header: {
    backgroundColor: Color.dimgray,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 71,
    opacity: 0.5,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  hiVictoria: {
    fontSize: 33,
    fontFamily: FontFamily.ramblaRegular,
    width: 146,
    display: "flex",
    textAlign: "center",
    color: Color.white,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    padding: Padding.p_3xs,
    marginTop: 10,
    justifyContent: "center",
  },
  notifications1: {
    width: 136,
  },
  notif1text: {
    width: 296,
  },
  notif1: {
    borderRadius: Border.br_60xl,
    height: 69,
    paddingHorizontal: Padding.p_2xl,
    paddingVertical: Padding.p_13xl,
    marginTop: 11,
    justifyContent: "center",
  },
  notifications: {
    width: 369,
    marginTop: 10,
    alignItems: "center",
    flex: 1,
  },
  dailyTipquote: {
    width: 167,
  },
  idkGeo: {
    width: 278,
  },
  tipquote: {
    borderRadius: 24,
    height: 210,
    paddingHorizontal: 33,
    paddingVertical: 35,
    marginTop: 13,
    flexDirection: "row",
  },
  dailytipquote: {
    marginTop: 10,
    flex: 1,
  },
  vectorIcon: {
    width: 64,
    height: 65,
  },
  vectorIcon1: {
    marginLeft: 24,
    height: 67,
    width: 48,
  },
  vectorIcon2: {
    height: 67,
    width: 45,
  },
  vectorIcon4: {
    height: 66,
  },
  vectorParent: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_8xs,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  bottommenubar: {
    marginTop: 10,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  homeScreen: {
    backgroundColor: Color.slategray,
    width: "100%",
    height: 812,
    alignItems: "center",
    flex: 1,
  },
});

export default HomeScreen;
