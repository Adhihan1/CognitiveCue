import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import PriceCard from "../components/PriceCard";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const Games = () => {
  return (
    <View style={[styles.games, styles.gamesFlexBox]}>
      <View style={[styles.frame, styles.frameFlexBox]}>
        <Text style={styles.market}>Memory Arcade</Text>
      </View>
      <View style={styles.inputsearch}>
        <Image
          style={[styles.bgIcon, styles.gamesLayout]}
          contentFit="cover"
          source={require("../assets/bg2.png")}
        />
        <Text style={styles.search}>Search</Text>
        <Image
          style={styles.iconsend}
          contentFit="cover"
          source={require("../assets/iconsend.png")}
        />
      </View>
      <View style={styles.frame1}>
        <PriceCard />
        <PriceCard textMarginTop={10} />
        <PriceCard textMarginTop={10} />
      </View>
      <View style={[styles.bottommenubar, styles.gamesFlexBox]}>
        <View style={[styles.vectorParent, styles.frameFlexBox]}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector14.png")}
          />
          <Image
            style={styles.vectorIcon1}
            contentFit="cover"
            source={require("../assets/vector15.png")}
          />
          <Image
            style={[styles.vectorIcon2, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector16.png")}
          />
          <Image
            style={[styles.vectorIcon2, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector17.png")}
          />
          <Image
            style={[styles.vectorIcon4, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector18.png")}
          />
        </View>
      </View>
      <View style={styles.contentmarketBlock}>
        <View style={styles.contentmarketBlockChild} />
        <Text style={[styles.item1Name, styles.textTypo]}>{`Item #1 Name
Goes Here`}</Text>
        <Text style={[styles.text, styles.textTypo]}>$19.99</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gamesFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  frameFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  gamesLayout: {
    overflow: "hidden",
    width: "100%",
  },
  vectorIconLayout: {
    width: 45,
    marginLeft: 24,
  },
  textTypo: {
    color: Color.black,
    fontSize: FontSize.uI14Semi_size,
    left: 0,
    textAlign: "left",
    position: "absolute",
  },
  market: {
    fontSize: FontSize.size_16xl,
    fontFamily: FontFamily.novaRound,
    color: Color.white,
    textAlign: "center",
  },
  frame: {
    backgroundColor: Color.dimgray,
    paddingHorizontal: 54,
    paddingVertical: Padding.p_xs,
    zIndex: 0,
    alignSelf: "stretch",
  },
  bgIcon: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_81xl,
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
  },
  search: {
    marginTop: -9,
    left: 16,
    fontSize: FontSize.uI16Semi_size,
    fontWeight: "500",
    fontFamily: FontFamily.uI16Medium,
    color: Color.gray03,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  iconsend: {
    marginTop: -17,
    right: 8,
    width: 34,
    height: 34,
    top: "50%",
    position: "absolute",
    display: "none",
  },
  inputsearch: {
    width: 343,
    height: 50,
    zIndex: 1,
    marginTop: 67,
    display: "none",
  },
  frame1: {
    width: 375,
    height: 535,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 0,
    zIndex: 2,
    marginTop: 67,
  },
  vectorIcon: {
    width: 64,
    height: 65,
  },
  vectorIcon1: {
    width: 48,
    marginLeft: 24,
    height: 67,
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
  },
  bottommenubar: {
    backgroundColor: Color.white,
    zIndex: 3,
    marginTop: 67,
    alignSelf: "stretch",
  },
  contentmarketBlockChild: {
    top: 0,
    right: 0,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.whitesmoke,
    height: 110,
    left: 0,
    position: "absolute",
  },
  item1Name: {
    top: 118,
    fontFamily: FontFamily.uI14Regular,
    width: 110,
  },
  text: {
    top: 160,
    fontWeight: "600",
    fontFamily: FontFamily.uI16Semi,
    display: "none",
  },
  contentmarketBlock: {
    top: 219,
    left: 175,
    height: 177,
    zIndex: 4,
    width: 110,
    position: "absolute",
    display: "none",
  },
  games: {
    backgroundColor: Color.slategray,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Games;
