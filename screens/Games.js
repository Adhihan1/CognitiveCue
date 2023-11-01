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
        <View style={[styles.row1]}>
          <Pressable style={[styles.item3, styles.itemPosition]}>
            <Image
              contentFit="cover"
              source={require("../assets/memoryGame.png")}
              style={styles.item3Child}
            />
            <Text
              style={[styles.item3Name, styles.textTypo]}
            >{`Memory Game`}</Text>
            <Text style={[styles.text, styles.textTypo]}>Play</Text>
          </Pressable>
          <Pressable style={[styles.item2, styles.itemPosition]}>
            <Image
              contentFit="cover"
              source={require("../assets/triviaGame.png")}
              style={styles.item3Child}
            />
            <Text
              style={[styles.item3Name, styles.textTypo]}
            >{`Trivia Game`}</Text>
            <Text style={[styles.text, styles.textTypo]}>Play</Text>
          </Pressable>
          <Pressable style={[styles.item1, styles.itemPosition]}>
            <Image
              contentFit="cover"
              source={require("../assets/matchingGame.png")}
              style={styles.item3Child}
            />
            <Text
              style={[styles.item3Name, styles.textTypo]}
            >{`Matching Game`}</Text>
            <Text style={[styles.text, styles.textTypo]}>Play</Text>
          </Pressable>
        </View>
        <View style={[styles.row1]}>
          <Pressable style={[styles.item3, styles.itemPosition]}>
            <Image
              contentFit="cover"
              source={require("../assets/brainTraining.png")}
              style={styles.item3Child}
            />
            <Text
              style={[styles.item3Name, styles.textTypo]}
            >{`Brain Training`}</Text>
            <Text style={[styles.text, styles.textTypo]}>Play</Text>
          </Pressable>
          <Pressable style={[styles.item2, styles.itemPosition]}>
            <Image
              contentFit="cover"
              source={require("../assets/memoryMatch.png")}
              style={styles.item3Child}
            />
            <Text
              style={[styles.item3Name, styles.textTypo]}
            >{`Memory Match`}</Text>
            <Text style={[styles.text, styles.textTypo]}>Play</Text>
          </Pressable>
          <Pressable style={[styles.item1, styles.itemPosition]}>
            <Image
              contentFit="cover"
              source={require("../assets/wordSearch.png")}
              style={styles.item3Child}
            />
            <Text
              style={[styles.item3Name, styles.textTypo]}
            >{`Word Search`}</Text>
            <Text style={[styles.text, styles.textTypo]}>Play</Text>
          </Pressable>
        </View>
        <View style={[styles.row1]}>
          <Pressable style={[styles.item3, styles.itemPosition]}>
            <Image
              contentFit="cover"
              source={require("../assets/tidbitsAndTips.png")}
              style={styles.item3Child}
            />
            <Text
              style={[styles.item3Name, styles.textTypo]}
            >{`Tidbits and Tips`}</Text>
            <Text style={[styles.text, styles.textTypo]}>Play</Text>
          </Pressable>
          <Pressable style={[styles.item2, styles.itemPosition]}>
            <Image
              contentFit="cover"
              source={require("../assets/wordScramble.png")}
              style={styles.item3Child}
            />
            <Text
              style={[styles.item3Name, styles.textTypo]}
            >{`Word Scramble`}</Text>
            <Text style={[styles.text, styles.textTypo]}>Play</Text>
          </Pressable>
          <Pressable style={[styles.item1, styles.itemPosition]}>
            <Image
              contentFit="cover"
              source={require("../assets/soduku.png")}
              style={styles.item3Child}
            />
            <Text style={[styles.item3Name, styles.textTypo]}>{`Soduku`}</Text>
            <Text style={[styles.text, styles.textTypo]}>Play</Text>
          </Pressable>
        </View>
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
  itemPosition: {
    top: 0,
    position: "absolute",
  },
  textTypo: {
    marginTop: 8,
    textAlign: "left",
    color: Color.white,
    fontSize: FontSize.uI14Semi_size,
  },
  item3Child: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.whitesmoke,
    height: 110,
    width: 110,
  },
  item3Name: {
    fontFamily: FontFamily.uI14Regular,
    width: 110,
  },
  text: {
    fontWeight: "600",
    fontFamily: FontFamily.uI16Semi,
  },
  item3: {
    left: 246,
  },
  item2: {
    left: 123,
  },
  item1: {
    left: 0,
  },
  row1: {
    alignSelf: "stretch",
    flex: 1,
  },
});

export default Games;
