import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import PriceCard from "../components/PriceCard";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";
import BottomMenuBarContainer from "../components/BottomMenuBarContainer";
import { SafeAreaView } from "react-native-safe-area-context";

const Games = ({ navigation }) => {
  return (
    <SafeAreaView style={[styles.games, styles.gamesFlexBox]}>
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
        <PriceCard textMarginTop={11} />
      </View>
      <BottomMenuBarContainer navigation={navigation} />
    </SafeAreaView>
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
  },
  gamesLayout: {
    width: "100%",
  },
  vectorIconLayout: {
    width: 45,
    marginLeft: 24,
  },
  textTypo: {
    color: Color.black,
    fontSize: FontSize.uI14Semi_size,
    textAlign: "left",
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
  inputsearch: {
    width: 343,
    height: 50,
    zIndex: 1,
    marginTop: 67,
    display: "none",
  },
  frame1: {
    width: 375,
    height: 565,
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
  },
  contentmarketBlockChild: {
    top: 0,
    right: 0,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.whitesmoke,
    height: 110,
    left: 0,
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
    height: "100%",
    width: "100%",
  },
});

export default Games;
