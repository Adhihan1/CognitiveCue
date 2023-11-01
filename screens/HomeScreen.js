import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomMenuBarContainer from "../components/BottomMenuBarContainer";

const HomeScreen = ({ navigation }) => {
  [dailyQuote, setDailyQuote] = React.useState(
    `"Every day is a new opportunity to create beautiful memories."`
  );
  return (
    <SafeAreaView style={[styles.homeScreen, styles.homeScreenFlexBox]}>
      <View style={[styles.header, styles.headerFlexBox]}>
        <View style={styles.frameParent}>
          <View style={styles.memoryLaneWrapper}>
            <Text style={styles.memoryLane}>Memory Lane</Text>
          </View>
          <Pressable
            onPress={() => {
              navigation.navigate("ProfilePosts");
            }}
          >
            <Image
              style={styles.userIcon}
              contentFit="cover"
              source={require("../assets/user.png")}
            />
          </Pressable>
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
            Take Medication
          </Text>
        </View>
        <View style={[styles.notif1, styles.notif1Bg]}>
          <Text style={[styles.notif1text, styles.idkGeoTypo]}>Do Yoga</Text>
        </View>
        <View style={[styles.notif1, styles.notif1Bg]}>
          <Text style={[styles.notif1text, styles.idkGeoTypo]}>
            Call Family
          </Text>
        </View>
      </View>
      <View style={[styles.dailytipquote, styles.nameLayout]}>
        <Text style={[styles.dailyTipquote, styles.dailyTipquoteTypo]}>
          Daily Tip/Quote
        </Text>
        <View style={[styles.tipquote, styles.notif1Bg]}>
          <Text style={[styles.idkGeo, styles.idkGeoTypo]}>{dailyQuote}</Text>
        </View>
      </View>
      <BottomMenuBarContainer navigation={navigation} />
    </SafeAreaView>
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
    borderRadius: 10,
    color: Color.white,
  },
  notif1Bg: {
    backgroundColor: Color.white,
    alignItems: "center",
  },
  idkGeoTypo: {
    color: Color.black,
    fontFamily: FontFamily.rosarioRegular,
    fontSize: 23,
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
    color: Color.white,
    fontSize: FontSize.size_16xl,
    fontFamily: FontFamily.novaRound,
    marginLeft: 10,
  },
  memoryLaneWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  userIcon: {
    height: 55,
    marginLeft: 20,
    alignSelf: "center",
    alignItems: "center",
    width: 48,
  },
  frameParent: {
    flexDirection: "row",
  },
  header: {
    alignItems: "center",
    backgroundColor: Color.dimgray,
    paddingVertical: 12,
    alignSelf: "stretch",
  },
  hiVictoria: {
    fontSize: 33,
    fontFamily: FontFamily.ramblaRegular,
    width: 200,
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
  notifications1: {},
  notif1text: {
    width: 296,
  },
  notif1: {
    paddingHorizontal: Padding.p_2xl,
    marginTop: 13,
    justifyContent: "center",
    borderRadius: 15,
    paddingVertical: 15,
  },
  notifications: {
    marginTop: 10,
    alignItems: "center",
    flex: 1,
  },
  dailyTipquote: {},
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
