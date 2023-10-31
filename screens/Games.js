import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import PriceCard from "../components/PriceCard";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";
import TopHeader from "../components/TopHeader";
import BottomMenuBarContainer from "../components/BottomMenuBarContainer";
import { SafeAreaView } from "react-native-safe-area-context";

const Games = ({ navigation }) => {
  return (
    <SafeAreaView style={[styles.games, styles.gamesFlexBox]}>
      <TopHeader title="Memory Arcade" />
      <View style={styles.frame1}>
        <PriceCard />
        <PriceCard textMarginTop={0} />
        <PriceCard textMarginTop={0} />
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
  frame1: {
    width: 375,
    height: 585,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 0,
    marginTop: 30,
    flexDirection: "column",
    display: "flex",
    marginTop: 50,
    marginBottom: 50,
  },
  games: {
    backgroundColor: Color.slategray,
    flex: 1,
  },
});

export default Games;
